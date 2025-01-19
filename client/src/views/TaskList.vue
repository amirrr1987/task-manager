<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import DeleteModal from '@/components/DeleteModal.vue'
import { Modal } from 'bootstrap'
import type { TaskModel } from '@/types'
import { useRouter } from 'vue-router'
import { StateEnum } from '@/types'
const taskStore = useTaskStore()

onMounted(async () => {
  await taskStore.getTasks()
})

const taskId = ref<number | null>(null)
const task = ref<TaskModel>({} as TaskModel)
const deleteModal = ref<Modal | null>(null)
const openDeleteModal = async (id: number) => {
  taskId.value = id
  if (!deleteModal.value) {
    const modalElement = document.getElementById('deleteModal')
    if (modalElement) {
      deleteModal.value = new Modal(modalElement, {
        keyboard: false,
      })
    }
  }

  deleteModal.value?.show()
}
const deleteHandler = async () => {
  if (!taskId.value) return
  await taskStore.deleteTask(taskId.value)
  await taskStore.getTasks()
}
const router = useRouter()

const editHandler = async (id: number) => {
  // taskStore.task = await taskStore.getTaskById(id)
  router.push({
    name: 'TheEditTask',
    params: {
      id: id,
    },
  })
}
const stateColor = (state: StateEnum) => {
  switch (state) {
    case StateEnum.TODO:
      return 'btn-danger'
    case StateEnum.DOING:
      return 'btn-warning'
    case StateEnum.DONE:
      return 'btn-success'
    default:
      return 'btn-secondary'
  }
}
</script>

<template>
  <h3 class="mb-3">Task list:</h3>
  <DeleteModal :task="task" @ok="deleteHandler" @cancel="deleteModal?.show()" />
  <div class="d-grid gap-4">
    <template v-if="taskStore.loading">
      <div class="card" v-for="item in 4" :key="item">
        <div class="card-body">
          <h5 class="card-title placeholder-glow">
            <span class="placeholder col-1"></span>
          </h5>
          <p class="card-text placeholder-glow">
            <span class="placeholder col-12"></span>
          </p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="card" v-for="(task, index) in taskStore.tasks" :key="task.id">
        <div class="card-body">
          <div class="d-flex justify-content-between">
            <div>
              <h5 class="card-title">{{ index + 1 }}: {{ task.label }}</h5>
              <p class="card-text">{{ task.description }}</p>
            </div>
            <div class="d-flex gap-2 align-items-start">
              <button class="btn" :class="stateColor(task.state)">
                {{ task.state }}
              </button>
              <button class="btn btn-outline-warning" @click="editHandler(task.id)">
                <i class="bi bi-pen"></i>
              </button>
              <button class="btn btn-outline-danger" @click="openDeleteModal(task.id)">
                <i class="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
