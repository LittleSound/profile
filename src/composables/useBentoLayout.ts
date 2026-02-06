import { useMediaQuery } from '@vueuse/core'

/** Responsive layout composable for Bento grid */
export function useBentoLayout() {
  /** Switch to mobile layout below 768px */
  const isMobile = useMediaQuery('(max-width: 768px)')

  /** Grid columns: 8 for desktop, 4 for mobile */
  const gridColumns = computed(() => isMobile.value ? 4 : 8)

  return {
    isMobile,
    gridColumns,
  }
}
