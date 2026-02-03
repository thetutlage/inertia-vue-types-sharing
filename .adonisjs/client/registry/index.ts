/* eslint-disable prettier/prettier */
import type { AdonisEndpoint } from '@tuyau/core/types'
import type { Registry } from './schema.d.ts'
import type { ApiDefinition } from './tree.d.ts'

const placeholder: any = {}

const routes = {
  'home': {
    methods: ["GET","HEAD"],
    pattern: '/',
    tokens: [{"old":"/","type":0,"val":"/","end":""}],
    types: placeholder as Registry['home']['types'],
  },
  'posts.index': {
    methods: ["GET","HEAD"],
    pattern: '/posts',
    tokens: [{"old":"/posts","type":0,"val":"posts","end":""}],
    types: placeholder as Registry['posts.index']['types'],
  },
  'posts.show': {
    methods: ["GET","HEAD"],
    pattern: '/posts/:id',
    tokens: [{"old":"/posts/:id","type":0,"val":"posts","end":""},{"old":"/posts/:id","type":1,"val":"id","end":""}],
    types: placeholder as Registry['posts.show']['types'],
  },
  'comments.store': {
    methods: ["POST"],
    pattern: '/posts/:id/comments',
    tokens: [{"old":"/posts/:id/comments","type":0,"val":"posts","end":""},{"old":"/posts/:id/comments","type":1,"val":"id","end":""},{"old":"/posts/:id/comments","type":0,"val":"comments","end":""}],
    types: placeholder as Registry['comments.store']['types'],
  },
  'new_account.create': {
    methods: ["GET","HEAD"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.create']['types'],
  },
  'new_account.store': {
    methods: ["POST"],
    pattern: '/signup',
    tokens: [{"old":"/signup","type":0,"val":"signup","end":""}],
    types: placeholder as Registry['new_account.store']['types'],
  },
  'session.create': {
    methods: ["GET","HEAD"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.create']['types'],
  },
  'session.store': {
    methods: ["POST"],
    pattern: '/login',
    tokens: [{"old":"/login","type":0,"val":"login","end":""}],
    types: placeholder as Registry['session.store']['types'],
  },
  'session.destroy': {
    methods: ["POST"],
    pattern: '/logout',
    tokens: [{"old":"/logout","type":0,"val":"logout","end":""}],
    types: placeholder as Registry['session.destroy']['types'],
  },
  'posts.create': {
    methods: ["GET","HEAD"],
    pattern: '/posts/create',
    tokens: [{"old":"/posts/create","type":0,"val":"posts","end":""},{"old":"/posts/create","type":0,"val":"create","end":""}],
    types: placeholder as Registry['posts.create']['types'],
  },
  'posts.store': {
    methods: ["POST"],
    pattern: '/posts',
    tokens: [{"old":"/posts","type":0,"val":"posts","end":""}],
    types: placeholder as Registry['posts.store']['types'],
  },
} as const satisfies Record<string, AdonisEndpoint>

export { routes }

export const registry = {
  routes,
  $tree: {} as ApiDefinition,
}

declare module '@tuyau/core/types' {
  export interface UserRegistry {
    routes: typeof routes
    $tree: ApiDefinition
  }
}
