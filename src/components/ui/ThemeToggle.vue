<script setup lang="ts">
import { useTheme } from '~/composables/useTheme'

const { isDark, toggleDark } = useTheme()
</script>

<template>
  <button
    class="theme-toggle"

    rounded-xl bg-black flex h-10 w-10 items-center justify-center active:bg-black dark:bg-white hover:bg-gray-900 active:scale-95 dark:active:bg-white dark:hover:bg-gray-100
    shadow="[0px_2px_3px_rgba(0,0,0,0.06)]"
    transition="all .1s cubic-bezier(.427,.073,.105,.997)"
    @click="toggleDark()"
  >
    <div
      v-if="isDark"
      i-heroicons-sun-solid
      text-lg
      text-black
    />
    <div
      v-else
      i-heroicons-moon-solid
      text-lg
      text-white
    />
  </button>
</template>
