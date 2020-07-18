## @magic-themes/project

foundational [@magic-theme](https://magic-themes.github.io/) for project presentation.

pages this theme is used on:
[@magic](https://magic.github.io)
[@grundstein](https://grundstein.github.io)
[@webboot](https://webboot.org)

[![NPM version][npm-image]][npm-url]
[![Linux Build Status][travis-image]][travis-url]
[![Windows Build Status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Greenkeeper badge][greenkeeper-image]][greenkeeper-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

[npm-image]: https://img.shields.io/npm/v/@magic-themes/project.svg
[npm-url]: https://www.npmjs.com/package/@magic-themes/project
[travis-image]: https://img.shields.io/travis/com/magic-themes/project/master
[travis-url]: https://travis-ci.com/magic-themes/project
[appveyor-image]: https://img.shields.io/appveyor/ci/magicthemes/project/master.svg
[appveyor-url]: https://ci.appveyor.com/project/magicthemes/project/branch/master
[coveralls-image]: https://coveralls.io/repos/github/magic-themes/project/badge.svg
[coveralls-url]: https://coveralls.io/github/magic-themes/project
[greenkeeper-image]: https://badges.greenkeeper.io/magic-themes/project.svg
[greenkeeper-url]: https://badges.greenkeeper.io/magic-themes/project.svg
[snyk-image]: https://snyk.io/test/github/magic-themes/project/badge.svg
[snyk-url]: https://snyk.io/test/github/magic-themes/project

#### install:
```bash
npm install --save --save-exact @magic-themes/project
```

#### usage:

##### import:
```javascript
// config.mjs:

export default {
  //... other config
  THEME: '@magic-themes/project',

  // multiple themes
  // THEME: [...other themes, '@magic-themes/project'],
}
```

@magic will then import and use the theme automagically.

##### overwrite
you can overwrite any style in this theme with your own.

create /assets/themes/project/index.mjs, any css there will overwrite the theme css

#### changelog

##### 0.0.1
first release

##### 0.0.2
add color to .active Links in Menus

##### 0.0.3
* Header correctly propagates state.root downwards to MenuItem
* theme exports a default state object now

##### 0.0.4
* Logo: Update @magic logo
* Hero: logo is bigger
* use markdown for example page

##### 0.0.5
Footer: use Credits module from @magic/core

##### 0.0.6
* fix: remove logotext from header
* link color: better visibility for links
* Footer: only show menu containers if menu exists.

##### 0.0.7
* Footer: change link colors to be readable.
* updates for markdown state handling.

##### 0.0.8
* no errors if theme vars are not set, defaults instead
* Hero: floating fixed
* Header/Menu: top menu margin adjusted to font-size

##### 0.0.9
Fix: Header now uses vars.maxWidth, as Footer, Hero and Page do.

##### 0.0.10
add additional org links to footer

##### 0.0.11
rename org menu in footer to projects, link to grundstein and webboot.

##### 0.0.12
make sure that h1 and p in LogoWrapper never float next to each other.

##### 0.0.13
Fix: Hero layout on mobile is broken in <0.0.12

##### 0.0.14
bump required node version to 14.2.0

##### 0.0.15
update Logo

##### 0.0.16 
* update Logo
* format modules

##### 0.0.17
update logo

##### 0.0.18
move @magic-modules/no-spy to devDependencies

##### 0.0.19
reduce Header and Logo bundle sizes

##### 0.0.20 
update icon positions

##### 0.0.21 - unreleased
...
