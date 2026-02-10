<script setup lang="ts">
import { useHead } from '@unhead/vue'

const SITE_URL = 'https://rizumu.me'
const SITE_TITLE = 'LittleSound｜Rizumu'
const SITE_DESCRIPTION = 'Vue.js Team Member working on Vue Vapor Mode. Open source enthusiast, 3D printing maker, and Nintendo fan. Based in Shanghai.'
const SITE_IMAGE = `${SITE_URL}/og-image.jpg`
const SITE_AUTHOR = 'Rizumu Ayaka'
const SITE_KEYWORDS = 'Vue.js,Vapor Mode,Open Source,Frontend Developer,Rizumu,LittleSound,Vue Team,Shanghai'
const TWITTER_HANDLE = '@RizumuA3'

useHead({
  title: SITE_TITLE,
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: 'canonical', href: SITE_URL },
  ],
  meta: [
    // Basic Meta
    { name: 'description', content: SITE_DESCRIPTION },
    { name: 'author', content: SITE_AUTHOR },
    { name: 'keywords', content: SITE_KEYWORDS },

    // Open Graph - Core
    { property: 'og:title', content: SITE_TITLE },
    { property: 'og:description', content: SITE_DESCRIPTION },
    { property: 'og:type', content: 'profile' },
    { property: 'og:url', content: SITE_URL },
    { property: 'og:site_name', content: SITE_TITLE },
    { property: 'og:locale', content: 'en_US' },

    // Open Graph - Image (1200x630 recommended)
    { property: 'og:image', content: SITE_IMAGE },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: `${SITE_TITLE} - Profile` },

    // Open Graph - Profile
    { property: 'profile:first_name', content: 'Rizumu' },
    { property: 'profile:last_name', content: 'Ayaka' },
    { property: 'profile:username', content: 'rizumu' },

    // Twitter Card
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: TWITTER_HANDLE },
    { name: 'twitter:creator', content: TWITTER_HANDLE },
    { name: 'twitter:title', content: SITE_TITLE },
    { name: 'twitter:description', content: SITE_DESCRIPTION },
    { name: 'twitter:image', content: SITE_IMAGE },
    { name: 'twitter:image:alt', content: `${SITE_TITLE} - Profile` },

    // Additional SEO
    { name: 'robots', content: 'index, follow' },
    { name: 'theme-color', content: '#18181b' },
  ],
})
</script>
