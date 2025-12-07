<script setup lang="ts">
import Preview from '@/features/preview'
import { useFormStatesStore } from '@/features/builder' // 開發用，正常情況使用本地state

const { formConfig } = useFormStatesStore() // 開發用，正常情況使用本地state
</script>

<template>
    <Preview :form-config="formConfig" />
</template>
