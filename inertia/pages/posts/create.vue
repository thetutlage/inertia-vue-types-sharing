<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { Form } from '@adonisjs/inertia/vue'
</script>

<template>
  <Head title="New Post" />

  <div>
    <h1>New Post</h1>

    <Form route="posts.store" #default="{ processing, errors }">
      <div>
        <label for="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          :data-invalid="errors.title ? 'true' : undefined"
        />
        <div v-if="errors.title">{{ errors.title }}</div>
      </div>

      <div>
        <label for="body">Body</label>
        <textarea name="body" id="body" :data-invalid="errors.body ? 'true' : undefined" />
        <div v-if="errors.body">{{ errors.body }}</div>
      </div>

      <div>
        <button type="submit" class="button" :disabled="processing">Publish</button>
      </div>
    </Form>
  </div>
</template>
