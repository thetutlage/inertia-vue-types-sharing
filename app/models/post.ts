import User from '#models/user'
import Comment from '#models/comment'
import { PostSchema } from '#database/schema'
import { belongsTo, hasMany } from '@adonisjs/lucid/orm'
import { type BelongsTo, type HasMany } from '@adonisjs/lucid/types/relations'

export default class Post extends PostSchema {
  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @hasMany(() => Comment)
  declare comments: HasMany<typeof Comment>
}
