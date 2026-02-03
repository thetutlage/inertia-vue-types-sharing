/// <reference path="./manifest.d.ts" />
import type { InferData, InferVariants } from '@adonisjs/core/types/transformers'
import type { InferSharedProps } from '@adonisjs/inertia/types'
import type UserTransformer from '#transformers/user_transformer'
import type PostTransformer from '#transformers/post_transformer'
import type CommentTransformer from '#transformers/comment_transformer'
import type InertiaMiddleware from '#middleware/inertia_middleware'

export namespace Data {
  export type User = InferData<UserTransformer>
  export namespace User {
    export type Variants = InferVariants<UserTransformer>
  }
  export type Post = InferData<PostTransformer>
  export namespace Post {
    export type Variants = InferVariants<PostTransformer>
  }
  export type Comment = InferData<CommentTransformer>
  export namespace Comment {
    export type Variants = InferVariants<CommentTransformer>
  }
  export type SharedProps = InferSharedProps<InertiaMiddleware>
}
