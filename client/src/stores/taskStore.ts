import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Task } from '@/types'
import axios from 'axios'
import nprogress from 'nprogress'

export const useTaskStore = defineStore('task', () => {
  const task = ref<Task>({} as Task)
  const tasks = ref<Task[]>([])
  const getTasks = async () => {
    nprogress.start()
    try {
      const { data } = await axios.get('http://localhost:5500/api/tasks', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      tasks.value = data
    } catch (error) {
      console.error('Error fetching tasks:', error)
    } finally {
      nprogress.done()
    }
  }
  const addTask = async () => {
    try {
      const data = await axios.post('http://localhost:5500/api/tasks', task.value)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const editTask = async () => {
    try {
      const data = await axios.post('http://localhost:5500/api/tasks', task.value)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  const deleteTask = async (taskId: number) => {
    try {
      const data = await axios.delete(`http://localhost:5500/api/tasks/${taskId}`)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return { task, tasks, getTasks, addTask, editTask, deleteTask }
})
