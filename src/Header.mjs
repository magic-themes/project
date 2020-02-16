export const View = (props = {}, children = []) => {
  CHECK_PROPS(props, propTypes, 'Header')

  const { logo, menu, logotext, ...state } = props
  if (!logo && !menu && !logotext) {
    return
  }

  let { branding } = state
  if (!Array.isArray(branding)) {
    branding = [branding]
  }

  return header(
    { class: 'Header' },
    div([
      Link({ to: state.root, class: 'Logo' }, [
        (logo || logotext) && Logo({ img: logo, text: logotext }),
        branding && div({ class: 'branding' }, [span(branding[0]), branding[1]]),
      ]),
      menu && Menu({ state, items: menu }),
    ]),
  )
}

export const style = vars => ({
  '.branding': {
    float: 'left',
    fontSize: '1.5em',
    lineHeight: '1',
    margin: '0.2em 0 0 0.2em',

    span: {
      color: vars.primary.neutral,
      fontSize: '1em',
      margin: '0',
    },
  },
})

export const propTypes = {
  Header: [
    { key: 'logo', type: 'string' },
    { key: 'logotext', type: 'string' },
    { key: 'menu', type: 'array' },
  ],
}
