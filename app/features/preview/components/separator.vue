<script setup lang="ts">
import type { Separator } from '../types/form-element'

const props = defineProps<{
    element: Separator
}>()
</script>

<template>
  <div>
    <div class="sep"></div>
  </div>
</template>

<style scoped>
  .sep {
    height: 1px;
    width: 100%;
    background-color: rgba(201, 201, 201, 0.5)
  }
</style>
