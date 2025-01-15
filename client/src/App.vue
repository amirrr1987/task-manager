<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import { RouterView } from 'vue-router'
</script>
<template>
  <TheNavbar />
  <main class="p-4">
    <RouterView />
  </main>
</template>
<style>
#app {
  /* padding-inline: 1rem; */
  /* margin-bottom: 3rem; */
  height: 100svb;
  background-color: #f1f1f1;
  /*
  */
  display: grid;
  grid-template-rows: max-content 1fr max-content; 
}
</style>
