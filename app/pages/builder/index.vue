<script setup lang="ts">
import Button from '@/components/atoms/button.vue'
import Builder, { useEditingStore } from '@/features/builder'

const editingStore = useEditingStore()
const isInCrSettings = computed(() => editingStore.trace.length)
</script>

<template>
    <div class="flex items-center px-4 min-h-9">
        <Button
            class="mr-2"
            :disabled="!isInCrSettings"
            @click="() => editingStore.back()"
        >
            返回
        </Button>
        <div class="flex items-center">
            <div>當前層級：</div>
            <div>Root</div>
            <div v-show="isInCrSettings" class="mx-1">></div>
            <div
                v-for="(trace, index) in editingStore.trace"
                :key="trace.path"
                class="flex items-center"
                >
                <div>{{ trace.type }}</div>
                <div v-show="trace.name">({{ trace.name }})</div>
                <div v-show="editingStore.trace.length > (Number(index) + 1)" class="mx-1">></div>
            </div>
        </div>
    </div>
    <Builder />
</template>
