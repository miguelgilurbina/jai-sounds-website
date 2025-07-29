// src/lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Verificar si Google Analytics está disponible
const isGAAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function'
}

// Función principal para trackear events
export const trackEvent = (
  action: string, 
  category: string, 
  label?: string, 
  value?: number
): void => {
  if (isGAAvailable()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Events específicos para JAI Sounds
export const trackPlaylistClick = (playlistName: string): void => {
  trackEvent('click', 'playlist', playlistName)
}

export const trackContactMethod = (method: 'whatsapp' | 'email' | 'form'): void => {
  trackEvent('contact', 'method', method)
}

export const trackFormSubmit = (formType: 'consultation' | 'newsletter'): void => {
  trackEvent('submit', 'form', formType)
}

export const trackSpotifyLink = (playlistName: string): void => {
  trackEvent('external_link', 'spotify', playlistName)
}

export const trackServiceInterest = (serviceName: string): void => {
  trackEvent('interest', 'service', serviceName)
}

// Función para inicializar Google Analytics
export const initGA = (): void => {
  if (!GA_TRACKING_ID) {
    console.warn('Google Analytics ID not found')
    return
  }

  // Cargar script de Google Analytics
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  // Configurar gtag
  window.dataLayer = window.dataLayer || []
  window.gtag = function(...args: unknown[]) {
    window.dataLayer.push(args)
  }
  
  window.gtag('js', new Date())
  window.gtag('config', GA_TRACKING_ID, {
    page_title: 'JAI Sounds',
    page_location: window.location.href
  })
}

// Hook para usar analytics en React
export const useAnalytics = () => {
  const trackPageView = (url: string) => {
    if (isGAAvailable() && GA_TRACKING_ID) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
      })
    }
  }

  return {
    trackEvent,
    trackPlaylistClick,
    trackContactMethod,
    trackFormSubmit,
    trackSpotifyLink,
    trackServiceInterest,
    trackPageView,
  }
}