<script setup lang="ts">
import type { MediaCardData } from '~/types/bento'

const { data } = defineProps<{
  data: MediaCardData
  isMobile: boolean
}>()

const cropStyle = computed(() => {
  if (!data.crop?.desktop)
    return {}
  return {
    objectPosition: `${50 + data.crop.desktop.offsetX * 50}% ${50 + data.crop.desktop.offsetY * 50}%`,
  }
})

const hasLink = computed(() => !!data.href)
</script>

<template>
  <component
    :is="hasLink ? 'a' : 'div'"
    :href="hasLink ? data.href : undefined"
    :target="hasLink ? '_blank' : undefined"
    class="media-card"

    h-full w-full block glass-card-hover
  >
    <img
      :src="data.url"
      :alt="data.id"
      :style="cropStyle"
      h-full
      w-full
      object-cover
      loading="lazy"
    >
    <div class="card-highlight" />
  </component>
</template>

<style scoped>
.media-card {
  position: relative;
}

.card-highlight {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.5);
  -webkit-mask-image: linear-gradient(0deg, transparent 20%, #000);
  mask-image: linear-gradient(0deg, transparent 20%, #000);
}
.dark .card-highlight {
  border-color: rgba(255, 255, 255, 0.2);
}
</style>
