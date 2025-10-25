<script lang="ts">
import { tv } from "tailwind-variants";
import type { DialogRootProps, DialogRootEmits, DismissableLayerEmits } from "radix-vue";
import type { InjectionKey, Ref } from "vue";

export const SIDEBAR_INJECTION_KEY = Symbol() as InjectionKey<{
  open: Readonly<Ref<boolean>>;
}>;

export const sidebarVariants = tv({
  slots: {
    content: [
      "z-50 fixed inset-y-0 h-full bg-background transition-all duration-300 ease-in-out",
      "data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=closed]:duration-200",
      "data-[state=open]:animate-in data-[state=open]:slide-in-from-left data-[state=open]:duration-200",
    ],
    overlay: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
  },
  variants: {
    side: {
      left: {
        content: "left-0",
      },
      right: {
        content: [
          "right-0",
          "data-[state=closed]:slide-out-to-right",
          "data-[state=open]:slide-in-from-right",
        ],
      },
    },
    size: {
      default: {
        content: "w-72",
      },
      sm: {
        content: "w-64",
      },
      lg: {
        content: "w-80",
      },
      xl: {
        content: "w-96",
      },
      full: {
        content: "w-full",
      },
    },
    absolute: {
      true: {
        content: "absolute",
      },
    },
    "no-overlay": {
      true: {
        overlay: "hidden",
      },
    },
  },
  defaultVariants: {
    side: "left",
    size: "default",
  },
});

export type SidebarProps = {
  side?: VariantProps<typeof sidebarVariants>["side"];
  size?: VariantProps<typeof sidebarVariants>["size"];
  absolute?: VariantProps<typeof sidebarVariants>["absolute"];
  noOverlay?: VariantProps<typeof sidebarVariants>["no-overlay"];
  class?: string;
  onOpen?: () => void;
  onClose?: () => void;
  open?: DialogRootProps["open"];
};
export type SidebarEmits = DialogRootEmits & Pick<DismissableLayerEmits, "pointerDownOutside">;
</script>

<script setup lang="ts">
import { inject, provide, onMounted } from "vue";
import {
  DialogRoot,
  useForwardPropsEmits,
} from "radix-vue";
import { useMobile } from "./use-mobile";
import SidebarContent from "./sidebar-content.vue";

const props = defineProps<SidebarProps>();
const emits = defineEmits<SidebarEmits>();

const forwarded = useForwardPropsEmits(props, emits);

const { isMobile } = useMobile();

const { side, size, absolute, noOverlay, class: className } = props;

const { content, overlay } = sidebarVariants({
  side,
  size,
  absolute,
  noOverlay,
});

provide(SIDEBAR_INJECTION_KEY, {
  open: forwarded.open,
});
</script>

<template>
  <DialogRoot v-if="isMobile" v-bind="forwarded">
    <SidebarContent :class="className" :content-class="content" :overlay-class="overlay">
      <slot />
    </SidebarContent>
  </DialogRoot>
  <aside v-else :class="cn(content, className)">
    <slot />
  </aside>
</template>
