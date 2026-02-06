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

    :class="isMobile ? 'grid-cols-4' : 'grid-cols-8'"

    p-2 gap-3 grid auto-rows-fr
    class="bento-grid"
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
  --grid-row-height: 80px;
  grid-auto-rows: var(--grid-row-height);
}

@media (max-width: 768px) {
  .bento-grid {
    --grid-row-height: 60px;
  }
}
</style>
