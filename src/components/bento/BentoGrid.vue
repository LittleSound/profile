<script setup lang="ts">
import type { BentoItem } from '~/types/bento'
import BentoCard from './BentoCard.vue'

const { items, isMobile } = defineProps<{
  items: BentoItem[]
  isMobile: boolean
}>()

/** Sort items by position for proper rendering order */
const sortedItems = computed(() => {
  return [...items].sort((a, b) => {
    const posA = isMobile ? a.position.mobile : a.position.desktop
    const posB = isMobile ? b.position.mobile : b.position.desktop
    if (posA.y !== posB.y)
      return posA.y - posB.y
    return posA.x - posB.x
  })
})
</script>

<template>
  <div
    class="bento-grid"
    :class="isMobile ? 'bento-grid--mobile' : 'bento-grid--desktop'"
  >
    <BentoCard
      v-for="item in sortedItems"
      :key="item.data.id"
      :item="item"
      :is-mobile="isMobile"
    />
  </div>
</template>

<style scoped>
.bento-grid {
  --cell-size: 80px;
  --gap: 12px;
  display: grid;
  gap: var(--gap);
  padding: 8px;
}

/* Desktop: 8 columns, fixed cell size */
.bento-grid--desktop {
  grid-template-columns: repeat(8, var(--cell-size));
  grid-auto-rows: var(--cell-size);
}

/* Mobile: 4 columns, smaller cells */
.bento-grid--mobile {
  --cell-size: 70px;
  grid-template-columns: repeat(4, var(--cell-size));
  grid-auto-rows: var(--cell-size);
}
</style>
