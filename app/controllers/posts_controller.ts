import Post from '#models/post'
import Comment from '#models/comment'
import PostTransformer from '#transformers/post_transformer'
import CommentTransformer from '#transformers/comment_transformer'
import { createPostValidator } from '#validators/post'
import type { HttpContext } from '@adonisjs/core/http'

export default class PostsController {
  async index({ inertia }: HttpContext) {
    const posts = await Post.query().preload('user').orderBy('created_at', 'desc')

    return inertia.render('posts', {
      posts: PostTransformer.transform(posts),
    })
  }

  async show({ params, inertia, request }: HttpContext) {
    const post = await Post.findOrFail(params.id)
    await post.load('user')

    const commentEmail = request.cookie('comment_email') ?? ''

    return inertia.render('posts/show', {
      post: PostTransformer.transform(post),
      comments: inertia.defer(async () => {
        const comments = await Comment.query()
          .where('post_id', post.id)
          .orderBy('created_at', 'asc')
        return CommentTransformer.transform(comments)
      }),
      commentEmail,
    })
  }

  async create({ inertia }: HttpContext) {
    return inertia.render('posts/create', {})
  }

  async store({ request, auth, response }: HttpContext) {
    const payload = await request.validateUsing(createPostValidator)

    await Post.create({
      ...payload,
      userId: auth.user!.id,
    })

    response.redirect().toRoute('posts.index')
  }
}
