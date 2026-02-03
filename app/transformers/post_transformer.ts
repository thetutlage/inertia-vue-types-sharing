import type Post from '#models/post'
import { BaseTransformer } from '@adonisjs/core/transformers'
import UserTransformer from '#transformers/user_transformer'

export default class PostTransformer extends BaseTransformer<Post> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'title', 'body', 'createdAt', 'updatedAt']),
      user: this.resource.user ? UserTransformer.transform(this.resource.user) : undefined,
    }
  }
}
