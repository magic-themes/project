export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, title, ...state } = props
  if (!logo && !menu) {
    return
  }

  let { branding = [], root } = state
  if (!Array.isArray(branding)) {
    branding = [branding]
  }

  const [first, ...rest] = branding

  return header(
    { class: 'Header' },
    div([
      Logo({ root }),
      first && Link({ to: root, class: 'branding' }, [span(first), rest]),
      menu && Menu({ state, items: menu }),
    ]),
  )
}

export const style = vars => ({
  padding: '.5em 0 0',
  width: '100%',

  '.Menu': {
    display: 'inline-block',
    width: '100%',
  },

  '.branding': {
    color: vars.neutral || '#5a5a5a',
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '5px 0 0 0.2em',
    textDecoration: 'none',

    span: {
      color: vars.primary && vars.primary.neutral || 'rebeccapurple',
      fontSize: '1em',
      margin: '0',
    },
  },

  '> div': {
    margin: '0 auto',
    maxWidth: vars.maxWidth || '1200px',
    padding: '0 5%',
  },

  [`@media screen and (min-width: ${vars.widths && vars.widths.tablet || '500px'})`]: {
    '.Menu': {
      float: 'right',
      width: 'auto',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
