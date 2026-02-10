<script setup lang="ts">
/**
 * Rizumu's handwritten signature animation component
 * Uses SVG stroke-dashoffset animation to create a drawing effect
 */
const props = withDefaults(defineProps<{
  /** Whether to animate the signature drawing */
  animate?: boolean
  /** Animation duration in seconds */
  duration?: number
  /** Animation delay in seconds */
  delay?: number
  /** Signature stroke color */
  color?: string
  /** Signature width in pixels */
  width?: number
  /** Whether to show pen dot during animation */
  showPenDot?: boolean
}>(), {
  animate: true,
  duration: 2,
  delay: 0.5,
  color: 'currentColor',
  width: 200,
  showPenDot: false,
})

const emit = defineEmits<{
  complete: []
}>()

const pathRef = useTemplateRef<SVGPathElement>('signature-path')
const penDotRef = useTemplateRef<SVGCircleElement>('pen-dot')
const pathLength = ref(0)
const isAnimating = ref(false)
const isComplete = ref(false)

/** SVG path data for Rizumu signature */
const signaturePath = 'M 20.40 61.15 C 20.17 58.29, 20.30 57.46, 20.30 56.67 C 20.30 55.91, 20.19 55.17, 20.18 54.41 C 20.16 53.65, 20.20 52.87, 20.20 52.10 C 20.20 51.33, 20.21 50.56, 20.19 49.80 C 20.17 49.05, 20.10 48.30, 20.09 47.55 C 20.08 46.79, 20.12 46.04, 20.13 45.29 C 20.15 44.53, 20.18 43.78, 20.16 43.02 C 20.15 42.25, 20.08 41.48, 20.05 40.72 C 20.02 39.97, 20.00 39.23, 20.00 38.49 C 20.00 37.75, 20.01 37.02, 20.04 36.28 C 20.08 35.53, 20.15 34.77, 20.22 34.02 C 20.28 33.27, 20.35 32.53, 20.44 31.79 C 20.53 31.06, 20.63 30.33, 20.75 29.59 C 20.87 28.83, 20.97 28.05, 21.16 27.31 C 21.36 26.58, 21.60 25.85, 21.91 25.16 C 22.22 24.47, 22.59 23.80, 23.01 23.18 C 23.43 22.56, 23.89 21.91, 24.45 21.43 C 25.00 20.96, 25.66 20.56, 26.34 20.33 C 27.03 20.08, 27.84 19.96, 28.57 20.00 C 29.31 20.04, 30.10 20.27, 30.76 20.60 C 31.41 20.91, 32.02 21.38, 32.51 21.92 C 33.01 22.46, 33.38 23.15, 33.70 23.83 C 34.02 24.50, 34.24 25.24, 34.41 25.98 C 34.58 26.71, 34.67 27.47, 34.71 28.21 C 34.75 28.96, 34.70 29.71, 34.64 30.45 C 34.59 31.21, 34.54 31.98, 34.37 32.71 C 34.20 33.45, 33.98 34.19, 33.65 34.87 C 33.32 35.57, 32.80 36.20, 32.36 36.84 C 31.93 37.47, 31.51 38.09, 31.04 38.67 C 30.58 39.25, 30.10 39.80, 29.57 40.31 C 29.03 40.82, 28.45 41.31, 27.83 41.73 C 27.21 42.15, 26.55 42.58, 25.87 42.83 C 25.20 43.06, 24.47 43.27, 23.78 43.20 C 23.06 43.13, 21.76 42.77, 21.64 42.37 C 21.55 42.04, 22.15 41.44, 22.60 41.13 C 23.15 40.75, 24.06 40.49, 24.80 40.46 C 25.55 40.43, 26.38 40.68, 27.10 40.95 C 27.79 41.22, 28.43 41.64, 29.04 42.08 C 29.64 42.52, 30.20 43.06, 30.72 43.60 C 31.23 44.13, 31.70 44.71, 32.14 45.30 C 32.58 45.89, 32.97 46.51, 33.35 47.14 C 33.74 47.76, 34.09 48.41, 34.44 49.06 C 34.80 49.71, 35.16 50.36, 35.49 51.02 C 35.82 51.69, 36.11 52.38, 36.42 53.06 C 36.74 53.73, 37.04 54.42, 37.40 55.07 C 37.76 55.72, 38.14 56.38, 38.57 56.98 C 38.99 57.59, 39.44 58.19, 39.97 58.70 C 40.49 59.20, 41.05 59.68, 41.69 60.01 C 42.34 60.34, 43.12 60.58, 43.85 60.67 C 44.55 60.77, 45.30 60.74, 45.99 60.60 C 46.68 60.46, 47.38 60.19, 48.01 59.83 C 48.65 59.46, 49.24 58.93, 49.78 58.41 C 50.32 57.89, 50.81 57.30, 51.25 56.70 C 51.69 56.09, 52.08 55.43, 52.42 54.77 C 52.76 54.12, 53.06 53.45, 53.29 52.76 C 53.52 52.06, 53.67 51.32, 53.79 50.59 C 53.90 49.85, 53.95 49.08, 53.98 48.33 C 54.02 47.57, 54.03 46.81, 53.98 46.05 C 53.93 45.30, 53.84 44.53, 53.67 43.80 C 53.49 43.07, 53.28 42.34, 52.94 41.68 C 52.60 41.01, 52.18 40.20, 51.60 39.79 C 51.06 39.41, 50.29 39.19, 49.65 39.23 C 48.99 39.28, 48.14 39.60, 47.70 40.09 C 47.24 40.60, 47.17 41.53, 47.00 42.29 C 46.84 43.04, 46.76 43.84, 46.70 44.61 C 46.65 45.38, 46.67 46.15, 46.70 46.91 C 46.73 47.67, 46.78 48.42, 46.89 49.17 C 47.00 49.91, 47.14 50.65, 47.33 51.37 C 47.52 52.09, 47.75 52.80, 48.02 53.49 C 48.29 54.18, 48.60 54.86, 48.96 55.50 C 49.32 56.15, 49.72 56.78, 50.17 57.36 C 50.63 57.93, 51.10 58.53, 51.69 58.95 C 52.29 59.37, 53.06 59.70, 53.77 59.85 C 54.48 60.00, 55.26 60.01, 55.96 59.85 C 56.66 59.68, 57.43 59.32, 57.98 58.85 C 58.52 58.40, 58.90 57.73, 59.25 57.10 C 59.61 56.46, 59.87 55.73, 60.11 55.02 C 60.35 54.32, 60.53 53.58, 60.68 52.85 C 60.83 52.11, 60.94 51.36, 61.03 50.60 C 61.11 49.82, 61.16 49.02, 61.18 48.23 C 61.20 47.43, 61.33 45.89, 61.14 45.83 C 61.04 45.79, 60.77 46.10, 60.68 46.38 C 60.53 46.88, 60.81 47.99, 60.93 48.78 C 61.05 49.56, 61.21 50.32, 61.39 51.07 C 61.57 51.82, 61.80 52.55, 62.02 53.28 C 62.23 54.01, 62.37 54.76, 62.69 55.43 C 63.02 56.13, 63.46 56.88, 63.99 57.40 C 64.47 57.87, 65.13 58.48, 65.70 58.47 C 66.28 58.45, 66.99 57.77, 67.45 57.24 C 67.92 56.71, 68.21 56.00, 68.46 55.31 C 68.71 54.59, 68.81 53.80, 68.92 53.00 C 69.05 52.14, 68.92 50.44, 69.16 50.30 C 69.26 50.25, 69.42 50.35, 69.52 50.49 C 69.74 50.78, 69.77 51.77, 69.92 52.44 C 70.08 53.17, 70.24 53.99, 70.47 54.73 C 70.69 55.44, 70.95 56.13, 71.25 56.81 C 71.55 57.51, 71.86 58.24, 72.27 58.87 C 72.67 59.50, 73.12 60.12, 73.67 60.60 C 74.24 61.08, 74.94 61.48, 75.63 61.74 C 76.31 61.99, 77.07 62.16, 77.77 62.15 C 78.47 62.14, 79.22 62.01, 79.85 61.70 C 80.50 61.38, 81.06 60.77, 81.60 60.25 C 82.13 59.73, 82.63 59.18, 83.07 58.60 C 83.52 58.01, 83.92 57.39, 84.26 56.74 C 84.61 56.08, 84.92 55.38, 85.16 54.67 C 85.40 53.96, 85.58 53.21, 85.72 52.47 C 85.86 51.73, 85.95 50.96, 86.02 50.20 C 86.10 49.45, 86.15 48.69, 86.17 47.94 C 86.19 47.18, 86.20 46.43, 86.16 45.68 C 86.13 44.93, 86.08 44.18, 85.95 43.44 C 85.82 42.71, 85.59 41.99, 85.37 41.28 C 85.14 40.56, 84.89 39.85, 84.60 39.15 C 84.32 38.45, 84.02 37.75, 83.65 37.09 C 83.28 36.42, 82.86 35.76, 82.38 35.15 C 81.90 34.56, 81.37 33.98, 80.79 33.49 C 80.21 33.00, 79.55 32.48, 78.90 32.23 C 78.32 32.00, 77.67 31.92, 77.13 31.93'

/** SVG viewBox - trimmed to actual path bounds with small padding for stroke */
const viewBox = '19 19 68 44'

/** Calculate height based on aspect ratio (68:44) */
const height = computed(() => Math.round(props.width * (44 / 68)))

/** CSS custom properties for animation */
const cssVars = computed(() => ({
  '--path-length': pathLength.value,
  '--duration': `${props.duration}s`,
  '--delay': `${props.delay}s`,
  '--play-state': props.animate && isAnimating.value ? 'running' : 'paused',
}))

let animFrame: number | null = null

/**
 * Cubic bezier easing function approximation for cubic-bezier(0.4, 0, 0.2, 1)
 */
function cubicBezierEase(t: number): number {
  const p1x = 0.4
  const p1y = 0.0
  const p2x = 0.2
  const p2y = 1.0
  let lo = 0
  let hi = 1
  let mid = 0

  for (let i = 0; i < 20; i++) {
    mid = (lo + hi) / 2
    const x = 3 * (1 - mid) * (1 - mid) * mid * p1x + 3 * (1 - mid) * mid * mid * p2x + mid * mid * mid
    if (x < t)
      lo = mid
    else hi = mid
  }

  const s = mid
  return 3 * (1 - s) * (1 - s) * s * p1y + 3 * (1 - s) * s * s * p2y + s * s * s
}

/** Track animation progress and optionally pen position */
function startAnimationTracking() {
  const path = pathRef.value
  if (!path)
    return

  const penDot = penDotRef.value
  const delay = props.delay * 1000
  const startTime = performance.now() + delay
  const durationMs = props.duration * 1000

  function track(now: number) {
    if (!path)
      return

    const elapsed = now - startTime
    const progress = Math.max(0, Math.min(1, elapsed / durationMs))

    if (progress >= 0 && progress <= 1 && penDot) {
      const eased = cubicBezierEase(progress)
      const point = path.getPointAtLength(eased * pathLength.value)
      penDot.setAttribute('cx', String(point.x))
      penDot.setAttribute('cy', String(point.y))
    }

    if (progress < 1) {
      animFrame = requestAnimationFrame(track)
    }
    else {
      isComplete.value = true
      emit('complete')
    }
  }

  animFrame = requestAnimationFrame(track)
}

/** Initialize path length and start animation */
function init() {
  const path = pathRef.value
  if (path) {
    pathLength.value = path.getTotalLength()
    if (props.animate) {
      isAnimating.value = true
      startAnimationTracking()
    }
    else {
      isComplete.value = true
    }
  }
}

/** Replay the signature animation */
function replay() {
  if (animFrame)
    cancelAnimationFrame(animFrame)

  const path = pathRef.value
  const penDot = penDotRef.value
  if (!path || !penDot)
    return

  isComplete.value = false
  isAnimating.value = false

  path.style.animation = 'none'
  penDot.style.animation = 'none'
  // Trigger reflow
  void path.getBBox()

  path.style.animation = ''
  penDot.style.animation = ''

  isAnimating.value = true
  startAnimationTracking()
}

onMounted(init)

onUnmounted(() => {
  if (animFrame)
    cancelAnimationFrame(animFrame)
})

defineExpose({ replay })
</script>

<template>
  <svg
    :viewBox="viewBox"
    :width="width"
    :height="height"
    :style="cssVars"
    class="rizumu-signature"
  >
    <path
      ref="signature-path"
      :d="signaturePath"
      fill="none"
      :stroke="color"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="signature-path"
      :class="{ 'is-static': !animate }"
    />
    <circle
      v-if="showPenDot"
      ref="pen-dot"
      class="pen-dot"
      :class="{ 'is-complete': isComplete }"
      cx="0"
      cy="0"
      r="2.5"
      :fill="color"
    />
  </svg>
</template>

<style scoped>
.signature-path {
  stroke-dasharray: var(--path-length);
  stroke-dashoffset: var(--path-length);
  animation: draw var(--duration) cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: var(--delay);
  animation-play-state: var(--play-state, running);
}

.signature-path.is-static {
  stroke-dashoffset: 0;
  animation: none;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.pen-dot {
  opacity: 0;
  animation:
    fade-in 0.1s var(--delay) forwards,
    fade-out 0.1s calc(var(--duration) + var(--delay)) forwards;
}

.pen-dot.is-complete {
  opacity: 0;
}

@keyframes fade-in {
  to {
    opacity: 1;
  }
}

@keyframes fade-out {
  to {
    opacity: 0;
  }
}
</style>
