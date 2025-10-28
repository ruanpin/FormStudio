<script setup lang="ts">
import FormElementsToolbox from './components/form-elements-toolbox/form-elements-toolbox.vue';
import FormElementsSettings from './components/form-elements-settings/form-elements-settings.vue';
</script>

<template>
    <div class="flex m-4 gap-4">
        <div class="border-2 border-gray-300">
            <FormElementsToolbox />
        </div>
        <div class="flex-1 border-2 border-gray-300">
            <FormElementsSettings />
        </div>
    </div>
</template>