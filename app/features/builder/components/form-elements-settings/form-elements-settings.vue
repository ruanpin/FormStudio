<script setup lang="ts">
import DropBox from './components/drop-box.vue';
import type { FormConfig } from '../../types/form-config'

const formConfig = ref<FormConfig>({
  render: [],
  submit: {
    method: "POST",
    urls: [
      { url: "firstUrl" },
    ],
    ask: false,
    payloadType: "form-data",
  }
})
</script>

<template>
    <div class="p-3">
      settings
      <DropBox />
    </div>
</template>