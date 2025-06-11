import './assets/main.css'

if (localStorage.getItem('theme') === 'dark') {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
