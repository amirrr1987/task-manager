<script setup lang="ts">
import TheNavbar from '@/components/TheNavbar.vue'
import { RouterLink, RouterView } from 'vue-router'
const addTask = () => {}
</script>
<template>
  <TheNavbar />
  <RouterView />
</template>
<style>
#app {
  padding-inline: 1rem;
  /* margin-bottom: 3rem; */
  height: 100svb;
  background-color: #f1f1f1;
  /* display: grid;
  grid-template-rows: max-content 1fr max-content; */
}
</style>
