export const controllers = {
  NewAccount: () => import('#controllers/new_account_controller'),
  Session: () => import('#controllers/session_controller'),
  Posts: () => import('#controllers/posts_controller'),
  Comments: () => import('#controllers/comments_controller'),
}
