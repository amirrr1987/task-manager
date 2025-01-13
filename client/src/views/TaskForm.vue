<script setup lang="ts">
const addTask = () => {}
</script>
<template>
  <form class="row g-3">
    <div class="col-12">
      <input type="password" class="form-control" placeholder="Enter your task title" />
    </div>
    <div class="col-12">
      <textarea class="form-control" placeholder="Enter your task description" :rows="5" />
    </div>
    <div class="col-12">
      <select class="form-control">
        <option value="TODO">Todo</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary mb-3" @click="addTask">Add task</button>
    </div>
  </form>
</template>
