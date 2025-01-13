<script setup lang="ts">
import { RouterLink } from 'vue-router'
const addTask = () => {}
</script>
<template>
  <ul class="nav">
    <li class="nav-item">
      <RouterLink class="nav-link" to="/">Tasks</RouterLink>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/add">Add</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>
<style>
#app {
  padding: 1rem;
  height: 100svb;
  background-color: #f1f1f1;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
</style>
