<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { StateEnum } from '@/types'
import { useRouter, useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
const taskStore = useTaskStore()

const taskId = computed(() => {
  return Number(route.params.id ?? 0) as number
})
const route = useRoute()
onMounted(async () => {
  if (!taskId.value) {
    taskStore.task.state = StateEnum.TODO
  }
  taskStore.task = await taskStore.getTaskById(taskId.value)
})

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  taskStore.task.state = (target.value as StateEnum) ?? StateEnum.TODO
}

const router = useRouter()
const saveHandler = async () => {
  if (taskId.value) {
    await taskStore.editTask()
  } else {
    await taskStore.addTask()
  }
  router.push({ name: 'TheListTask' })
  taskStore.resetTask()
}
const cancelHandler = () => {
  taskStore.resetTask()
  router.push({ name: 'TheListTask' })
}
</script>
<template>
  {{ taskStore.task }}
  <h3 class="mb-3">Enter your new task</h3>
  <form class="row g-3" @submit.prevent="saveHandler">
    <div class="col-12">
      <label class="form-control-label"> Title: {{}}</label>
      <input
        v-model="taskStore.task.label"
        type="text"
        class="form-control"
        placeholder="Enter title"
      />
    </div>
    <div class="col-12">
      <label class="form-control-label"> Description: </label>
      <textarea
        v-model="taskStore.task.description"
        class="form-control"
        placeholder="Enter description"
        :rows="5"
      />
    </div>
    <label class="form-control-label"> Choose state: </label>
    <div class="col-12 d-flex gap-4 mb-4">
      <div class="form-check">
        <input
          @change="onChange"
          class="form-check-input"
          type="radio"
          name="State"
          id="Todo"
          :value="StateEnum.TODO"
          :checked="taskStore.task.state === StateEnum.TODO"
        />
        <label class="form-check-label" for="Todo"> Todo </label>
      </div>
      <div class="form-check">
        <label class="form-check-label" for="Doing"> Doing </label>
        <input
          @change="onChange"
          class="form-check-input"
          type="radio"
          name="State"
          id="Doing"
          :value="StateEnum.DOING"
          :checked="taskStore.task.state === StateEnum.DOING"
        />
      </div>
      <div class="form-check">
        <label class="form-check-label" for="Done"> Done </label>
        <input
          @change="onChange"
          class="form-check-input"
          type="radio"
          name="State"
          id="Done"
          :value="StateEnum.DONE"
          :checked="taskStore.task.state === StateEnum.DONE"
        />
      </div>
    </div>
    <div class="col-12 d-flex justify-content-start gap-4">
      <button type="submit" class="btn btn-primary">{{ taskId ? 'Save' : 'Create' }}</button>
      <button type="reset" class="btn" @click="cancelHandler">Cancel</button>
    </div>
  </form>
</template>
