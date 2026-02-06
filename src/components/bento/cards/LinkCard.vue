<script setup lang="ts">
import type { LinkCardData } from '~/types/bento'
import { extractText } from '~/types/bento'

const { data } = defineProps<{
  data: LinkCardData
  isMobile: boolean
}>()

const title = computed(() => extractText(data.overrides?.title))

const domain = computed(() => {
  try {
    return new URL(data.href).hostname.replace('www.', '')
  }
  catch {
    return ''
  }
})

const ogImage = computed(() => data.overrides?.ogImage)

const iconClass = computed(() => {
  const host = domain.value
  if (host.includes('github'))
    return 'i-simple-icons-github'
  if (host.includes('twitter') || host.includes('x.com'))
    return 'i-simple-icons-x'
  if (host.includes('bsky') || host.includes('bluesky'))
    return 'i-simple-icons-bluesky'
  if (host.includes('instagram'))
    return 'i-simple-icons-instagram'
  if (host.includes('mastodon') || host.includes('mas.to'))
    return 'i-simple-icons-mastodon'
  if (host.includes('threads'))
    return 'i-simple-icons-threads'
  if (host.includes('elk.zone'))
    return 'i-simple-icons-mastodon'
  if (host.includes('marketplace.visualstudio'))
    return 'i-simple-icons-visualstudiocode'
  if (host.includes('comfy'))
    return 'i-heroicons-sparkles-solid'
  return 'i-heroicons-link-solid'
})
</script>

<template>
  <a
    :href="data.href"
    target="_blank"
    class="link-card"

    flex="~ col"

    p-4 h-full w-full relative glass-card-hover
  >
    <!-- OG Image Background -->
    <div
      v-if="ogImage"

      rounded-inherit inset-0 absolute overflow-hidden
    >
      <img
        :src="ogImage"
        :alt="title"
        h-full
        w-full
        object-cover
        loading="lazy"
      >
      <div class="og-overlay" />
    </div>

    <!-- Content -->
    <div flex="~ col justify-end" h-full relative z-10>
      <div flex gap-2 items-center>
        <div :class="[iconClass, ogImage ? 'text-white' : 'text-gray-600 dark:text-gray-400']" text-lg />
        <span text-xs :class="ogImage ? 'text-white/80' : 'text-gray-500 dark:text-gray-500'">{{ domain }}</span>
      </div>
      <h3

        font-600 mt-1 line-clamp-2
        :class="ogImage ? 'text-white' : 'text-gray-900 dark:text-white'"
      >
        {{ title }}
      </h3>
    </div>

    <div class="card-highlight" />
  </a>
</template>

<style scoped>
.link-card {
  min-height: 100%;
}

.og-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
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
