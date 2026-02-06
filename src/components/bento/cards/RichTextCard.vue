<script setup lang="ts">
import type { RichTextCardData } from '~/types/bento'
import { extractText } from '~/types/bento'

const { data } = defineProps<{
  data: RichTextCardData
  isMobile: boolean
}>()

const content = computed(() => extractText(data.content))

const alignClasses = computed(() => {
  const h = data.halign?.desktop || 'left'
  const v = data.valign?.desktop || 'top'

  const hClass = {
    left: 'items-start text-left',
    center: 'items-center text-center',
    right: 'items-end text-right',
  }[h]

  const vClass = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
  }[v]

  return `${hClass} ${vClass}`
})

const hasLink = computed(() => !!data.href)
</script>

<template>
  <component
    :is="hasLink ? 'a' : 'div'"
    :href="hasLink ? data.href : undefined"
    :target="hasLink ? '_blank' : undefined"
    class="rich-text-card"

    flex="~ col"
    :class="alignClasses"

    p-4 h-full w-full relative glass-card-hover
  >
    <p text-sm text-gray-700 font-500 dark:text-gray-300>
      {{ content }}
    </p>

    <div
      v-if="hasLink"

      i-heroicons-arrow-up-right text-gray-400 right-3 top-3 absolute
    />

    <div class="card-highlight" />
  </component>
</template>

<style scoped>
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
