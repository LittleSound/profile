import type { BentoData } from '~/types/bento'

export const bentoData: BentoData = {
  profile: {
    id: 'clx1nr6yd06oco20162ez35th',
    name: 'LittleSound｜Rizumu',
    handle: 'rizumu',
    image: '/assets/bento/avatar.png',
    bio: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: '🔥 A happy pessimist and love open source!',
              marks: [{ type: 'bold' }],
            },
          ],
        },
        { type: 'paragraph' },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: '💚 Working on Vue Vapor Mode' }],
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: '🛠 3D Print→ Made a lot of Dev goods' }],
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: '🎮 love Nintendo & Souls-like games.' }],
        },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: '🏳️‍⚧️ she/her ｜ 🧠 AuDHD' }],
        },
        { type: 'paragraph' },
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Member of @vuejs and @elk-zone @nolebase @project-trans' },
          ],
        },
        { type: 'paragraph' },
        {
          type: 'paragraph',
          content: [{ type: 'text', text: '📧 Mail→ rizumu@ayaka.moe' }],
        },
      ],
    },
    ogImage: '/assets/bento/og-default.png',
  },
  items: [
    // Row 0: Image + Map + Photo
    {
      data: {
        id: 'ufLGrZy2U50huLS2',
        type: 'media',
        variant: 'image',
        url: '/assets/bento/card-image-1-zhang-da-zui.png',
        style: { mobile: '2x2', desktop: '2x2' },
      },
      position: { mobile: { x: 0, y: 0 }, desktop: { x: 0, y: 0 } },
    },
    {
      data: {
        id: '1XCmPctERAJR9dji',
        type: 'link',
        href: 'https://www.google.com/maps/@31.222416000000003,121.473701,7.94133762812454z',
        style: { mobile: '2x2', desktop: '2x2' },
        overrides: {
          mapPlace: 'Shanghai, 上海市中国',
          mapCaption: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Shanghai' }] }],
          },
        },
      },
      position: { mobile: { x: 2, y: 0 }, desktop: { x: 2, y: 0 } },
    },
    {
      data: {
        id: 'Sy1yJnU9lNPX1Yyy',
        type: 'media',
        variant: 'image',
        url: '/assets/bento/card-image-2-photo.jpeg',
        style: { mobile: '2x2', desktop: '2x4' },
        crop: { desktop: { offsetX: 0, offsetY: -0.41 } },
      },
      position: { mobile: { x: 0, y: 4 }, desktop: { x: 4, y: 0 } },
    },
    // Row 2: GitHub + Photo Banner + VueConf
    {
      data: {
        id: 'RoP74CFCSVZghLQw',
        type: 'link',
        href: 'https://github.com/LittleSound',
        style: { mobile: '2x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'GitHub' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 6 }, desktop: { x: 0, y: 2 } },
    },
    {
      data: {
        id: 'VueConfPhoto',
        type: 'media',
        variant: 'image',
        url: '/assets/bento/card-image-3-photo.jpeg',
        style: { mobile: '4x2', desktop: '4x2' },
      },
      position: { mobile: { x: 2, y: 2 }, desktop: { x: 4, y: 2 } },
    },
    {
      data: {
        id: '1H9ZOdv2K169dVFh',
        type: 'media',
        variant: 'image',
        url: '/assets/bento/card-image-4-vueconf-vapor-team.jpeg',
        href: 'https://x.com/OikawaRizumu/status/1791350413834547458',
        style: { mobile: '2x2', desktop: '2x2' },
      },
      position: { mobile: { x: 0, y: 2 }, desktop: { x: 6, y: 2 } },
    },
    // Row 4: GitHub Contributions
    {
      data: {
        id: 'WApMdOv2fcZbvlRw',
        type: 'media',
        variant: 'image',
        url: '/assets/bento/card-image-5-github-contrib.png',
        href: 'https://github.com/LittleSound',
        style: { mobile: '2x4', desktop: '2x4' },
      },
      position: { mobile: { x: 0, y: 8 }, desktop: { x: 0, y: 4 } },
    },
    // Row 6: Section "Social"
    {
      data: {
        id: 'pT2g5gf4quQPNyr2',
        type: 'section-header',
        title: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Social' }] }],
        },
      },
      position: { mobile: { x: 0, y: 10 }, desktop: { x: 0, y: 6 } },
    },
    // Row 7-10: Social Cards
    {
      data: {
        id: 'PziLc0lDz8MYUnUJ',
        type: 'link',
        href: 'https://x.com/RizumuA3',
        style: { mobile: '2x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Twitter (zh-cn)' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 11 }, desktop: { x: 0, y: 7 } },
    },
    {
      data: {
        id: 'Jf8y1JRKLGFWRLj2',
        type: 'link',
        href: 'https://bsky.app/profile/rizumu.ayaka.moe',
        style: { mobile: '2x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Bluesky (en)' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FrsRdPgbNwRsFLgM9-CleanShot%25202025-08-25%2520at%252014.31.33%25402x.png',
        },
      },
      position: { mobile: { x: 0, y: 13 }, desktop: { x: 4, y: 7 } },
    },
    {
      data: {
        id: 'z0xzmu1c3yjL5Dnq',
        type: 'link',
        href: 'https://www.instagram.com/aarzmu/',
        style: { mobile: '2x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Instagram' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 15 }, desktop: { x: 0, y: 9 } },
    },
    {
      data: {
        id: 'C36cnjNeIoLoYBss',
        type: 'link',
        href: 'https://mas.to/@rizumu',
        style: { mobile: '1x4', desktop: '1x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: '[Idle] Rizumu (@rizumu@mas.to)' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 17 }, desktop: { x: 4, y: 9 } },
    },
    {
      data: {
        id: 'RDRWcaVtq3v5IDNP',
        type: 'link',
        href: 'https://www.threads.net/@aarzmu',
        style: { mobile: '1x4', desktop: '1x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: '[Idle] Rizumu Ayaka (@aarzmu)' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 18 }, desktop: { x: 4, y: 10 } },
    },
    // Row 11: Section "Sharing"
    {
      data: {
        id: 'm3P2VQagh5Lww9gw',
        type: 'section-header',
        title: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Sharing' }] }],
        },
      },
      position: { mobile: { x: 0, y: 19 }, desktop: { x: 0, y: 11 } },
    },
    // Row 12-15: Sharing Cards
    {
      data: {
        id: 'VAKo8dCTEMmySOLt',
        type: 'link',
        href: 'https://nolebase.ayaka.io/zh-CN/%E7%AC%94%E8%AE%B0/',
        style: { mobile: '2x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Notes' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 20 }, desktop: { x: 0, y: 12 } },
    },
    {
      data: {
        id: 'i8KiVz9pdUAd6cQH',
        type: 'link',
        href: 'https://github.com/LittleSound/talks/#readme',
        style: { mobile: '2x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Talks' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FoSa62C9BQgPCDpSX-AYI04116-opq3178947834.jpg',
        },
      },
      position: { mobile: { x: 0, y: 22 }, desktop: { x: 4, y: 12 } },
    },
    // Row 16: Section "Products｜Works"
    {
      data: {
        id: 'h6F4yqRafNNeGHaj',
        type: 'section-header',
        title: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Products｜Works' }] }],
        },
      },
      position: { mobile: { x: 0, y: 24 }, desktop: { x: 0, y: 16 } },
    },
    // Row 17+: Products Cards
    {
      data: {
        id: 'jiFkshBZykVlnVZ2',
        type: 'link',
        href: 'https://github.com/vuejs/core-vapor',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Vue: Vapor Mode - High performance, no Virtual DOM' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FN23NlT6KL0p47YlO-cPZdFgztW8AssWiGeBXAESWbi1nDoNDYXKLwFNrZmB0.webp',
        },
      },
      position: { mobile: { x: 0, y: 25 }, desktop: { x: 0, y: 17 } },
    },
    {
      data: {
        id: 'iLWJB3cPn8lnaqzF',
        type: 'link',
        href: 'https://marketplace.visualstudio.com/items?itemName=rzmu.interline-translate&ssr=false#overview',
        style: { mobile: '4x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Interline Translate 行间翻译 - VSCode Extension' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FDrnZ14Lyhh654FFN-interline-translate-logo-2.png',
        },
      },
      position: { mobile: { x: 0, y: 49 }, desktop: { x: 4, y: 17 } },
    },
    {
      data: {
        id: 'bPYUbDKWkzhr7syE',
        type: 'link',
        href: 'https://nolebase-integrations.ayaka.io/',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Nólëbase Integrations - Upgrade your VitePress!' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 29 }, desktop: { x: 4, y: 19 } },
    },
    {
      data: {
        id: '6pBheVpPDlXtcaXR',
        type: 'link',
        href: 'https://x.com/OikawaRizumu/status/1895768739100172625',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Dev Cookies - 3D Printed Developer Goods' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FFkD7K898lGEvpami-CleanShot%25202025-08-25%2520at%252011.15.51%25402x.png',
        },
      },
      position: { mobile: { x: 0, y: 33 }, desktop: { x: 0, y: 21 } },
    },
    {
      data: {
        id: 'mvW5bIMjGIJpw6SB',
        type: 'link',
        href: 'https://elk.zone/home',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Elk - a nifty Mastodon client' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 41 }, desktop: { x: 4, y: 23 } },
    },
    {
      data: {
        id: 'EKKV3s8wq1sT0ZtL',
        type: 'link',
        href: 'https://www.comfy.org/zh-cn/',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'ComfyUI - Generate video, images, audio with AI' }] }],
          },
        },
      },
      position: { mobile: { x: 0, y: 53 }, desktop: { x: 0, y: 25 } },
    },
    {
      data: {
        id: 'CZN2yMtScVB1BHEu',
        type: 'link',
        href: 'https://guii.ai',
        style: { mobile: '4x4', desktop: '4x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Guii.AI - Use multimodal prompts to generate the frontend' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FvpR1gvlv72raZDd5-Demo%25E9%2580%2589%25E4%25B8%25AD%25E6%2596%2587%25E6%259C%25AC.png',
        },
      },
      position: { mobile: { x: 0, y: 37 }, desktop: { x: 4, y: 27 } },
    },
    {
      data: {
        id: 'beFQaz2prCOU0HOp',
        type: 'link',
        href: 'https://qrss.netlify.app/',
        style: { mobile: '4x4', desktop: '2x4' },
        overrides: {
          title: {
            type: 'doc',
            content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Qrs - Stream data through multiple QRCodes' }] }],
          },
          ogImage: 'https://storage.googleapis.com/creatorspace-public/users%2Fclx1nr6yd06oco20162ez35th%2FLuaIMZacXJ3H9hVu-IMG_562.JPEG',
        },
      },
      position: { mobile: { x: 0, y: 45 }, desktop: { x: 0, y: 29 } },
    },
    // Bottom: Find more
    {
      data: {
        id: '11TiuPMRoEIb2qDT',
        type: 'rich-text',
        content: {
          type: 'doc',
          content: [{ type: 'paragraph', content: [{ type: 'text', text: 'Find more…' }] }],
        },
        href: 'https://github.com/LittleSound',
        style: { mobile: '1x4', desktop: '1x4' },
        bg: '#fff',
        halign: { desktop: 'left' },
        valign: { desktop: 'top' },
      },
      position: { mobile: { x: 0, y: 57 }, desktop: { x: 0, y: 31 } },
    },
  ],
}
