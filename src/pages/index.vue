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

    :class="isMobile ? 'flex-col' : 'flex-row'"

    bg-gray-100 flex min-h-screen dark:bg-gray-900
  >
    <!-- Profile Section -->
    <aside
      :class="[
        isMobile ? 'w-full py-8' : 'w-80 sticky top-0 h-screen',
      ]"
      flex="~ col items-center justify-center"
      p-6
      shrink-0
    >
      <ProfileSection :profile="bentoData.profile" />
    </aside>

    <!-- Bento Grid -->
    <main p-4 flex-1 overflow-auto>
      <BentoGrid :items="bentoData.items" :is-mobile="isMobile" />
    </main>

    <!-- Floating Bar -->
    <FloatingBar />
  </div>
</template>
