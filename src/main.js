import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
// we can use default select index file by just import router from './routes'
import pinia from './store/index.js'
// we can use default select index file by just import pinia from './store'
import i18n from './i18n'
import carousel from 'owl.carousel'


  const app = createApp(App)
  app.use(router)
  app.use(pinia)
  app.use(i18n)
  app.use(carousel)
  app.mount('#app')