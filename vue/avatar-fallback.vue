<script setup lang="ts">
import {
  AvatarFallback,
  type AvatarFallbackProps,
} from "radix-vue";
import { cn } from "./utils";

const props = defineProps<AvatarFallbackProps & { class?: string }>();
</script>

<template>
  <AvatarFallback
    :class="
      cn('flex h-full w-full items-center justify-center rounded-full bg-muted', props.class)
    "
    v-bind="props"
  >
    <slot />
  </AvatarFallback>
</template>
