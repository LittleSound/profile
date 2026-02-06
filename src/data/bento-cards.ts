import type { BentoData, BentoItem } from '~/types/bento'

/** Helper to create simple text doc */
function text(str: string, bold = false) {
  return {
    type: 'doc' as const,
    content: [{
      type: 'paragraph' as const,
      content: [{
        type: 'text' as const,
        text: str,
        ...(bold ? { marks: [{ type: 'bold' }] } : {}),
      }],
    }],
  }
}

/** Helper to create item without position (auto-placed) */
function item(data: BentoItem['data']): BentoItem {
  return {
    data,
    position: { mobile: { x: 0, y: 0 }, desktop: { x: 0, y: 0 } },
  }
}

export const bentoData: BentoData = {
  profile: {
    id: 'clx1nr6yd06oco20162ez35th',
    name: 'LittleSound｜Rizumu',
    handle: 'rizumu',
    image: '/assets/bento/avatar.png',
    bio: {
      type: 'doc',
      content: [
        { type: 'paragraph', content: [{ type: 'text', text: '🔥 A happy pessimist and love open source!', marks: [{ type: 'bold' }] }] },
        { type: 'paragraph' },
        { type: 'paragraph', content: [{ type: 'text', text: '💚 Working on Vue Vapor Mode' }] },
        { type: 'paragraph', content: [{ type: 'text', text: '🛠 3D Print→ Made a lot of Dev goods' }] },
        { type: 'paragraph', content: [{ type: 'text', text: '🎮 love Nintendo & Souls-like games.' }] },
        { type: 'paragraph', content: [{ type: 'text', text: '🏳️‍⚧️ she/her ｜ 🧠 AuDHD' }] },
        { type: 'paragraph' },
        { type: 'paragraph', content: [{ type: 'text', text: 'Member of @vuejs and @elk-zone @nolebase @project-trans' }] },
        { type: 'paragraph' },
        { type: 'paragraph', content: [{ type: 'text', text: '📧 Mail→ rizumu@ayaka.moe' }] },
      ],
    },
    ogImage: '/assets/bento/og-default.png',
  },
  items: [
    // === Top row ===
    item({
      id: 'zhang-da-zui',
      type: 'media',
      variant: 'image',
      url: '/assets/bento/card-image-1-zhang-da-zui.png',
      style: { mobile: '2x2', desktop: '2x2' },
    }),
    item({
      id: 'map-shanghai',
      type: 'link',
      href: 'https://www.google.com/maps/@31.222416,121.473701,10z',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: {
        mapPlace: 'Shanghai, China',
        mapCaption: text('Shanghai'),
      },
    }),
    item({
      id: 'photo-portrait',
      type: 'media',
      variant: 'image',
      url: '/assets/bento/card-image-2-photo.jpeg',
      style: { mobile: '2x2', desktop: '2x2' },
    }),
    item({
      id: 'vueconf-team',
      type: 'media',
      variant: 'image',
      url: '/assets/bento/card-image-4-vueconf-vapor-team.jpeg',
      href: 'https://x.com/OikawaRizumu/status/1791350413834547458',
      style: { mobile: '2x2', desktop: '2x2' },
    }),

    // === GitHub row ===
    item({
      id: 'github',
      type: 'link',
      href: 'https://github.com/LittleSound',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('GitHub') },
    }),
    item({
      id: 'photo-banner',
      type: 'media',
      variant: 'image',
      url: '/assets/bento/card-image-3-photo.jpeg',
      style: { mobile: '4x2', desktop: '4x2' },
    }),
    item({
      id: 'github-contrib',
      type: 'media',
      variant: 'image',
      url: '/assets/bento/card-image-5-github-contrib.png',
      href: 'https://github.com/LittleSound',
      style: { mobile: '2x2', desktop: '2x2' },
    }),

    // === Section: Social ===
    item({
      id: 'section-social',
      type: 'section-header',
      title: text('Social'),
    }),
    item({
      id: 'twitter',
      type: 'link',
      href: 'https://x.com/RizumuA3',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('Twitter (zh-cn)') },
    }),
    item({
      id: 'bluesky',
      type: 'link',
      href: 'https://bsky.app/profile/rizumu.ayaka.moe',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('Bluesky (en)') },
    }),
    item({
      id: 'instagram',
      type: 'link',
      href: 'https://www.instagram.com/aarzmu/',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('Instagram') },
    }),
    item({
      id: 'mastodon',
      type: 'link',
      href: 'https://mas.to/@rizumu',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('Mastodon') },
    }),

    // === Section: Sharing ===
    item({
      id: 'section-sharing',
      type: 'section-header',
      title: text('Sharing'),
    }),
    item({
      id: 'notes',
      type: 'link',
      href: 'https://nolebase.ayaka.io/zh-CN/%E7%AC%94%E8%AE%B0/',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: { title: text('Notes') },
    }),
    item({
      id: 'talks',
      type: 'link',
      href: 'https://github.com/LittleSound/talks/#readme',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: {
        title: text('Talks'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FoSa62C9BQgPCDpSX-AYI04116-opq3178947834.jpg',
      },
    }),

    // === Section: Products ===
    item({
      id: 'section-products',
      type: 'section-header',
      title: text('Products｜Works'),
    }),
    item({
      id: 'vue-vapor',
      type: 'link',
      href: 'https://github.com/vuejs/core-vapor',
      style: { mobile: '4x2', desktop: '4x2' },
      overrides: {
        title: text('Vue: Vapor Mode'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FN23NlT6KL0p47YlO-cPZdFgztW8AssWiGeBXAESWbi1nDoNDYXKLwFNrZmB0.webp',
      },
    }),
    item({
      id: 'interline-translate',
      type: 'link',
      href: 'https://marketplace.visualstudio.com/items?itemName=rzmu.interline-translate',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: {
        title: text('Interline Translate'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FDrnZ14Lyhh654FFN-interline-translate-logo-2.png',
      },
    }),
    item({
      id: 'nolebase-integrations',
      type: 'link',
      href: 'https://nolebase-integrations.ayaka.io/',
      style: { mobile: '2x2', desktop: '2x2' },
      overrides: { title: text('Nólëbase Integrations') },
    }),
    item({
      id: 'dev-cookies',
      type: 'link',
      href: 'https://x.com/OikawaRizumu/status/1895768739100172625',
      style: { mobile: '4x2', desktop: '4x2' },
      overrides: {
        title: text('Dev Cookies'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FFkD7K898lGEvpami-CleanShot%25202025-08-25%2520at%252011.15.51%25402x.png',
      },
    }),
    item({
      id: 'elk',
      type: 'link',
      href: 'https://elk.zone/home',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: { title: text('Elk - Mastodon client') },
    }),
    item({
      id: 'comfyui',
      type: 'link',
      href: 'https://www.comfy.org/zh-cn/',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: { title: text('ComfyUI') },
    }),
    item({
      id: 'guii-ai',
      type: 'link',
      href: 'https://guii.ai',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: {
        title: text('Guii.AI'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FvpR1gvlv72raZDd5-Demo%25E9%2580%2589%25E4%25B8%25AD%25E6%2596%2587%25E6%259C%25AC.png',
      },
    }),
    item({
      id: 'qrs',
      type: 'link',
      href: 'https://qrss.netlify.app/',
      style: { mobile: '2x2', desktop: '4x2' },
      overrides: {
        title: text('Qrs'),
        ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FLuaIMZacXJ3H9hVu-IMG_562.JPEG',
      },
    }),

    // === Bottom ===
    item({
      id: 'find-more',
      type: 'rich-text',
      content: text('Find more…'),
      href: 'https://github.com/LittleSound',
      style: { mobile: '4x1', desktop: '4x1' },
      halign: { desktop: 'left' },
      valign: { desktop: 'center' },
    }),
  ],
}
