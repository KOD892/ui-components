<script setup lang="ts">
import {
  AccordionRoot,
  type AccordionRootProps,
  useForwardPropsEmits,
} from "radix-vue";
import { cn } from "./utils";

const props = defineProps<AccordionRootProps>();
</script>

<template>
  <AccordionRoot
    :class="cn('w-full', $attrs.class as string)"
    v-bind="props"
  >
    <slot />
  </AccordionRoot>
</template>
