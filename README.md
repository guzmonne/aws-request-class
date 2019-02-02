AWS.Request Class on the JavaScript SDK
===

[![Greenkeeper badge](https://badges.greenkeeper.io/guzmonne/aws-request-class.svg)](https://greenkeeper.io/)

The AWS JavaScript SDK is a fantastic tool to leverage the power of the AWS services. All the features provided by the cloud giant are accesible through it. And now, after version 2.6.1 it supports webpack, which makes creating bundles of it a breeze. With webpack, we can only include the bits and pieces we need for our application. Want to add a way to upload files to S3? Ineract directly with DynamoDB? Push notification to other clients through SNS? Just add the client you need and start coding. Webpack will trim away all the unnecessary code, leaving our bundle JavaScript as slim as possible.

The best source to undestand the capabilities of the SDK is through it main [documentation site](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html). All the information for all AWS serices are listed on it. As the documentation states:

> All requests made through the SDK are asynchronous and use a callback interface. 

So we need a way to handle this asynchronous behaviour of the SDK. That is why AWS provides us with the AWS.Request class.

> Each service method that kicks off a request returns an AWS.Request object that you can use to register callbacks.

This class offers a lot of ways to handle the responses from each AWS services. So we can use the one which makes more sense for us or the project.

In this article, I want to explore through some examples the different ways the AWS.Request class can help us command AWS services. First we'll setup a simple project using `hjs-webpack` to simplify the creation of webpack's configuration file. We'll then import the AWS SDK and configure it with our credentials. After that is done, we'll create a simple html page from where we'll interact with some AWS services. If you want to follow along you can clone each step from the [project repo](https://github.com/guzmonne/aws-request-class).

Setup
---

Let's init a new `npm` project to keep track of all our dependencies. We'll also use `npm` scripts to run and build our app.

```
npm init
```

As I mentioned on the introduction, we'll be using `hjs-webpack` to simplify webpack's configuration. This package was created by Henrik Joreteg as an opinionated way to build apps with webpack. I sugges you [give it a try](https://github.com/HenrikJoreteg/hjs-webpack) if you don't know it. It is not needed to work with the AWS SDK, you can just use webpack as you normally do if you want.

So, let's install through npm the `hjs-webpack` module and some other necessary dependencies.

```
npm install --save-dev hjs-webpack css-loader postcss-loader style-loader autoprefixer babel-core babel-loader json-loader webpack-visualizer-plugin babel-preset-es2015 webpack react react-dom
```

You may have realized that I also included React as a dependecy. This is to handle the visual aspect of the page. Since this is not meant to be a React article I'll try to present the code necessary to run the app and explain what we are doing to set it up without being to dense. If you have any question just ask, or check the [React docs](https://facebook.github.io/react/docs/installation.html).

Let's configure babel to use `es2015` and `react` presets and to handle [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html). Create a file on your project's root called `.babelrc` and include the following code:

```
{
  "presets": ["es2015", "react"],
  "env": {
    "development": {
      "presets": ["react-hmre"]
    }
  }
}
```

We are ready to build our webpack configuration using `hjs-webpack`. Let's create a file called `webpack.config.js` and add the following configuration:

// TODO: Insert webpack.config.js configuration gist URL

To run our dev server and build our project we'll add a couple of entries to the scripts section of our `package.json` config.

```
{
  ...
  "scripts": {
    ...
   "start": "hjs-dev-server",
   "build": "webpack"    
  }
  ...
}
```  

We also have to create the `src/index.js` and `src/app.js` files to have something to render on the page. Add these files to the a new `src` folder:

// TODO: Add gist for app.js and index.js files.

