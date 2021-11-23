import { createApp } from 'vue'
import App from './App.vue'
// eslint-disable-next-line import/extensions,import/no-unresolved
import router from './router/index'

// eslint-disable-next-line import/no-unresolved
import '@/assets/style/index.css'

createApp(App).use(router).mount('#app')
