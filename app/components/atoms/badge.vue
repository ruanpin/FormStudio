<script setup lang="ts">
import { Badge } from '@/components/ui/badge'
</script>

<template>
    <Badge v-bind="$attrs">
        <slot></slot>
    </Badge>
</template>