import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskForm from '../views/TaskForm.vue'
import nprogress from 'nprogress'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TaskList,
    },
    {
      path: '/add',
      name: 'about',
      component: TaskForm,
    },
  ],
})

router.beforeEach((to, from, next) => {
  nprogress.start()
  next() //
})

router.afterEach(() => {
  nprogress.done()
})

export default router
