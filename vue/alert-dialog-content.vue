<script setup lang="ts">
import {
  AlertDialogContent,
  type AlertDialogContentProps,
} from "radix-vue";
import { cn } from "./utils";

const props = defineProps<AlertDialogContentProps & { class?: string }>();
</script>

<template>
  <AlertDialogContent
    :class="
      cn(
        'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg',
        props.class,
      )
    "
    v-bind="props"
  >
    <slot />
  </AlertDialogContent>
</template>
