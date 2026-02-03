<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Form } from '@adonisjs/inertia/vue'
import type { Data } from '@generated/data'

const props = defineProps<{
  post: Data.Post
  comments: Data.Comment[]
  commentEmail: string
}>()
</script>

<template>
  <Head :title="post.title" />

  <div class="post-container">
    <article class="post-detail">
      <h1>{{ post.title }}</h1>
      <p class="post-meta" v-if="post.user">
        By {{ post.user.fullName ?? post.user.email }} &middot; {{ post.createdAt }}
      </p>
      <p class="post-body">{{ post.body }}</p>
    </article>

    <section class="comments">
      <h2>Comments ({{ comments.length }})</h2>

      <div class="comment-list" v-if="comments.length > 0">
        <div class="comment" v-for="comment in comments" :key="comment.id">
          <div class="comment-header">
            <span class="comment-email">{{ comment.email }}</span>
            <span class="comment-date">&middot; {{ comment.createdAt }}</span>
          </div>
          <p class="comment-body">{{ comment.body }}</p>
        </div>
      </div>
      <p v-else class="no-comments">No comments yet. Be the first!</p>

      <Form
        route="comments.store"
        :params="post"
        class="comment-form"
        #default="{ processing, errors }"
        :resetOnSuccess="['body']"
      >
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            :value="commentEmail"
            :data-invalid="errors.email ? 'true' : undefined"
          />
          <div v-if="errors.email">{{ errors.email }}</div>
        </div>

        <div>
          <label for="body">Comment</label>
          <textarea
            name="body"
            id="body"
            rows="3"
            :data-invalid="errors.body ? 'true' : undefined"
          />
          <div v-if="errors.body">{{ errors.body }}</div>
        </div>

        <div>
          <button type="submit" class="button" :disabled="processing">Post Comment</button>
        </div>
      </Form>
    </section>
  </div>
</template>
