/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  newAccount: {
    create: typeof routes['new_account.create']
    store: typeof routes['new_account.store']
  }
  session: {
    create: typeof routes['session.create']
    store: typeof routes['session.store']
    destroy: typeof routes['session.destroy']
  }
  posts: {
    index: typeof routes['posts.index']
    create: typeof routes['posts.create']
    show: typeof routes['posts.show']
    store: typeof routes['posts.store']
  }
  comments: {
    store: typeof routes['comments.store']
  }
}
