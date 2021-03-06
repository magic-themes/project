export const state = {
  branding: ['@', 'project'],

  menu: [
    { to: '/#installation', text: 'setup' },
    { to: '/#usage', text: 'usage' },
    { to: '/#theme-vars', text: 'theme vars' },
  ],

  vars: {
    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    fontSize: '18px',

    link: {
      dark: '#8f6ab4',
      light: '#8f6ab4',

      hover: {
        dark: '#412162',
        light: '#412162',
      },
    },

    neutral: '#5a5a5a',

    primary: {
      dark: '#412162',
      light: '#8f6ab4',
      neutral: 'rebeccapurple',
    },

    text: {
      dark: '#c4c4c4',
      light: '#212121',
    },

    white: '#ffffff',

    maxWidth: '1200px',

    fadeDuration: '500ms',

    widths: {
      tablet: '500px',
      laptop: '1024px',
      desktop: '1600px',
    },
  },
}
