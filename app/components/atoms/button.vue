<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
    <Button v-bind="$attrs">
        <slot></slot>
    </Button>
</template>
