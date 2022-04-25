<template>
  <header-all/>
  <router-view/>
</template>

<script>
import sourceData from '@/data/data.json'
import "./assets/style.css"
import HeaderAll from './components/HeaderAll.vue'

export default {
  name: 'App',
  components: {
    HeaderAll
  }
}

sourceData.threads[0].title = 'Que tipo de animal de estimação você tem? (Português)'
sourceData.posts[0].text = `Estou curioso para saber que tipo de animais de estimação os usuários do fórum têm. Achei que essa poderia ser uma boa maneira de nos conhecermos um pouco melhor, então vou começar!
Meu cachorro é um mastim italiano de cinco meses (Cane Corso). Desde que o peguei em Barcelona, pensei que um nome espanhol seria adequado, e dei-lhe o nome de Don Jefe, ou Jefe abreviado (que significa "chefe").
Jefe é um bichinho fofo que come 1,5 kg de carne crua todos os dias. Ele adora peidar, roncar e brincar.
Aqui está o Jefe com seu chapéu do Instagram e bola estridente 🎉🎉🎉
![Don Jefe](http://i.imgur.com/XCWzR6l.jpg)`
sourceData.posts[1].text = `Olá, eu sou o Don Jefe, um bichinho fofo que come 1,5 kg de carne crua todos os dias. Ele adora peidar, roncar e brincar.
Aqui está o Jefe com seu chapéu do Instagram e bola estridente 🎉🎉🎉
![Don Jefe](http://i.imgur.com/XCWzR6l.jpg)`
sourceData.posts[2].text = `Eu odeio todos os animais de estimação imundos, mas eu amo meus cães.`
sourceData.posts[3].text = `Eu peguei Ace de um velho gravador nos dias de hoje. Tudo começou quando @Robin o viu lutando na água. Nós o salvamos e tentei colocar um anúncio no jornal para localizar seu dono. Ace adorou o batmóvel e se juntou a nós em todos os lugares. Ele pegou os criminosos imediatamente, então percebi que este era um cão treinado e altamente qualificado. Desde que coloquei o anúncio com o meu nome real, fiquei preocupado que alguém o reconhecesse (ele tem uma mancha em forma de estrela única na testa) e puxasse uma conexão entre Bruce Wayne e Batman. Robin teve uma boa solução, ele cortou para ele uma máscara de nossa bolsa de ferramentas de pano preto e fez dele um símbolo de morcego para sua coleira. Enquanto eu tentava usar Ace para localizar seu dono, uma resposta do anúncio revelou que John Wilker, que estava desaparecido na época, havia comprado seu cachorro treinado porque ele mora sozinho e está fora de casa o dia todo. Lembro-me vividamente daqueles dias. Ace ajudou enquanto o tínhamos, ele pegou criminosos e até ajudou Robin a localizar uma criança desaparecida. Enfim, longa história curta! Reunimos Wilker e Ace e ele teve a gentileza de nos emprestar Ace para algumas missões nos próximos três anos, mas quando Wilker aceitou um novo emprego que exigia muitas viagens, ele queria que eu cuidasse de Ace para ele. Aqui está uma foto minha e do meu bravo canino Ace: ![](https://s-media-cache-ak0.pinimg.com/originals/cc/3a/dc/cc3adc2e92f86e7482742478fcbe055a.jpg)`
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
