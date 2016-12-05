AWS.Request Class on the JavaScript SDK
===

The AWS JavaScript SDK is a fantastic tool to leverage the power of the AWS services. All the features provided by the cloud giant are accesible through it. And now, after version 2.6.1 it supports webpack, which makes creating bundles of it a breeze. With webpack, we can only include the bits and pieces we need for our application. Want to add a way to upload files to S3? Ineract directly with DynamoDB? Push notification to other clients through SNS? Just add the client you need and start coding. Webpack will trim away all the unnecessary code, leaving our bundle JavaScript as slim as possible.

The best source to undestand the capabilities of the SDK is through it main [documentation site](http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html). All the information for all AWS serices are listed on it. As the documentation states:

> All requests made through the SDK are asynchronous and use a callback interface. 

So we need a way to handle this asynchronous behaviour of the SDK. That is why AWS provides us with the AWS.Request class.

> Each service method that kicks off a request returns an AWS.Request object that you can use to register callbacks.

This class offers a lot of ways to handle the responses from each AWS services. So we can use the one which makes more sense for us or the project.

In this article, I want to explore through some examples the different ways the AWS.Request class can help us command AWS services. First we'll setup a simple project using `hjs-webpack` to simplify the creation of webpack's configuration file. We'll then import the AWS SDK and configure it with our credentials. After that is done, we'll create a simple html page from where we'll interact with some AWS services. If you want to follow along you can clone each step from the [project repo](https://github.com/guzmonne/aws-request-class).

Setup
---

