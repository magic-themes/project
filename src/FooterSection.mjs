export const View = props => {
  const { title, before, menu, after, url, ...attr } = props

  if (!attr.class) {
    attr.class = 'FooterSection'
  } else if (!attr.class.includes('FooterSection')) {
    attr.class = `FooterSection ${attr.class}`.trim()
  }

  return div(attr, [
    title && h2(title),
    before && before.map(a => p(a)),
    menu && Menu({ menu, url }),
    after && after.map(a => p(a)),
  ])
}

export const style = vars => ({
  textAlign: 'left',

  '.Menu': {
    float: 'none',

    ul: {
      li: {
        margin: '0 0 0.5em',
        float: 'none',
      },
    },
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    float: 'left',
    width: '30%',
    margin: '0 3% 0 0',
  },
})
