import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/router'
import './style.css'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
const app = createApp(App)
const pinia = createPinia()
app.use(pinia).use(VueSweetalert2).use(router)
app.mount('#app')
