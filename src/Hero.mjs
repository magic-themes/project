export const View = ({ state }) => {
  const { hero } = state

  const title = Array.isArray(hero.title) ? hero.title : [hero.title]

  let { content } = hero
  if (content && !Array.isArray(content)) {
    content = [content]
  }

  return div({ id: 'hero', class: 'Hero' }, [
    div({ class: 'LogoWrapper' }, [
      Logo(state),
      hero.title && h1([span(title[0]), title[1]]),
      hero.description && p(hero.description),
    ]),

    content &&
      div(
        { class: 'content' },
        content.map(a => p(a)),
      ),

    hero.menu &&
      Menu({
        items: hero.menu,
        state,
      }),
  ])
}

export const style = vars => ({
  backgroundColor: vars.text && vars.text.dark || '#c4c4c4',
  display: 'inline-block',
  margin: '5vh auto',
  position: 'relative',
  maxWidth: 'inherit',
  width: '100%',

  '.content': {
    clear: 'both',
    minWidth: '250px',
    margin: '0 auto',
    maxWidth: '600px',
    padding: '1.5em 0 0',
    textAlign: 'center',

    p: {
      float: 'none',
    }
  },

  '.LogoWrapper': {
    margin: '0 auto',
    position: 'relative',
    minWidth: '250px',
    maxWidth: '600px',

    '.Logo': {
      float: 'left',
      width: '100%',
      height: 'auto',

      svg: {
        width: '100%',
        margin: '0 auto',
        display: 'block',
        float: 'none',
        height: 'auto',
        borderRadius: 0,
      },
    },

    h1: {
      color: vars.neutral || '#5a5a5a',
      float: 'left',
      fontSize: '2em',
      padding: '0',

      span: {
        color: vars.primary && vars.primary.neutral || '#rebeccapurple',
      },
    },
  },

  '.Menu': {
    float: 'none',
    textAlign: 'center',
    padding: '3em 0 0',
    width: '100%',
    clear: 'both',

    ul: {
      width: 'auto',
    },

    a: {
      color: vars.primary && vars.primary.neutral || '#rebeccapurple',

      '&:hover': {
        color: vars.primary && vars.primary.dark || '#412162',
      },
    },
  },

  p: {
    color: vars.neutral || '#c4c4c4',
    float: 'left',
    fontSize: '1.1em',
  },

  [`@media screen and (min-width: ${vars.widths && vars.widths.tablet || '500px'})`]: {
    '.LogoWrapper': {
      '.Logo': {
        float: 'left',
        width: '40%',
        margin: '0 1em 0 0',
      },
    },
  },

  [`@media screen and (min-width: ${vars.widths && vars.widths.laptop || '1024px'})`]: {
    '.LogoWrapper': {
      '.Logo': {
        width: '50%',
      },
    },
  },
})
