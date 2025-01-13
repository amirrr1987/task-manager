<script setup lang="ts">
import { onMounted,ref } from 'vue'
import axios from 'axios'
const tasks = ref([])
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:6000/api/tasks')
    tasks.value = response.data
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
})
</script>

<template>
  <div class="d-grid gap-4">
    <div class="card" v-for="item in tasks" :key="item">
      <div class="card-body">
        <h4 class="">Title</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestiae.</p>
        <div class="btn btn-success">Done</div>
      </div>
    </div>
  </div>
</template>
<style></style>
