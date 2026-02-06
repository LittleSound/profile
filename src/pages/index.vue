<script setup lang="ts">
import BentoGrid from '~/components/bento/BentoGrid.vue'
import ProfileSection from '~/components/profile/ProfileSection.vue'
import FloatingBar from '~/components/ui/FloatingBar.vue'
import { useBentoLayout } from '~/composables/useBentoLayout'
import { bentoData } from '~/data/bento-cards'

const { isMobile } = useBentoLayout()
</script>

<template>
  <div

    bg-gray-100 min-h-screen dark:bg-gray-900
  >
    <!-- Page container with max-width and centered -->
    <div
      :class="isMobile ? 'flex-col' : 'flex-row'"
      class="page-container"

      mx-auto flex
    >
      <!-- Profile Section: flex-1 on desktop, expands to fill remaining space -->
      <aside
        :class="[
          isMobile ? 'w-full py-8' : 'flex-1 sticky top-0 h-screen',
        ]"
        flex="~ col items-center justify-center"
        p-6
      >
        <ProfileSection :profile="bentoData.profile" />
      </aside>

      <!-- Bento Grid: fixed width on desktop -->
      <main
        :class="isMobile ? 'w-full' : ''"
        p-4
        shrink-0
      >
        <BentoGrid :items="bentoData.items" :is-mobile="isMobile" />
      </main>
    </div>

    <!-- Floating Bar -->
    <FloatingBar />
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1400px;
}
</style>
