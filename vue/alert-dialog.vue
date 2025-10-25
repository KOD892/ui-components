<script setup lang="ts">
import {
  AlertDialogRoot,
  type AlertDialogRootProps,
  useForwardPropsEmits,
} from "radix-vue";

const props = defineProps<AlertDialogRootProps>();
const emits = defineEmits<{
  (e: "update:open", value: boolean): void;
}>();

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <AlertDialogRoot v-bind="forwarded">
    <slot />
  </AlertDialogRoot>
</template>
