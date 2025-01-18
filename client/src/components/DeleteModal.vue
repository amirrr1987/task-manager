<script setup lang="ts">
import type { TaskModel } from '@/types'

const emits = defineEmits(['ok', 'cancel'])
interface Props {
  task: TaskModel
}
const props = withDefaults(defineProps<Props>(), {})
</script>
<template>
  <div
    class="modal fade"
    id="deleteModal"
    tabindex="-1"
    aria-labelledby="deleteModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="deleteModalLabel">Delete {{ props.task.label }} Task</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Are you sure you want to delete this task? <span class="text-bold">{{ props.task.label }}</span></div>
        <div class="modal-footer gap-2">
          <button
            type="button"
            class="btn btn-light"
            data-bs-dismiss="modal"
            @click="emits('cancel')"
          >
            No
          </button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="emits('ok')">
            Yes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
