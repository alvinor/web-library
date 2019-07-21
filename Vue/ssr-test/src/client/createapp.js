// csr 和ssr统一入口
import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'

export function createApp(context) {
  const router = createRouter()
  const app = new Vue({
    router,
    context,
    render: h => h(App)
  })
  return { app, router }
}