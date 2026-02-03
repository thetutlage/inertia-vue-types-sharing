import Comment from '#models/comment'
import { createCommentValidator } from '#validators/comment'
import type { HttpContext } from '@adonisjs/core/http'

export default class CommentsController {
  async store({ request, params, response }: HttpContext) {
    const payload = await request.validateUsing(createCommentValidator)

    await Comment.create({
      postId: Number(params.id),
      ...payload,
    })

    response.cookie('comment_email', payload.email, {
      path: '/',
      sameSite: 'lax',
      maxAge: '30d',
    })

    response.redirect().toRoute('posts.show', { id: params.id })
  }
}
