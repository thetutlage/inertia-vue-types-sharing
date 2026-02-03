export const controllers = {
  Comments: () => import('#controllers/comments_controller'),
  NewAccount: () => import('#controllers/new_account_controller'),
  Posts: () => import('#controllers/posts_controller'),
  Session: () => import('#controllers/session_controller'),
}
