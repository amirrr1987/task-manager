<script setup lang="ts">
const addTask = () => {}
</script>
<template>
  <h1 class="mt-5 mb-3">Enter your new task</h1>
  <form class="row g-3" @submit.prevent="addTask">
    <div class="col-12">
      <label class="form-control-label"> Title: </label>
      <input type="text" class="form-control" placeholder="Enter title" />
    </div>
    <div class="col-12">
      <label class="form-control-label"> Description: </label>
      <textarea class="form-control" placeholder="Enter description" :rows="5" />
    </div>
    <div class="col-12">
      <label class="form-control-label mb-2"> Choose state: </label>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="State" id="Todo" value="TODO" checked />
        <label class="form-check-label" for="Todo"> Todo </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="State" id="Doing" value="DOING" />
        <label class="form-check-label" for="Doing"> Doing </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="State" id="Done" value="DONE" />
        <label class="form-check-label" for="Done"> Done </label>
      </div>
    </div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary mb-3">Add task</button>
    </div>
  </form>
</template>
