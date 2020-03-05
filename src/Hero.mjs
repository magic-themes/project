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
  maxWidth: 'inherit',
  position: 'relative',
  width: '100%',

  '.content': {
    clear: 'both',
    margin: '0 auto',
    maxWidth: '600px',
    minWidth: '250px',
    padding: '1.5em 0 0',
    textAlign: 'center',

    p: {
      float: 'none',
    }
  },

  '.LogoWrapper': {
    minWidth: '250px',
    margin: '0 auto',
    maxWidth: '600px',
    position: 'relative',

    '.Logo': {
      float: 'left',
      height: 'auto',
      width: '100%',

      svg: {
        borderRadius: 0,
        display: 'block',
        float: 'none',
        height: 'auto',
        margin: '0 auto',
        width: '100%',
      },
    },

    h1: {
      color: vars.neutral || '#5a5a5a',
      fontSize: '2em',
      padding: '0',
      textAlign: 'center',

      span: {
        color: vars.primary && vars.primary.neutral || '#rebeccapurple',
      },
    },

    p: {
      textAlign: 'center',
    },
  },

  p: {
    color: vars.neutral || '#c4c4c4',
  },

  '.Menu': {
    clear: 'both',
    float: 'none',
    padding: '3em 0 0',
    textAlign: 'center',
    width: '100%',

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

  [`@media screen and (min-width: ${vars.widths && vars.widths.tablet || '500px'})`]: {
    '.LogoWrapper': {
      '.Logo': {
        float: 'left',
        margin: '0 3% 0 0',
        width: '40%',
      },

      'h1, p': {
        float: 'left',
        width: '56%',
        textAlign: 'left',
      },
    },
  },

  [`@media screen and (min-width: ${vars.widths && vars.widths.laptop || '1024px'})`]: {
    '.LogoWrapper': {
      '.Logo': {
        width: '50%',
      },

      'h1, p': {
        width: '46%',
      },
    },
  },
})
