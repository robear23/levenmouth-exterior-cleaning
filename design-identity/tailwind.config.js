/** @type {import('tailwindcss').Config} */
// Design identity extracted from https://nobleexteriorcleaningservices.co.uk/
// Generated: 2026-08-17

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx,vue,svelte}'],
  darkMode: 'media', // site has no site-wide dark mode; 'media' is a safe default if you add one later

  theme: {
    extend: {

      colors: {
        primary: {
          DEFAULT: '#ACAD28',
          dark:    '#838433',
          light:   '#E9EABE', // inferred
        },
        secondary: {
          DEFAULT: '#909431',
        },
        accent: {
          DEFAULT: '#FFB800',
        },
        neutral: {
          50:  '#FBFBF8',
          100: '#FAF5E5',
          200: '#F0E6C5',
          300: '#D8DEE7',
          400: '#98A3B2',
          500: '#646360',
          600: '#4A4A4A',
          700: '#3F3F3F',
          800: '#2C2C2C',
          900: '#141004',
        },
        success: '#16A34A', // inferred
        warning: '#D97706', // inferred
        error:   '#DC2626', // inferred
        info:    '#2563EB', // inferred
        surface: {
          DEFAULT: '#FBFBF8',
          raised:  '#FFFFFF',
          overlay: '#FFFFFF', // inferred
        },
        dark: {
          surface:     '#151B26',
          border:      '#2D3748',
          text:        '#FFFFFF',
          'text-body': '#D8DEE7',
          'text-muted':'#98A3B2',
          'dot-inactive': '#596274',
        },
        whatsapp: '#25D366', // third-party plugin color, not brand
      },

      fontFamily: {
        heading: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        body:    ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
        mono:    ['Cascadia Code', 'Fira Code', 'monospace'], // inferred
      },

      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1.4',  letterSpacing: '0' }],
        sm:   ['0.875rem', { lineHeight: '1.55', letterSpacing: '0' }],
        base: ['1rem',     { lineHeight: '1.5',  letterSpacing: '0' }],
        lg:   ['1.125rem', { lineHeight: '1.5',  letterSpacing: '0' }],
        xl:   ['1.25rem',  { lineHeight: '1.25', letterSpacing: '0' }],
        '2xl':['1.625rem', { lineHeight: '1.0',  letterSpacing: '0' }],
        '3xl':['2rem',     { lineHeight: '1.2',  letterSpacing: '0' }],
        '4xl':['2.625rem', { lineHeight: '1.14', letterSpacing: '0' }],
        '5xl':['3.125rem', { lineHeight: '0.96', letterSpacing: '0' }],
        '6xl':['4rem',     { lineHeight: '1.4',  letterSpacing: '0' }],
      },

      fontWeight: {
        light:     '300',
        normal:    '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
        extrabold: '800',
      },

      spacing: {
        1:   '4px',
        2:   '8px',
        3:   '12px',
        4:   '16px',
        5:   '20px',
        6:   '24px',
        8:   '32px',
        10:  '40px',
        12:  '48px',
        16:  '64px',
        20:  '80px',
        24:  '96px',
      },

      borderRadius: {
        none: '0',
        sm:   '8px',   // inferred
        md:   '14px',  // real — dark testimonial card
        lg:   '25px',  // real — dominant site radius
        xl:   '30px',  // real — larger feature panels
        '2xl':'40px',  // inferred
        full: '999px', // real — badges, dots
      },

      boxShadow: {
        sm: '0 2px 6px rgba(0,0,0,0.12)',   // inferred
        md: '0 6px 16px rgba(0,0,0,0.16)',  // inferred
        lg: '0 10px 25px rgba(0,0,0,0.20)', // real — testimonial card
        xl: '0 16px 36px rgba(0,0,0,0.24)', // inferred
      },

      transitionDuration: {
        fast:   '150ms', // inferred
        normal: '300ms', // real — dominant site-wide transition
        slow:   '350ms', // real — testimonial carousel
      },

      transitionTimingFunction: {
        'default': 'ease', // real — only easing found on-site
      },

      screens: {
        sm:  '768px',  // real Astra tablet breakpoint
        md:  '1024px', // real Astra desktop-ceiling breakpoint
        lg:  '1200px', // real Astra container max
      },

      maxWidth: {
        container: '1200px', // real
        narrow:    '750px',  // real
      },

    },
  },

  plugins: [],
};
