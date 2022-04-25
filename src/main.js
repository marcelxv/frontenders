import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const frontendersForum = createApp(App) // cria o app na variável frontendersForum
frontendersForum.use(router) // usa o router no frontendersForum
frontendersForum.mount('#app') // monta o frontendersForum na div #app
