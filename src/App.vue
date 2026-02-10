<script setup lang="ts">
import OGHead from '~/components/OGHead.vue'
import SignatureSplash from '~/components/signature/SignatureSplash.vue'

const showSplash = ref(true)

function onSplashComplete() {
  showSplash.value = false
}
</script>

<template>
  <OGHead />
  <main font-sans text="gray-700 dark:gray-200">
    <SignatureSplash
      v-if="showSplash"
      :duration="2"
      :delay="0.3"
      :fade-out-duration="0.8"
      :hold-duration="0.5"
      @complete="onSplashComplete"
    />
    <RouterView />
  </main>
</template>
