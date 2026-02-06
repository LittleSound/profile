<script setup lang="ts">
import ThemeToggle from './ThemeToggle.vue'

const copied = ref(false)
let timeoutId: ReturnType<typeof setTimeout> | null = null

function copyEmail() {
  const email = 'rizumu@ayaka.moe'
  navigator.clipboard.writeText(email)
    .then(() => {
      copied.value = true
      if (timeoutId)
        clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        copied.value = false
      }, 2000)
    })
    .catch((err) => {
      console.error('Copy failed:', err)
    })
}
</script>

<template>
  <div class="h-17 md:h-25 md:h-auto">
    <div class="p-2 flex pointer-events-none items-end inset-0 justify-center fixed z-99 md:(p-6 flex-col)">
      <div
        class="floating-bar-container p-3 rounded-2xl flex gap-3 pointer-events-auto items-center md:flex-col"
        glass-container
      >
        <div class="flex gap-3 items-center md:flex-col">
          <!-- Copy Email Button -->
          <button
            class="copy-btn md:(px-0 py-3 h-auto w-9)"
            bg="#4edd76"
            hover:bg="#3dda69"
            active:bg="#32ca5c"
            shadow="[0px_2px_3px_rgba(0,0,0,0.06)]"
            transition="all .1s cubic-bezier(.427,.073,.105,.997)"
            active:text-gray-2 text-white px-3 rounded-lg h-9 relative active:scale-95
            @click="copyEmail"
          >
            <div class="copy-button-content" :class="{ copied }" text-sm font-600>
              <span class="md:vertical-rl block">Copy my Email</span>
              <span class="copied-text">
                <div i-heroicons-check h-5 w-5 inline-block />
                <span class="md:vertical-rl">COPIED</span>
              </span>
            </div>
          </button>
        </div>

        <div class="rounded-full bg-black/12 h-4 w-0.5 dark:bg-white/12 md:(h-0.5 w-4)" />

        <div class="flex gap-2 items-center">
          <ThemeToggle />
        </div>

        <div class="floating-bar-highlight" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.floating-bar-container {
  position: relative;
}

.floating-bar-highlight {
  pointer-events: none;
  position: absolute;
  inset: 0px;
  border-radius: 16px;
  border-width: 1px;
  border-color: rgba(255, 255, 255, 0.7);
  -webkit-mask-image: linear-gradient(0deg, transparent, #000);
  mask-image: linear-gradient(0deg, transparent, #000);
}
.dark .floating-bar-highlight {
  border-color: rgba(255, 255, 255, 0.4);
}

.copy-button-content {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-button-content > span:first-child {
  transition: transform 0.3s ease;
}

.copy-button-content.copied > span:first-child {
  transform: translateY(-100%);
}

.copied-text {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.copy-button-content.copied > .copied-text {
  transform: translateY(0);
}

@media (min-width: 768px) {
  .vertical-rl {
    writing-mode: vertical-rl;
  }

  .copy-button-content.copied > span:first-child {
    transform: translateX(-100%) !important;
  }

  .copied-text {
    transform: translateX(100%) !important;
    flex-direction: column;
  }

  .copy-button-content.copied > .copied-text {
    transform: translateX(0) !important;
  }
}
</style>
