<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
</script>

<template>
    <label class="cursor-pointer">
        <Checkbox v-bind="$attrs"/>
        <slot></slot>
    </label>
</template>
