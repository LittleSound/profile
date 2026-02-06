<script setup lang="ts">
import type { SectionHeaderData } from '~/types/bento'
import { extractText } from '~/types/bento'

const { data } = defineProps<{
  data: SectionHeaderData
  isMobile: boolean
}>()

const title = computed(() => extractText(data.title))
</script>

<template>
  <div

    px-1 py-2 flex items-center
  >
    <h2 text-lg text-gray-700 font-600 dark:text-gray-300>
      {{ title }}
    </h2>
  </div>
</template>
