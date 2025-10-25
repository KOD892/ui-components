<script setup lang="ts">
import {
  AlertDialogCancel,
  type AlertDialogCancelProps,
} from "radix-vue";
import { cn } from "./utils";
import { buttonVariants } from "./button";

const props = defineProps<AlertDialogCancelProps & { class?: string }>();
</script>

<template>
  <AlertDialogCancel
    :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)"
    v-bind="props"
  >
    <slot />
  </AlertDialogCancel>
</template>
