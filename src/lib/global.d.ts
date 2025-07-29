// src/types/global.d.ts
// Solo declaraciones globales - NO duplicar tipos de business logic

// Google Analytics (tipos personalizados)
interface GtagConfig {
  page_path?: string
  page_title?: string
  page_location?: string
  event_category?: string
  event_label?: string
  value?: number
  custom_map?: { [key: string]: string }
  [key: string]: unknown
}

interface GtagEventParams {
  event_category?: string
  event_label?: string
  value?: number
  [key: string]: unknown
}

declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: GtagConfig): void
      (command: 'event', eventName: string, params?: GtagEventParams): void
      (command: 'js', date: Date): void
      (command: string, ...args: unknown[]): void
    }
    dataLayer: unknown[]
  }

  // Variables de entorno
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GA_ID: string
      SPOTIFY_CLIENT_ID: string
      SPOTIFY_CLIENT_SECRET: string
      SPOTIFY_REFRESH_TOKEN: string
      EMAILJS_PUBLIC_KEY: string
      EMAILJS_SERVICE_ID: string
      EMAILJS_TEMPLATE_ID: string
    }
  }
}

export {}