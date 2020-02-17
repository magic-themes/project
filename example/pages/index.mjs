export const View = state => [
  Hero(state),

  div([
    h2({ id: 'about' }, 'about'),

    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-themes' }, '@magic-themes'),
      ' project theme. It can be used as the foundational theme for any kind of project.',
    ]),

    p([
      'currently, this theme is being used on the following project pages:',
      ul([
        li(Link({ to: 'https://magic.github.io' }, '@magic')),
        li(Link({ to: 'https://webboot.org' }, '@webboot')),
        li(Link({ to: 'https://grundstein.github.io' }, '@grundstein')),
      ]),
    ]),

    h3({ id: 'installation' }, 'installation'),
    Pre(`npm install --save --save-exact @webboot/magic-theme`),

    h2({ id: 'usage' }, 'usage'),

    h3({ id: 'usage-require' }, 'require in config.mjs:'),

    Pre(`
// config.mjs

export default {
  // ... other config
  THEME: '@webboot/magic-theme',
}`),

    p('magic will then find and merge the themes automatically, just as it did on this page'),

    ThemeVars(state.vars),
  ]),
]
