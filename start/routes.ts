/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').renderInertia('home', {}).as('home')

router
  .group(() => {
    router.get('signup', [controllers.NewAccount, 'create'])
    router.post('signup', [controllers.NewAccount, 'store'])

    router.get('login', [controllers.Session, 'create'])
    router.post('login', [controllers.Session, 'store'])
  })
  .use(middleware.guest())

router
  .group(() => {
    router.post('logout', [controllers.Session, 'destroy'])
  })
  .use(middleware.auth())

router.get('posts', [controllers.Posts, 'index'])
router.get('posts/create', [controllers.Posts, 'create']).use(middleware.auth())
router.get('posts/:id', [controllers.Posts, 'show'])
router.post('posts/:id/comments', [controllers.Comments, 'store'])
router.post('posts', [controllers.Posts, 'store']).use(middleware.auth())
