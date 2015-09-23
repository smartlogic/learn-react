# Learn React

Fork this project and you'll have a starting point to play around with React. Go ahead, try building Tic-Tac-Toe!

## Pre-requisites

* `brew install node`
* `npm install -g gulp`

## Getting started

* `git clone git@github.com:smartlogic/learn-react.git`
* `cd learn-react`
* `npm install`
* `gulp build` or `gulp dev` to re-build whenever you save a file
* `open public/index.html`

## Getting around

The code is compiled using [browserify](http://browserify.org/), starting with the `browser.js` entrypoint file. Any file referenced by that file will be included in the `public/app.js` bundle. I have enabled source maps, so you should be able to set breakpoints in your Browser.

If you are building something sophisticated, you should manage your environment variables with [dotenv](https://github.com/motdotla/dotenv). I am using it here for the `NODE_ENV` environment variable. Changing `NODE_ENV` to `production` will improve the performance of React components by turning off debugging information.

The code is compiled with [Babel](https://babeljs.io/), so you can use [ES2015](https://babeljs.io/docs/learn-es2015/) features. If you don't want this, you can always remove the `babelify` transform from `gulpfile.js`.

Yes, I included the boilerplate necessary for [Flow](http://flowtype.org/), but it's optional. `brew install flow` if you want to explore that, too.
