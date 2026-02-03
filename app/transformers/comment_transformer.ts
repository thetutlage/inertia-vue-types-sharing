import type Comment from '#models/comment'
import { BaseTransformer } from '@adonisjs/core/transformers'

export default class CommentTransformer extends BaseTransformer<Comment> {
  toObject() {
    return this.pick(this.resource, ['id', 'email', 'body', 'createdAt'])
  }
}
