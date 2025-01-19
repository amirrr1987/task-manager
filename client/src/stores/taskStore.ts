import { isRef, ref } from 'vue'
import { defineStore } from 'pinia'
import { StateEnum, type TaskModel } from '@/types'
import axios from 'axios'
import nprogress from 'nprogress'

export const useTaskStore = defineStore('task', () => {
  const task = ref<TaskModel>({} as TaskModel)
  const tasks = ref<TaskModel[]>([])
  const loading = ref<boolean>(false)
  const getTasks = async () => {
    nprogress.start()
    loading.value = true
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
      loading.value = false
    }
  }
  const addTask = async () => {
    nprogress.start()
    loading.value = true
    try {
      const data = await axios.post('http://localhost:5500/api/tasks', task.value)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      nprogress.done()
      loading.value = false
    }
  }
  const editTask = async () => {
    nprogress.start()
    loading.value = true
    try {
      const data = await axios.patch('http://localhost:5500/api/tasks', task.value)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      nprogress.done()
      loading.value = false
    }
  }
  const getTaskById = async (id: number) => {
    nprogress.start()
    loading.value = true
    try {
      const { data } = await axios.post('http://localhost:5500/api/tasks/search', { id })
      return data
    } catch (error) {
      console.log(error)
    } finally {
      nprogress.done()
      loading.value = false
    }
  }
  const deleteTask = async (taskId: number) => {
     nprogress.start()
     loading.value = true
    try {
      const data = await axios.delete(`http://localhost:5500/api/tasks/${taskId}`)
      console.log(data)
    } catch (error) {
      console.log(error)
    } finally {
      nprogress.done()
      loading.value = false
    }
  }
  const resetTask = () => {
    task.value = {
      state: StateEnum.TODO,
    } as TaskModel
  }
  return {
    task,
    tasks,
    getTasks,
    addTask,
    editTask,
    deleteTask,
    resetTask,
    getTaskById,
    loading,
  }
})
