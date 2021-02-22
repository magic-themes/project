export const View = (props, children) => {
  const { footer: foot = {}, url } = props
  const { one, two, three } = foot

  return footer({ class: 'Footer' }, [
    div({ class: 'Container' }, [
      (one || two || three) &&
      div({ class: 'Menus' }, [
        one && FooterSection({ class: 'Info', ...one, url }),
        two && FooterSection({ ...two, url }),
        three && FooterSection({ ...three, url }),
      ]),

      Credits(),
      children,
    ]),
  ])
}

export const style = vars => ({
  backgroundColor: vars.primary.neutral,
  color: vars.text.dark,
  display: 'inline-block',
  margin: '5% 0 0',
  padding: 0,
  width: '100%',

  h2: {
    margin: 0,
    color: vars.background.dark,
  },

  a: {
    color: vars.text.dark,
    textDecoration: 'underline',

    '&:hover': {
      color: vars.background.dark,
    },
  },

  '.Container': {
    margin: '0 auto',
    maxWidth: vars.maxWidth,
    textAlign: 'left',
    padding: '0 5%',
  },

  '.Menus': {
    display: 'inline-block',
    width: '100%',
    textAlign: 'center',
  },

  [`@media screen and (min-width: ${vars.widths.tablet})`]: {
    fontSize: '0.9em',
  },
})
