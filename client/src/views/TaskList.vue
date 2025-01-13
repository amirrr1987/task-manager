<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="ss">
    <div class="d-grid gap-4">
      <div class="card" v-for="item in 14" :key="item">
        <div class="card-body">
          <h4 class="">Title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, molestiae.</p>
          <div class="btn btn-success">Done</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.ss {
  overflow-y: auto;
}
</style>
