import 'bootstrap/dist/css/bootstrap.css'
import 'nprogress/nprogress.css'
// import * as bootstrap from 'bootstrap'
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
