<script setup lang="ts">
import { ref } from 'vue'

const searchKey = ref('')
const searchHandler = () => {
  console.log('searchHandler',searchKey.value)
}
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Task management</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" to="/">
              <i class="bi bi-list"></i>
              Tasks</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" activeClass="active" to="/add">
              <i class="bi bi-plus"></i>
              Add</RouterLink
            >
          </li>
        </ul>
        <form class="d-flex" role="search" @submit.prevent="searchHandler">
          <input
            v-model="searchKey"
            class="form-control me-2"
            type="search"
            placeholder="Search task"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
