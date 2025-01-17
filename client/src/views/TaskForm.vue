<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore'
import { StateEnum } from '@/types'

const taskStore = useTaskStore()

const onChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  taskStore.task.state = (target.value as StateEnum) ?? StateEnum.TODO
}
</script>
<template>
  {{ taskStore.task }}
  <h1 class="mt-5 mb-3">Enter your new task</h1>
  <form class="row g-3" @submit.prevent="taskStore.addTask">
    <div class="col-12">
      <label class="form-control-label"> Title: </label>
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
    <div class="col-12 d-flex gap-4">
      <div class="form-check">
        <input
          @change="onChange"
          class="form-check-input"
          type="radio"
          name="State"
          id="Todo"
          value="TODO"
          checked
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
          value="DOING"
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
          value="DONE"
        />
      </div>
    </div>
    <div class="col-12 d-flex justify-content-center gap-4">
      <button type="submit" class="btn btn-primary">Add task</button>
      <button type="reset" class="btn btn-secondary" @click="taskStore.resetTask">Add task</button>
    </div>
  </form>
</template>
