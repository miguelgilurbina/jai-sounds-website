// src/lib/types.ts
export interface SiteConfig {
  site: {
    name: string;
    tagline: string;
    description: string;
    url: string;
    locale: string;
  };
  header: {
    logo: {
      type: 'image' | 'text';
      src?: string;
      alt?: string;
    };
    navigation: Array<{
      label: string;
      href: string;
    }>;
    cta: {
      text: string;
      href: string;
      variant: 'primary' | 'secondary';
    };
  };
  hero: {
    headline: string;
    subtitle: string;
    description: string;
    cta: {
      primary: {
        text: string;
        href: string;
      };
      secondary: {
        text: string;
        href: string;
      };
    };
    background: {
      type: string;
      concept: string;
    };
  };
  about: {
    title: string;
    bio: string;
    philosophy: string;
    achievements: Array<{
      title: string;
      description: string;
    }>;
    inspiration: string;
    value_proposition: string;
  };
  services: Array<{
    title: string;
    description: string;
    features: string[];
    icon: string;
    is_featured: boolean;
  }>;
  portfolio: {
    title: string;
    subtitle: string;
    cases: Array<{
      title: string;
      description: string;
      result: string;
      image: string;
      tags: string[];
      link: string;
    }>;
  };
  playlists: {
    title: string;
    subtitle: string;
    spotify_user: string;
    featured_playlists: string[];
  };
  contact: {
    title: string;
    subtitle: string;
    methods: Array<{
      type: string;
      label: string;
      value: string;
      primary: boolean;
      description: string;
    }>;
    social_links: Array<{
      platform: string;
      url: string;
      label: string;
    }>;
  };
  footer: {
    tagline: string;
    copyright: string;
    philosophy: string;
  };
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  image: string;
  tracks: number;
  external_url: string;
  preview_url?: string;
}

// src/lib/theme.ts
export const jaiSoundsTheme = {
  colors: {
    primary: '#C73E1D',      // Rojo JAI Sounds
    secondary: '#000000',    // Negro absoluto
    accent: '#FF6B35',       // Naranja vibrante CTA
    neutral: {
      light: '#FFFFFF',      // Blanco puro
      dark: '#1A1A1A',       // Negro cálido
      medium: '#666666'      // Gris medio
    },
    gradients: {
      space: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      desert: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      portal: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      temporal: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  },
  typography: {
    headings: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
    accent: 'Poppins, sans-serif'
  },
  spacing: {
    section: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  },
  borderRadius: {
    default: '0.75rem',
    lg: '1rem',
    xl: '1.5rem'
  },
  animations: {
    portal: 'animate-pulse',
    float: 'animate-bounce',
    fade: 'transition-all duration-300 ease-in-out'
  }
};