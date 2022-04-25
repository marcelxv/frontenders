import PageHome from '@/components/pages/PageHome.vue'
import PageAbout from '@/components/pages/PageAbout.vue'
import PageThreadShow from '@/components/pages/PageThreadShow.vue'
import PageNotFound from '@/components/pages/PageNotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import sourceData from '@/data/data.json'

console.log(sourceData)
// randomly generate a thread.id 
const randomNumb = Math.floor(Math.random() * sourceData.threads.length)
// use the random number to get the thread.id
const randomThread = sourceData.threads[randomNumb].id
console.log(randomThread)


const routes = [
{ 
    path: '/', 
    name: 'Home',
    component: PageHome
},
{
    path: '/about',
    name: 'About',
    component: PageAbout 
},
{
  path: '/thread/:id', // :id é uma variavel que será substituida pelo valor da rota
  name: 'ThreadShow',
  component: PageThreadShow,
  props: true // passa o id como propriedade do componente
},
{
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: PageNotFound
},
{
  path: '/thread/:id/:pathMatch(.*)*',
  name: 'NotFound',
  component: PageNotFound
}, // I will add this second route that will catch all wrong routes inside /thread and redirect to the 404 page
{
  path: `/thread/${randomThread}`,
  name: '',
  component: PageThreadShow,
}
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

    export default router