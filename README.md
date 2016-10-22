# node-travis-v3
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

> This is an example using Travis CI for continuous integration and Istanbul/Coveralls for code coverage. 

## Getting Started

Install dependencies:

```sh
$ npm install
```

Run tests:

```sh
$ npm coveralls
```

## Stack

* Node v6.5.0
* Mocha v3.0.2
* Chai v3.5.0
* Istanbul v0.4.5
* Coveralls v2.11.12

## Working with Webpack

Using the `html-webpack-plugin` 

Install the dependency: 

```sh
npm i --save-dev html-webpack-plugin
```

Require the plugin in your `webpack.config.js`: 

```sh
var HtmlWebpackPlugin = require('html-webpack-plugin');
```

Add an entry to the plugins array where I instantiate the plugin with two properties: 

* `template` defines the template the plugin will use to generate the HTML
* `inject`: `body` tells the plugin to inject Javascript into the bottom of the page, just before the closing `<body>` tag, instead of the `<head>` tag

```sh
plugins: [
  ...
  new HtmlWebpackPlugin({
    template: 'index.template.ejs',
    inject: 'body',
  })
],
```

## Working with Enzyme

> Enzyme is a Javascript Testing Utility for React to make it easier to assert, manipulate, and traverse your React Component's output. It mimicks jQuery's API for DOM  manipulation and traversal. Install the dependencies below for compatibility with `React 0.14.x` or `React 15.x`: 

```sh
npm i --save-dev enzyme react-addons-test-utils
npm i --save react-dom
```

##Credits

* [Javascript Playground - Html Webpack Plugin](http://javascriptplayground.com/blog/2016/07/webpack-html-plugin/) 
* [Airbnb - Enzyme](http://airbnb.io/enzyme/) 

## License
MIT © [AJ Grande](https://github.com/ajgrande924)