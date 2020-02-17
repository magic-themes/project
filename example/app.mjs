export const state = {
  logotext: '@magic-themes/project',

  branding: ['@', 'project'],

  menu: [
    { to: '/#installation', text: 'setup' },
    { to: '/#usage', text: 'usage' },
    { to: '/#theme-vars', text: 'theme vars' },
  ],

  hero: {
    title: 'hero module',
    description: 'short branding slogan',
    menu: [
      { to: '/#about', text: 'about' },
      { to: '/#usage', text: 'usage' },
      { to: '/#theme-vars', text: 'theme vars' },
    ],
  },

  footer: {
    one: {
      title: '@magic',
      before: ['static webapp and api generator.', 'created by', 'Wizards & Witches @ Work'],
    },
    two: {
      title: 'organizations',
      menu: [
        { to: 'https://github.com/magic', text: '@magic' },
        { to: 'https://github.com/magic/core', text: '@magic/core' },
        { to: 'https://github.com/magic-modules', text: '@magic-modules' },
        { to: 'https://github.com/magic-libraries', text: '@magic-libraries' },
        { to: 'https://github.com/magic-themes', text: '@magic-themes' },
      ],
    },
    three: {
      title: 'social links',
      menu: [
        { to: 'https://www.npmjs.com/org/magic', text: 'npm' },
        { to: 'https://github.com/magic', text: 'github' },
      ],
    },
  },

  vars: {
    background: {
      dark: '#212121',
      light: '#e0e0e0',
    },

    link: {
      dark: 'rebeccapurple',
      light: 'rebeccapurple',

      hover: {
        dark: '#8f6ab4',
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

    maxWidth: '1000px',

    fadeDuration: '500ms',

    widths: {
      tablet: '500px',
      laptop: '1024px',
      desktop: '1600px',
    },
  },
}
