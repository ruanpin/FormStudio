<script setup lang="ts">
import DragBox from '../drag-box.vue';
import type { FormElement } from '../../../../types/form-element'
const element = defineModel<FormElement>('element', { required: true })

defineProps<{
    sourceIndex: number
}>()
</script>

<template>
    <DragBox :sourceIndex="sourceIndex">
        <div>
            <div>element-configurator</div>
            <div>基本設定</div>
            <div>{{ element.type }}</div>
            {{ sourceIndex }}
        </div>
    </DragBox>
</template>