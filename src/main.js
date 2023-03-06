import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Global Components import (Slots)
import MainButton from './components/slots/MainButton/MainButton.vue'

const app = createApp(App)
app.use(store)
app.use(router)
app.component('main-button', MainButton)
app.mount('#app')
