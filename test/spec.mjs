import { is } from '@magic/test'
import theme from '../src/index.mjs'

import css from '@magic/css'

import { vars } from '../src/index.mjs'
import { state } from '../example/app.mjs'

export default [
  { fn: () => theme, expect: is.function, info: 'theme is a function' },
  { fn: () => css(theme), expect: is.object, info: 'theme can be parsed by css lib' },
  { fn: () => css.stringify(theme), expect: is.string, info: 'theme can be parsed by css lib' },
  {
    fn: () => css.stringify(theme),
    expect: t => t.includes('.Menu'),
    info: 'theme contains at least a .Menu style',
  },
  { fn: is.deep.equal(vars, state.vars), expect: true, info: 'app and theme export same vars' },
]
