import { ref, onMounted, onUnmounted, readonly } from 'vue';

const MOBILE_BREAKPOINT = 768;

export function useMobile() {
  const isMobile = ref<boolean>(false);

  const update = () => {
    isMobile.value = window.innerWidth < MOBILE_BREAKPOINT;
  };

  onMounted(() => {
    update();
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    mql.addEventListener('change', update);

    onUnmounted(() => {
      mql.removeEventListener('change', update);
    });
  });

  return { isMobile: readonly(isMobile) };
}
