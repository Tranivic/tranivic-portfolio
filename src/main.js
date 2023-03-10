import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global Components import
import MainButtonComponent from './components/slots/MainButton/MainButton.vue'
import SocialMediaComponent from './components/ui/SocialMedia/SocialMedia.vue'
import AnimatedTitleComponent from './components/slots/AnimatedTitle/AnimatedTitle.vue'
import LetsTalkComponent from './components/ui/LetsTalk/LetsTalk.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('main-button', MainButtonComponent)
app.component('social-media', SocialMediaComponent)
app.component('animated-title', AnimatedTitleComponent)
app.component('lets-talk', LetsTalkComponent)

app.mount('#app')
