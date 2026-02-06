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

/** Platform detection for icon and styling */
const platform = computed(() => {
  const host = domain.value
  if (host.includes('github'))
    return 'github'
  if (host.includes('twitter') || host.includes('x.com'))
    return 'x'
  if (host.includes('bsky') || host.includes('bluesky'))
    return 'bluesky'
  if (host.includes('instagram'))
    return 'instagram'
  if (host.includes('mastodon') || host.includes('mas.to'))
    return 'mastodon'
  if (host.includes('elk.zone'))
    return 'elk'
  if (host.includes('threads'))
    return 'threads'
  if (host.includes('marketplace.visualstudio'))
    return 'vscode'
  if (host.includes('comfy'))
    return 'comfy'
  if (host.includes('nolebase'))
    return 'nolebase'
  return 'generic'
})

const iconClass = computed(() => {
  const icons: Record<string, string> = {
    github: 'i-simple-icons-github',
    x: 'i-simple-icons-x',
    bluesky: 'i-simple-icons-bluesky',
    instagram: 'i-simple-icons-instagram',
    mastodon: 'i-simple-icons-mastodon',
    elk: 'i-game-icons-deer',
    threads: 'i-simple-icons-threads',
    vscode: 'i-simple-icons-visualstudiocode',
    comfy: 'i-hugeicons-workflow-square-03',
    nolebase: 'i-material-symbols-book-4-spark-outline',
    generic: 'i-heroicons-link-solid',
  }
  return icons[platform.value] || icons.generic
})

/** Platform-specific gradient class for empty cards */
const gradientClass = computed(() => {
  const gradients: Record<string, string> = {
    github: 'gradient-github',
    x: 'gradient-x',
    bluesky: 'gradient-bluesky',
    instagram: 'gradient-instagram',
    mastodon: 'gradient-mastodon',
    elk: 'gradient-elk',
    threads: 'gradient-threads',
    vscode: 'gradient-vscode',
    comfy: 'gradient-comfy',
    nolebase: 'gradient-nolebase',
    generic: 'gradient-generic',
  }
  return gradients[platform.value] || gradients.generic
})
</script>

<template>
  <a
    :href="data.href"
    target="_blank"
    class="link-card"
    :class="ogImage ? 'glass-card-hover' : 'empty-link-card'"
    flex="~ col"
    p-4 h-full w-full relative
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

    <!-- Decorative Background for Empty Cards -->
    <div
      v-else
      class="empty-card-bg"
      :class="gradientClass"
      rounded-inherit inset-0 absolute overflow-hidden
    >
      <!-- Large decorative icon -->
      <div class="decorative-icon text-gray-200" :class="iconClass" />
    </div>

    <!-- Content -->
    <div flex="~ col justify-end" h-full relative z-10>
      <div flex gap-2 items-center>
        <div :class="[iconClass, ogImage ? 'text-white' : 'text-white/90']" text-lg />
        <span text-xs :class="ogImage ? 'text-white/80' : 'text-white/70'">{{ domain }}</span>
      </div>
      <h3

        font-600 mt-1 line-clamp-2
        :class="ogImage ? 'text-white' : 'text-white'"
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

/* Empty link card - always dark style, no bg overlay */
.empty-link-card {
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.2s;
}
.empty-link-card:hover {
  box-shadow: 0 25px 30px -5px rgba(0, 0, 0, 0.15);
  transform: translateY(-0.125rem);
}

.og-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%);
}

/* Empty card decorative background */
.empty-card-bg {
  z-index: 0;
}

.decorative-icon {
  position: absolute;
  top: -20%;
  right: -15%;
  font-size: 8rem;
  opacity: 0.15;
  transform: rotate(-15deg);
  pointer-events: none;
}

/* Platform-specific gradients */
.gradient-github {
  background: linear-gradient(135deg, #24292e 0%, #40464d 50%, #2b3137 100%);
}

.gradient-x {
  background: linear-gradient(135deg, #000000 0%, #14171a 50%, #1a1f24 100%);
}

.gradient-bluesky {
  background: linear-gradient(135deg, #0085ff 0%, #00a8ff 50%, #0066cc 100%);
}

.gradient-instagram {
  background: linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%);
}

.gradient-mastodon {
  background: linear-gradient(135deg, #6364ff 0%, #858afa 50%, #4a4aff 100%);
}

.gradient-elk {
  /* 应该是橙色系渐变，麋鹿的颜色，因为文字是白色的，需要避免太像白色的亮黄色 */
  background: linear-gradient(135deg, #ff7e00 0%, #ff9a33 50%, #cc6600 100%);
}

.gradient-threads {
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #0a0a0a 100%);
}

.gradient-vscode {
  background: linear-gradient(135deg, #007acc 0%, #1e8ccc 50%, #005a99 100%);
}

.gradient-comfy {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
}

.gradient-nolebase {
  background: linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #9333ea 100%);
}

.gradient-generic {
  background: linear-gradient(135deg, #475569 0%, #64748b 50%, #334155 100%);
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
