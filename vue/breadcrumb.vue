<script setup lang="ts">
import { cn } from "./utils";

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <nav
    :class="cn('flex items-center space-x-1.5 text-sm text-muted-foreground', props.class)"
    aria-label="breadcrumb"
  >
    <slot />
  </nav>
</template>
