/** ProseMirror document format used by Bento for rich text */
export interface ProseMirrorMark {
  type: 'bold' | 'italic' | 'link' | string
  attrs?: Record<string, unknown>
}

export interface ProseMirrorText {
  type: 'text'
  text: string
  marks?: ProseMirrorMark[]
}

export interface ProseMirrorParagraph {
  type: 'paragraph'
  content?: ProseMirrorText[]
}

export interface ProseMirrorDoc {
  type: 'doc'
  content: ProseMirrorParagraph[]
}

/** Card size format: "WxH" where W=width (cols), H=height (rows) in grid units */
export type CardSize = '1x1' | '1x2' | '2x1' | '2x2' | '2x4' | '4x1' | '4x2' | '4x4' | '6x2'

/** Position on the grid */
export interface GridPosition {
  x: number
  y: number
}

/** Responsive style configuration */
export interface ResponsiveStyle {
  mobile: CardSize
  desktop: CardSize
}

/** Responsive position configuration */
export interface ResponsivePosition {
  mobile: GridPosition
  desktop: GridPosition
}

/** Link card data */
export interface LinkCardData {
  id: string
  type: 'link'
  href: string
  style: ResponsiveStyle
  overrides?: {
    title?: ProseMirrorDoc
    ogImage?: string
    mapPlace?: string
    mapCaption?: ProseMirrorDoc
  }
}

/** Media card data (image/video) */
export interface MediaCardData {
  id: string
  type: 'media'
  variant: 'image' | 'video'
  url: string
  href?: string
  style: ResponsiveStyle
  caption?: ProseMirrorDoc
  crop?: {
    desktop?: { offsetX: number, offsetY: number }
    mobile?: { offsetX: number, offsetY: number }
  }
}

/** Rich-text card data */
export interface RichTextCardData {
  id: string
  type: 'rich-text'
  content: ProseMirrorDoc
  href?: string
  style: ResponsiveStyle
  bg?: string
  halign?: { desktop?: 'left' | 'center' | 'right' }
  valign?: { desktop?: 'top' | 'center' | 'bottom' }
}

/** Section header data */
export interface SectionHeaderData {
  id: string
  type: 'section-header'
  title: ProseMirrorDoc
}

/** Union type for all card data types */
export type BentoCardData = LinkCardData | MediaCardData | RichTextCardData | SectionHeaderData

/** A bento item with position info */
export interface BentoItem {
  data: BentoCardData
  position: ResponsivePosition
}

/** Profile data structure */
export interface ProfileData {
  id: string
  name: string
  handle: string
  image: string
  bio: ProseMirrorDoc
  ogImage: string
}

/** Complete bento data */
export interface BentoData {
  profile: ProfileData
  items: BentoItem[]
}

/** Parse card size string to width and height */
export function parseCardSize(size: CardSize): { cols: number, rows: number } {
  const [cols, rows] = size.split('x').map(Number)
  return { cols, rows }
}

/** Extract plain text from ProseMirror document */
export function extractText(doc: ProseMirrorDoc | undefined): string {
  if (!doc?.content)
    return ''
  return doc.content
    .map(p => p.content?.map(t => t.text).join('') ?? '')
    .join('\n')
}
