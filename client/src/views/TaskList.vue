<script setup lang="ts">
import { onMounted } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
const taskStore = useTaskStore()
onMounted(async () => {
  await taskStore.getTasks()
})

const deleteHandler = async (taskId: number) => {
  await taskStore.deleteTask(taskId)
  await taskStore.getTasks()
}
</script>

<template>
  <div class="d-grid gap-4">
    <div class="card" v-for="task in taskStore.tasks" :key="task.id">
      <div class="card-body">
        <h4 class="">{{ task.label }}</h4>
        <p>{{ task.description }}</p>
        <div
          class="btn"
          :class="{ 'btn-success': task.state === 'DONE', 'btn-error': task.state === 'DOING' }"
        >
          {{ task.state }}
        </div>
        <div class="btn btn-error" @click="deleteHandler(task.id)">X</div>
      </div>
    </div>
  </div>
</template>
<style></style>
