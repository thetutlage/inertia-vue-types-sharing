<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Link } from '@adonisjs/inertia/vue'
import type { Data } from '@generated/data'

const props = defineProps<{
  posts: Data.Post[]
}>()
</script>

<template>
  <Head title="Posts" />

  <div>
    <h1>Posts</h1>

    <div v-if="posts.length === 0">
      <p>No posts yet.</p>
    </div>

    <div v-else>
      <article v-for="post in posts" :key="post.id">
        <h2>
          <Link route="posts.show" :params="post">{{ post.title }}</Link>
        </h2>
        <p v-if="post.user">
          By {{ post.user.fullName ?? post.user.email }} &middot; {{ post.createdAt }}
        </p>
        <p>{{ post.body }}</p>
      </article>
    </div>
  </div>
</template>
