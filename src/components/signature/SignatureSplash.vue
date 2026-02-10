<script setup lang="ts">
/**
 * Full-screen signature splash component
 * Displays signature animation on first visit, then fades out to reveal content
 */
import RizumuSignature from './RizumuSignature.vue'

const props = withDefaults(defineProps<{
  /** Duration of signature drawing animation in seconds */
  duration?: number
  /** Delay before animation starts in seconds */
  delay?: number
  /** Duration of fade-out transition in seconds */
  fadeOutDuration?: number
  /** Additional delay after animation completes before fade-out */
  holdDuration?: number
}>(), {
  duration: 2,
  delay: 0.3,
  fadeOutDuration: 0.8,
  holdDuration: 0.5,
})

const emit = defineEmits<{
  complete: []
}>()

const isVisible = ref(true)
const isFadingOut = ref(false)

function onAnimationComplete() {
  setTimeout(() => {
    isFadingOut.value = true
    setTimeout(() => {
      isVisible.value = false
      emit('complete')
    }, props.fadeOutDuration * 1000)
  }, props.holdDuration * 1000)
}
</script>

<template>
  <Teleport to="body">
    <Transition name="splash-fade">
      <div
        v-if="isVisible"
        class="signature-splash"
        :class="{ 'is-fading': isFadingOut }"
        :style="{ '--fade-duration': `${fadeOutDuration}s` }"
      >
        <div class="splash-content" p-8>
          <RizumuSignature
            class="h-auto max-w-full"
            :animate="true"
            :duration="duration"
            :delay="delay"
            color="currentColor"
            :width="400"
            @complete="onAnimationComplete"
          />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.signature-splash {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #faf9f7;
  transition: opacity var(--fade-duration) ease-out;
}

.dark .signature-splash {
  background: #18181b;
}

.signature-splash.is-fading {
  opacity: 0;
  pointer-events: none;
}

.splash-content {
  color: #1a1a1a;
}

.dark .splash-content {
  color: #e5e5e5;
}

.splash-fade-leave-active {
  transition: opacity var(--fade-duration) ease-out;
}

.splash-fade-leave-to {
  opacity: 0;
}
</style>
