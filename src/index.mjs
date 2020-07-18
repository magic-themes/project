export * as Logo from './Logo.mjs'
export * as Header from './Header.mjs'
export * as Footer from './Footer.mjs'
export * as Hero from './Hero.mjs'

export const state = {
  hero: {
    title: 'hero module',
    description: 'short branding slogan',
    content: 'some additional text. optional.',
    menu: [
      { to: '/#about', text: 'about' },
      { to: '/#usage', text: 'usage' },
      { to: '/#theme-vars', text: 'theme vars' },
    ],
  },

  footer: {
    one: {
      title: '@magic',
      before: ['jamstack generator', 'created by', 'Wizards & Witches'],
    },
    two: {
      title: 'projects',
      menu: [
        { to: 'https://github.com/magic/', text: '@magic' },
        { to: 'https://github.com/grundstein/', text: '@grundstein' },
        { to: 'https://github.com/webboot/', text: '@webboot' },
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
}

export const vars = {
  background: {
    dark: '#212121',
    light: '#e0e0e0',
  },

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
}

export default (v = {}) => {
  v = { ...vars, ...v }

  return {
    body: {
      fontFamily: [
        '"Ubuntu Narrow"',
        'Ubuntu',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Helvetica',
        'sans-serif',
      ].join(', '),

      fontSize: v.fontSize,
      lineHeight: '2',
    },

    '#Magic': {
      backgroundColor: v.background.dark,
      color: v.text.dark,
      transition: `color ${v.fadeDuration}, background-color ${v.fadeDuration}`,

      '.icon': {
        right: '0.5em',
        left: 'auto',
      },

      '.NoSpy': {
        '.icon': {
          right: 0,
          position: 'relative',
          display: 'block',
        },
      },

      '&.light': {
        backgroundColor: v.background.light,
        color: v.text.light,
      },
    },

    '.Page': {
      '> div': {
        padding: '5%',
        width: '100%',
        maxWidth: v.maxWidth,
        margin: '0 auto',

        '&#hero': {
          maxWidth: 'inherit',
        },
      },
    },

    'h1,h2,h3': { color: v.primary.neutral },
    h1: { fontSize: '1.5em' },
    h2: { fontSize: '1.4em' },
    h3: { fontSize: '1.3em' },
    h4: { fontSize: '1.2em' },
    h5: { fontSize: '1.1em', padding: 0 },

    ul: {
      width: '100%',
    },

    p: {
      margin: '0 0 0.4em',
    },

    a: {
      color: v.link.dark,
      transition: `color ${v.fadeDuration}`,

      '&:hover': {
        color: v.link.hover.dark,
      },

      '.light &&': {
        color: v.link.light,

        '&:hover': {
          color: v.link.hover.light,
        },
      },
    },

    i: {
      fontStyle: 'italic',
    },
    b: {
      fontWeight: 700,
    },

    'img, svg': {
      maxWidth: '100%',
      maxHeight: '100%',
    },

    '.Wrapper': {
      width: '100%',
      maxWidth: 'inherit',
    },

    '.Menu': {
      lineHeight: 1,
      margin: '0.6em 0 0',
      float: 'none',

      'li.active': {
        '> a': {
          color: v.primary.neutral,
        },
      },
    },

    '.NoSpy': {
      right: '0.5em',
      bottom: '0.5em',
      left: 'auto',

      '.Container': {
        left: 'auto',
        right: 0,
      },
    },

    '.GitBadges': {
      margin: '1em 0',
    },

    [`@media screen and (min-width: ${v.widths.tablet})`]: {
      '.Menu': {
        float: 'right',
      },
      '.Logo': {
        float: 'left',
      },
    },

    [`@media screen and (min-width: ${v.widths.laptop})`]: {
      body: {
        fontSize: '1.25em',
      },
    },
  }
}
