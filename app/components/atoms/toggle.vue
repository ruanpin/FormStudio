<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const props = defineProps<{
  truevalue: string;
  falsevalue: string;
}>()

const realValue = defineModel()

const value = computed({
  get() {
    return realValue.value !== null 
      && realValue.value !== undefined 
      && props.truevalue === realValue.value
  },
  set(val) {
    if (val === true) {
      realValue.value = props.truevalue
    } else {
      realValue.value = props.falsevalue
    }
  }
})

onMounted(() => {
  if (realValue.value === null || realValue.value === undefined || realValue.value === "") {
    realValue.value = props.falsevalue
  }
})
</script>
<template>
  <div class="flex items-center space-x-2">
    <Label>
      <Switch v-model="value"/>
      <slot>{{ value }}</slot>
    </Label>
  </div>
</template>