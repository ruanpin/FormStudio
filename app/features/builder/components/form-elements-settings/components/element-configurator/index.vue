<script setup lang="ts">
import type { FormElement } from '../../../../types/form-element'
const element = defineModel<FormElement>('element', { required: true })
</script>

<template>
    <div>element-configurator</div>
    <div>基本設定</div>
    <div>{{ element.type }}</div>
</template>