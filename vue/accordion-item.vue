<script setup lang="ts">
import { AccordionItem, type AccordionItemProps } from "radix-vue";
import { cn } from "./utils";

const props = defineProps<AccordionItemProps>();
</script>

<template>
  <AccordionItem
    :class="cn('border-b', $attrs.class as string)"
    v-bind="props"
  >
    <slot />
  </AccordionItem>
</template>
