export const View = state => [
  Hero(state),

  div([
    h2({ id: 'about' }, 'about'),

    p([
      'this is the ',
      Link({ text: '@magic-themes', to: 'https://github.com/magic-themes' }),
      ' project theme. It can be used as the foundational theme for any kind of project.',
    ]),

    p('this theme is being used on the following pages:'),

    ul([
      li(Link({ text: '@magic', to: 'https://magic.github.io/' })),
      li(Link({ text: '@webboot', to: 'https://webboot.org/' })),
      li(Link({ text: '@grundstein', to: 'https://docs.grundstein.it/' })),
    ]),

    h3({ id: 'installation' }, 'installation'),

    Pre(`npm install --save --save-exact @magic-themes/project`),

    h2({ id: 'usage' }, 'usage'),

    h3({ id: 'usage-require' }, 'require in magic.js:'),

    Pre(`
// magic.js

export default {
  // ... other config
  THEME: 'project',
}
`),

    p('magic will then find and merge the themes automatically, just as it did on this page'),

    ThemeVars(state),
  ]),
]
