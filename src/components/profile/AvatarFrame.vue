<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}>()

const sizeClasses = {
  sm: 'h-16 w-16',
  md: 'h-24 w-24',
  lg: 'h-32 w-32',
}
</script>

<template>
  <div class="avatar-frame" :class="sizeClasses[size ?? 'lg']">
    <div class="avatar-inner">
      <div class="avatar-border" />
      <img :src="src" :alt="alt" class="h-full w-full object-cover">
      <div class="avatar-gradient" />
      <div class="avatar-highlight" />
    </div>
  </div>
</template>

<style scoped>
.avatar-frame {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: transparent;
  padding: 4px;
}

.avatar-inner {
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dark .avatar-inner {
  background-color: #1f2937;
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.06);
}

.avatar-gradient {
  pointer-events: none;
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.02) 30%, transparent);
}

.avatar-border {
  pointer-events: none;
  position: absolute;
  border-width: 1px;
  inset: 0;
  border-radius: 50%;
  border-color: rgba(0, 0, 0, 0.12);
}
.dark .avatar-border {
  border-color: rgba(255, 255, 255, 0.12);
}

.avatar-highlight {
  pointer-events: none;
  position: absolute;
  border-width: 1px;
  inset: 1px;
  border-radius: 50%;
  border-color: hsla(0, 0%, 100%, 0.3);
  transition: opacity 0.1s ease;
  -webkit-mask-image: linear-gradient(0deg, transparent 30%, #000);
  mask-image: linear-gradient(0deg, transparent 30%, #000);
}
</style>
