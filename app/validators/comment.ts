import vine from '@vinejs/vine'

export const createCommentValidator = vine.create({
  email: vine.string().trim().email(),
  body: vine.string().trim().minLength(1),
})
