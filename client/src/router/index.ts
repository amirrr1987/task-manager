import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskForm from '../views/TaskForm.vue'
import nprogress from 'nprogress'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheListTask',
      component: TaskList,
    },
    {
      path: '/add',
      name: 'TheAddTask',
      component: TaskForm,
    },
    {
      path: '/edit/:id',
      name: 'TheEditTask',
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
