<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
</script>

<template>
    <Select>
        <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
        <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple" v-for="n in 100" :key="n">
            Apple
            </SelectItem>
        </SelectGroup>
        </SelectContent>
    </Select>
</template>
