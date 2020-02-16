export const View = state =>
  div([
    h1('@webboot/magic-theme'),
    p([
      'this is the ',
      Link({ to: 'https://github.com/magic-themes' }, '@magic-themes'),
      ' webboot theme. It is being used as the foundational theme for all @webboot pages.',
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

    div({ id: 'theme-vars' }, ThemeVars(state.vars)),
  ])
