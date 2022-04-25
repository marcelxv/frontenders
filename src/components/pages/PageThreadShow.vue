<template>
    <h1>{{ thread.title }}</h1>
    <div class="post-list">
      <div class="post"
           v-for="postId in thread.posts"
           :key="postId"
      >

        <div class="user-info">
          <a href="#" class="user-name">{{userById(postById(postId).userId).name}}</a>

          <a href="#">
            <img class="avatar-large" :src="userById(postById(postId).userId).avatar" alt="">
          </a>

          <p class="desktop-only text-small">107 posts</p>

        </div>

        <div class="post-content">
          <div>
            <p>
              {{postById(postId).text}}
            </p>
          </div>
        </div>

        <div class="post-date text-faded">
          {{postById(postId).publishedAt}}
        </div>

      </div>

    </div>
</template>

<script>
import sourceData from '@/data/data.json'
export default {
  props: {
    id: { // id da thread que será exibida
      type: String,
      required: true // obrigatório
    }
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
      postById(id) {
        return this.posts.find(p => p.id === id)
      },
        userById(id) {
            return this.users.find(p => p.id === id)
        }
  }, 
  computed: {
    thread() {
      console.log(this.id)
      return this.threads.find(thread => thread.id === this.id)
      
    }
  }
}
</script>

<style>

</style>