![alt text][logo]

[logo]: ./images/skeletonic-banner.min.svg "Skeletonic Banner"

# Introducing [Skeletonic CSS](https://skeletonic.io)

**[Skeletonic CSS](https://github.com/sebastienrousseau/skeletonic)** - A lightweight, intuitive, accessible and ultra-responsive cascading style sheets framework to streamline your Digital and Mobile Web development needs.

[Download Skeletonic CSS v1.2.1](https://github.com/sebastienrousseau/skeletonic/archive/v1.2.1.zip)

[![NPM](https://nodei.co/npm/skeletonic.png)](https://nodei.co/npm/skeletonic/)

[![npm version](https://badge.fury.io/js/skeletonic.svg)](https://badge.fury.io/js/skeletonic)
[![Build Status](https://travis-ci.org/sebastienrousseau/skeletonic.svg?branch=master)](https://travis-ci.org/sebastienrousseau/skeletonic)
[![Packagist](https://img.shields.io/badge/license-MIT-blue.svg)](https://skeletonic.github.io/license)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Freedia%2Fskeletonic.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Freedia%2Fskeletonic?ref=badge_shield)

## Table of contents

- [Introducing Skeletonic CSS](#introducing-skeletonic-css)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Local Setup](#local-setup)
  - [What's included](#whats-included)
  - [Extend](#extend)
      - [CSS Responsive Grid-View](#css-responsive-grid-view)
      - [CSS Colours](#css-colours)
      - [CSS Animations](#css-animations)
  - [Alternate CDN locations](#alternate-cdn-locations)
  - [Versioning](#versioning)
  - [Built With](#built-with)
  - [Contributing](#contributing)
  - [Code of Conduct](#code-of-conduct)
  - [Our Values](#our-values)
  - [History](#history)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## Getting Started

Skeletonic is constantly in development. Try it out now!
### Local Setup

Several quick start options are available:

-   [Download the latest release](https://github.com/sebastienrousseau/skeletonic/archive/v1.2.1.zip)
-   Install with [Npm](https://www.npmjs.com/package/skeletonic) to get the pre-built CSS and sourcemaps. This is recommended when using Skeletonic for a typical web project: ```npm install skeletonic```
-   Install with [Yarn](https://yarnpkg.com/en/package/skeletonic) to get the pre-built CSS and sourcemaps. This is recommended when using Skeletonic for a typical web project: ```yarn add skeletonic```
-   Clone the main repository to get all source files including build scripts: `git clone https://github.com/sebastienrousseau/skeletonic.git`

## What's included

Within the download you'll find all the source files, compiled and minified CSS bundles as well as the [CSS sourcemaps](https://developers.google.com/web/tools/chrome-devtools/javascript/source-maps) grouped into the ```dist``` folder. 

You'll see something like this:

```
skeletonic-1.2.1
├── skeletonic-animations.css
├── skeletonic-animations.css.map
├── skeletonic-animations.min.css
├── skeletonic-colours.css
├── skeletonic-colours.css.map
├── skeletonic-colours.min.css
├── skeletonic-fonts.css
├── skeletonic-fonts.css.map
├── skeletonic-fonts.min.css
├── skeletonic-pattern.css
├── skeletonic-pattern.css.map
├── skeletonic-pattern.min.css
├── skeletonic.css
├── skeletonic.css.map
└── skeletonic.min.css
```
Now simply link one of these CSS in your HTML document. In that case, the quickest and easiest way to start using skeletonic is to include a reference to the minified CSS file.

```<link rel="stylesheet" type="text/css" href="skeletonic.min.css" />```

The link consists of just a simple line of HTML code that you will need to put in the ```<head>```  section of your HTML document.

We also provide production-ready versions and use **[unpkg](https://unpkg.com/)** as our preferred CDN to link to the latest production version. **[unpkg](https://unpkg.com/)** is a fast, global content delivery network for everything on npm.  

Please feel free to grab the latest:

```<link rel="stylesheet" type="text/css" href="https://unpkg.com/skeletonic/dist/skeletonic.min.css" />```

You can also specify a specific version as per below. The latest version as of today is 1.2.1.

```<link rel="stylesheet" type="text/css" href="https://unpkg.com/skeletonic@1.2.1/dist/skeletonic.min.css" />```

## Extend

We provide a growing library of extensible CSS module files, utilities, themes and components ready to use as is to fit your web needs.
#### CSS Responsive Grid-View
```<link rel="stylesheet" type="text/css" href="skeletonic-pattern.min.css" />```

#### CSS Colours
```<link rel="stylesheet" type="text/css" href="skeletonic-colours.min.css" />```

#### CSS Animations
```<link rel="stylesheet" type="text/css" href="skeletonic-animations.min.css" />```

## Alternate CDN locations
The following table lists alternate CDN locations where Skeletonic is hosted.

| CDN | URL | HTTPS | Combo |
|---|---|---|---|
| [unpkg](https://unpkg.com/) | https://unpkg.com/skeletonic@1.2.1/dist/skeletonic.min.css | Yes | No |
| [jsDelivr](https://www.jsdelivr.com/) | https://cdn.jsdelivr.net/npm/skeletonic/dist/skeletonic.min.css  | Yes | Yes |

## Versioning
For transparency into our release cycle and in striving to maintain backward compatibility, Skeletonic is maintained under the [Semantic Versioning](https://semver.org/) guidelines. 

## Built With
-   [Gulp](https://gulpjs.com/) - The streaming build system
-   [Stylus](http://stylus-lang.com/) - Expressive, robust, feature-rich CSS language built for nodejs
-   [CSScomb](http://csscomb.com/) - CSS coding style formatter

## Contributing

Please read carefully through our [Contributing Guidelines](https://github.com/sebastienrousseau/skeletonic/blob/master/CONTRIBUTING.md) for further details on the process for submitting pull requests to us.

## Code of Conduct
We are committed to preserving and fostering a diverse, welcoming community. Please read our [Code of Conduct](https://github.com/sebastienrousseau/skeletonic/blob/master/CODE_OF_CONDUCT.md).

## Our Values
1.  We believe perfection must consider everything.
2.  We take our passion beyond Code into our daily practices.
3.  We are just obsessed about creating and delivering exceptional solutions.

## History

*   See [Skeletonic Release](https://github.com/sebastienrousseau/skeletonic/releases) list.


## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/sebastienrousseau/skeletonic/blob/master/LICENSE) file for details


[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Freedia%2Fskeletonic.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Freedia%2Fskeletonic?ref=badge_large)

## Acknowledgements

[Skeletonic](https://skeletonic.io) is beautifully crafted by these people and a bunch of awesome [contributors](https://github.com/sebastienrousseau/skeletonic/graphs/contributors)

[![Sebastien Rousseau](https://avatars0.githubusercontent.com/u/1394998?s=117)](https://sebastienrousseau.co.uk) |
|:---:
[Sebastien Rousseau](https://github.com/sebastienrousseau) |

Credit also goes to the following source code libraries:
-   [Normalize.css](http://necolas.github.io/normalize.css/) - A modern, HTML5-ready alternative to CSS resets to fix cross-browser compatibility issues.
-   [Skeleton](http://www.getskeleton.com) - A Dead Simple, Responsive Boilerplate
-   [Wing](https://kbrsh.github.io/wing/) - A beautiful CSS framework designed for minimalists.
