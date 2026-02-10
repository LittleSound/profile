import type { UserModule } from './types'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'

import './styles/main.css'
import 'uno.css'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
