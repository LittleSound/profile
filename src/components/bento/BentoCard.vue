<script setup lang="ts">
import type { BentoItem, CardSize } from '~/types/bento'
import { parseCardSize } from '~/types/bento'
import LinkCard from './cards/LinkCard.vue'
import MapCard from './cards/MapCard.vue'
import MediaCard from './cards/MediaCard.vue'
import RichTextCard from './cards/RichTextCard.vue'
import SectionHeader from './cards/SectionHeader.vue'

const { item, isMobile } = defineProps<{
  item: BentoItem
  isMobile: boolean
}>()

const size = computed(() => {
  if (item.data.type === 'section-header') {
    return isMobile ? '4x1' : '8x1'
  }
  return (isMobile ? item.data.style.mobile : item.data.style.desktop) as CardSize
})

/** Only use span, let grid auto-place items */
const gridStyle = computed(() => {
  const { cols, rows } = parseCardSize(size.value as CardSize)
  return {
    gridColumn: `span ${cols}`,
    gridRow: `span ${rows}`,
  }
})

const cardComponent = computed(() => {
  switch (item.data.type) {
    case 'link':
      return item.data.overrides?.mapPlace ? MapCard : LinkCard
    case 'media':
      return MediaCard
    case 'rich-text':
      return RichTextCard
    case 'section-header':
      return SectionHeader
    default:
      return LinkCard
  }
})
</script>

<template>
  <component
    :is="cardComponent"
    :style="gridStyle"
    :data="(item.data as any)"
    :is-mobile="isMobile"
  />
</template>
