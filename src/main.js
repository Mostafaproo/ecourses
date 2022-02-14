import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// import external library
import '@fortawesome/fontawesome-free/js/all'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/js/scripts'

createApp(App).use(store).use(router).mount('#app')
