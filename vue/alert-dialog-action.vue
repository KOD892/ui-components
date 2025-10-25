<script setup lang="ts">
import {
  AlertDialogAction,
  type AlertDialogActionProps,
} from "radix-vue";
import { cn } from "./utils";
import { buttonVariants } from "./button";

const props = defineProps<AlertDialogActionProps & { class?: string }>();
</script>

<template>
  <AlertDialogAction
    :class="cn(buttonVariants(), props.class)"
    v-bind="props"
  >
    <slot />
  </AlertDialogAction>
</template>
