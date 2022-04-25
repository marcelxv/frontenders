<template>
<div class="hero col-full">
  <h1>Bem vindo ao Front Enders</h1>
  <p>O primeiro e único site de discussão sobre front end do Brasil</p>
  <p>
    <a href="#" class="btn btn-primary">
      Faça parte da comunidade
    </a>
  </p>
  <ThreadList :threads="threads"/>
</div>
</template>

<script>
import sourceData from '@/data/data.json'
import ThreadList from '@/components/ThreadList.vue'
export default {
  components: {
    ThreadList
  },
  data () {
    return {
      threads: sourceData.threads
    }
  }
}
</script>

<style>
.hero {
  background: #fff;
  padding: 3rem;
  text-align: center;
}
h1 {
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
}
</style>