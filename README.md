<p align="center">
	<a href="https://skeletonic.io">
		<img src="https://github.com/reedia/skeletonic/raw/master/images/skeletonic.png" alt="Skeletonic Logo"  />
	</a>  
</p>

<h3 align="center">Skeletonic</h3>

<p align="center">Meet the sleek, lightweight, intuitive and ultra-responsive CSS framework.<br />Designed to fit your web life.</p>

[![Build Status](https://travis-ci.org/reedia/skeletonic.svg?branch=master)](https://travis-ci.org/reedia/skeletonic)
[![Packagist](https://img.shields.io/badge/license-MIT-blue.svg)](https://kbrsh.github.io/license)

## Table of contents

- [Quick start](#quick-start)
- [Status](#status)
- [What's included](#whats-included)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [Community](#community)
- [Versioning](#versioning)
- [Creators](#creators)
- [Copyright and license](#copyright-and-license)

## Quick start

Several quick start options are available:

- [Download the latest release.](https://github.com/twbs/bootstrap/archive/v4.0.0-beta.2.zip)
- Clone the repo: `git clone https://github.com/twbs/bootstrap.git`
- Install with [npm](https://www.npmjs.com/): `npm install bootstrap@4.0.0-beta.2`
- Install with [yarn](https://yarnpkg.com/): `yarn add bootstrap@4.0.0-beta.2`
- Install with [Composer](https://getcomposer.org/): `composer require twbs/bootstrap:4.0.0-beta.2`
- Install with [NuGet](https://www.nuget.org/): CSS: `Install-Package bootstrap -Pre` Sass: `Install-Package bootstrap.sass -Pre` (`-Pre` is only required until Bootstrap v4 has a stable release).

Read the [Getting started page](https://getbootstrap.com/getting-started/) for information on the framework contents, templates and examples, and more.

## What's in the box

Everything you need to create a basic project is included, all in a **2kb** file (minified + gzipped). On top of that, almost everything is styled automatically, without the need for learning specific classes. This allows for an intuitive experience developing with Wing, as it's designed to be a boilerplate stylesheet for any project.

## Requirements

**npm**

```sh
$ npm install --save skeletonic
```

**Link to It**

```html
<link rel="stylesheet" href="https://unpkg.com/skeletonic"/>
```

## [Documentation](https://skeletonic.io/)

## Find a bug?

Submit it in the [issues](https://github.com/reedia/skeletonic/issues)

## License

Licensed under the [MIT License](http://kbrsh.github.io/license) by [Kabir Shah](http://kabir.ml)

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
bootstrap/
├── css/
│   ├── bootstrap.css
│   ├── bootstrap.css.map
│   ├── bootstrap.min.css
│   ├── bootstrap.min.css.map
│   ├── bootstrap-grid.css
│   ├── bootstrap-grid.css.map
│   ├── bootstrap-grid.min.css
│   ├── bootstrap-grid.min.css.map
│   ├── bootstrap-reboot.css
│   ├── bootstrap-reboot.css.map
│   ├── bootstrap-reboot.min.css
│   └── bootstrap-reboot.min.css.map
└── js/
├── bootstrap.bundle.js
├── bootstrap.bundle.min.js
├── bootstrap.js
└── bootstrap.min.js
```

We provide compiled CSS and JS (`bootstrap.*`), as well as compiled and minified CSS and JS (`bootstrap.min.*`). CSS [source maps](https://developers.google.com/web/tools/chrome-devtools/debug/readability/source-maps) (`bootstrap.*.map`) are available for use with certain browsers' developer tools. Bundled JS files (`bootstrap.bundle.js` and minified `bootstrap.bundle.min.js`) include [Popper](https://popper.js.org/), but not [jQuery](https://jquery.com/).


## Bugs and feature requests

Have a bug or a feature request? Please first read the [issue guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md#using-the-issue-tracker) and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/twbs/bootstrap/issues/new).


## Documentation

Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](https://jekyllrb.com/) and publicly hosted on GitHub Pages at <https://getbootstrap.com/>. The docs may also be run locally.

Documentation search is powered by [Algolia's DocSearch](https://community.algolia.com/docsearch/). Working on our search? Be sure to set `debug: true` in the `_scripts.html` include.

### Running documentation locally

1. Run through the [tooling setup](https://getbootstrap.com/docs/4.0/getting-started/build-tools/#tooling-setup) to install Jekyll (the site builder) and other Ruby dependencies with `bundle install`.
2. Run `npm install` to install Node.js dependencies.
3. Run `npm run test` (or a specific NPM script) to rebuild distributed CSS and JavaScript files, as well as our docs assets.
4. From the root `/bootstrap` directory, run `npm run docs-serve` in the command line.
5. Open `http://localhost:9001` in your browser, and voilà.

Learn more about using Jekyll by reading its [documentation](https://jekyllrb.com/docs/home/).

### Documentation for previous releases

- For v2.3.2: <https://getbootstrap.com/2.3.2/>
- For v3.3.x: <https://getbootstrap.com/docs/3.3/>

[Previous releases](https://github.com/twbs/bootstrap/releases) and their documentation are also available for download.


## Contributing

Please read through our [contributing guidelines](https://github.com/twbs/bootstrap/blob/master/CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

Moreover, if your pull request contains JavaScript patches or features, you must include [relevant unit tests](https://github.com/twbs/bootstrap/tree/master/js/tests). All HTML and CSS should conform to the [Code Guide](https://github.com/mdo/code-guide), maintained by [Mark Otto](https://github.com/mdo).

Editor preferences are available in the [editor config](https://github.com/twbs/bootstrap/blob/master/.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org/>.


## Community

Get updates on Bootstrap's development and chat with the project maintainers and community members.

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog](https://blog.getbootstrap.com/).
- Join [the official Slack room](https://bootstrap-slack.herokuapp.com/).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, Bootstrap is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

See [the Releases section of our GitHub project](https://github.com/twbs/bootstrap/releases) for changelogs for each release version of Bootstrap. Release announcement posts on [the official Bootstrap blog](https://blog.getbootstrap.com/) contain summaries of the most noteworthy changes made in each release.


## Creators

**Mark Otto**

- <https://twitter.com/mdo>
- <https://github.com/mdo>

**Jacob Thornton**

- <https://twitter.com/fat>
- <https://github.com/fat>


## Copyright and license

Code and documentation copyright 2011-2017 the [Bootstrap Authors](https://github.com/twbs/bootstrap/graphs/contributors) and [Twitter, Inc.](https://twitter.com) Code released under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).
