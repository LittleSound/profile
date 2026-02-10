<script setup lang="ts">
import type { ProfileData } from '~/types/bento'
import RizumuSignature from '~/components/signature/RizumuSignature.vue'
import { extractText } from '~/types/bento'
import AvatarFrame from './AvatarFrame.vue'

const { profile } = defineProps<{
  profile: ProfileData
}>()

const bioLines = computed(() => {
  return extractText(profile.bio).split('\n').filter(Boolean)
})
</script>

<template>
  <div flex="~ col items-start" gap-6 h-full>
    <div flex="~ items-end justify-between xl:justify-start gap-5 self-stretch">
      <AvatarFrame
        :src="profile.image"
        :alt="profile.name"
        size="lg"
      />

      <div class="signature-display">
        <RizumuSignature
          :animate="false"
          :width="80"
          color="currentColor"
        />
      </div>
    </div>

    <h1 text-8 text-gray-900 font-bold xl:text-11 dark:text-white>
      {{ profile.name }}
    </h1>

    <div flex="~ col" text-5 text-gray-600 gap-2 dark:text-gray-400>
      <p
        v-for="(line, index) in bioLines"
        :key="index"
        :class="{ 'font-bold text-gray-900 dark:text-white': index === 0 }"
      >
        {{ line }}
      </p>
    </div>

    <div class="flex-1 hidden xl:block" />
    <TheFooter class="hidden xl:block" />
  </div>
</template>
