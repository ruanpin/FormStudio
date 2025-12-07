<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { cn } from "@/lib/utils"
</script>

<template>
    <div class="relative">
        <Input v-bind="$attrs" :class="cn('pr-10', $attrs.class as string)" />
        <div v-if="$slots.append" class="absolute inset-y-0 right-0 flex items-center">
            <slot name="append"></slot>
        </div>
        <slot v-else></slot>
    </div>
</template>
