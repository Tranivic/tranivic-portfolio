import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global Components import
import MainButton from './components/slots/MainButton/MainButton.vue'
import SocialMedia from './components/ui/SocialMedia/SocialMedia.vue'
import AnimatedTitle from './components/slots/AnimatedTitle/AnimatedTitle.vue'
const app = createApp(App)
app.use(store)
app.use(router)
app.component('main-button', MainButton)
app.component('social-media', SocialMedia)
app.component('animated-title', AnimatedTitle)

app.mount('#app')
