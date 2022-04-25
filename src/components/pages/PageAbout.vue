<template>
  <h1>Sobre</h1>
  <div class="vueme">
  <img class="profile" src="https://avatars.githubusercontent.com/u/67491786?v=4" alt="" srcset="">
  <svg class="vue" viewBox="0 0 128 128" width="24" height="24" data-v-5f26462c=""><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z" data-v-5f26462c=""></path><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z" data-v-5f26462c=""></path></svg>
  </div>
  <h5>Criado por <a href="https://github.com/marcelxv">marcelxv</a> usando <a href="https://vuejs.org">vue.js 3</a></h5>
</template>

<script>
export default {

}
</script>

<style>

.vueme {
  display: flex;
  align-items: center;
  justify-content: center;
}
.profile {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  z-index: 1;
}

.vue {
  width: 200px;
  height: 200px;
  margin-left: -80px;

}
</style>