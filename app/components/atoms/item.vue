<script setup lang="ts">
import {
  Item,
  ItemContent,
  ItemTitle,
} from "@/components/ui/item"
</script>

<template>
    <Item variant="outline" :class="['relative', $attrs.class]" v-bind="{ ...$attrs, class: undefined }">
      <ItemContent>
        <ItemTitle class="font-bold mb-2">
            <slot name="title"></slot>
        </ItemTitle>
        <slot name="content"></slot>
      </ItemContent>
      <div class="absolute right-[16px] top-[16px]">
        <slot name="action"></slot>
      </div>
    </Item>
</template>
