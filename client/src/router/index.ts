import { createRouter, createWebHistory } from 'vue-router'
import TaskList from '../views/TaskList.vue'
import TaskForm from '../views/TaskForm.vue'

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

export default router
