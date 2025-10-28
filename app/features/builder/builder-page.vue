<script setup lang="ts">
import FormElementsToolbox from './components/form-elements-toolbox/form-elements-toolbox.vue';
import FormElementsSettings from './components/form-elements-settings/form-elements-settings.vue';
</script>

<template>
    <div class="flex">
        <div>
            <FormElementsToolbox />
        </div>
        <div class="flex-1">
            <FormElementsSettings />
        </div>
    </div>
</template>