<script setup lang="ts">
import {
  AvatarImage,
  type AvatarImageProps,
} from "radix-vue";
import { cn } from "./utils";

const props = defineProps<AvatarImageProps & { class?: string }>();
</script>

<template>
  <AvatarImage
    :class="cn('h-full w-full object-cover', props.class)"
    v-bind="props"
  />
</template>
