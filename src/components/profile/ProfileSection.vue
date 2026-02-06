<script setup lang="ts">
import type { ProfileData } from '~/types/bento'
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
  <div flex="~ col items-center" gap-4>
    <AvatarFrame
      :src="profile.image"
      :alt="profile.name"
      size="lg"
    />

    <h1 text-2xl text-gray-900 font-bold dark:text-white>
      {{ profile.name }}
    </h1>

    <div flex="~ col" text-sm text-gray-600 gap-1 dark:text-gray-400>
      <p
        v-for="(line, index) in bioLines"
        :key="index"
        :class="{ 'font-bold text-gray-900 dark:text-white': index === 0 }"
      >
        {{ line }}
      </p>
    </div>
  </div>
</template>
