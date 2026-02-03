/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  posts: {
    index: typeof routes['posts.index']
    show: typeof routes['posts.show']
    create: typeof routes['posts.create']
    store: typeof routes['posts.store']
  }
  comments: {
    store: typeof routes['comments.store']
  }
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
}
