<script setup lang="ts">
import type { SpaceY } from '../types/form-element'

const props = defineProps<{
    element: SpaceY
}>()

const rootClass = computed(() => {
  const BASIC_CLASS = "space"
  return [
    'spaceY-root',
    `${BASIC_CLASS}-${props.element.class?.paddingY ?? ""}`
  ]
})
</script>

<template>
  <div :class="rootClass"></div>
</template>

<style scoped>
  .spaceY-root {
    --space-xs: 5px;
    --space-sm: 10px;
    --space-md: 20px;
    --space-lg: 30px;
    --space-xl: 40px;
    --space-default: 20px;
  }

  .space- {
    padding: var(--space-default) 0;
  }

  .space-xs {
    padding: var(--space-xs) 0;
  }

  .space-sm {
    padding: var(--space-sm) 0;
  }

  .space-md {
    padding: var(--space-md) 0;
  }

  .space-lg {
    padding: var(--space-lg) 0;
  }

  .space-xl {
    padding: var(--space-xl) 0;
  }
</style>
