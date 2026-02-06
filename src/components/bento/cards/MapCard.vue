<script setup lang="ts">
import type { LinkCardData } from '~/types/bento'
import { extractText } from '~/types/bento'

const { data } = defineProps<{
  data: LinkCardData
  isMobile: boolean
}>()

const caption = computed(() => extractText(data.overrides?.mapCaption))
const place = computed(() => data.overrides?.mapPlace || '')
</script>

<template>
  <a
    :href="data.href"
    target="_blank"
    class="map-card"

    flex="~ col items-center justify-center"

    p-4 h-full w-full relative glass-card-hover
  >
    <!-- Map Icon -->
    <div
      i-heroicons-map-pin-solid
      text-4xl
      text-red-500
      mb-2
    />

    <!-- Caption -->
    <h3

      text-gray-900 font-600 text-center dark:text-white
    >
      {{ caption }}
    </h3>

    <p text-sm text-gray-500 mt-1 text-center dark:text-gray-400>
      {{ place }}
    </p>

    <div class="card-highlight" />
  </a>
</template>

<style scoped>
.map-card {
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
}
.dark .map-card {
  background: linear-gradient(135deg, #1b3a2f 0%, #2d4a3e 100%);
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
