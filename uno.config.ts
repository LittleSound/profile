import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // Glass card base style
    ['glass-card', 'backdrop-blur-xl bg-white/70 dark:bg-gray-800/70 border border-white/20 dark:border-gray-700/30 rounded-2xl shadow-lg overflow-hidden'],
    // Glass card with hover effect
    ['glass-card-hover', 'glass-card hover:bg-white/80 dark:hover:bg-gray-800/80 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200'],
    // Glass container for floating bar
    ['glass-container', 'backdrop-blur-xl saturate-300 bg-gray-500/20 dark:bg-gray-500/30 rounded-2xl'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
})
