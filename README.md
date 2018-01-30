# Josh's adaptation of a Redux Boilerplate

Hopefully this will help you as you need it. Please let me know if there's anything you found that I missed.

Start off with create-react-app

Then you must:

`npm i axios history react react-dom react-redux react-scripts redux redux-devtools-extension redux-logger redux-thunk react-router-redux@next`

As of January 2018 you have to make sure the `react-router-redux` shows up in package.json with `^5.0.0-alpha.9` version or later.

After that installation you'll need to go through file by file and copy out the pieces you need.

I've included a setup for full CRUD to an express route in thunk.actions.js

The CRUD routes won't work because I don't have the other half of the API's included in here, but I did include the userController.js that those routes are referring to, so you can see exactly what I was talking about.

I've kept the example actions from Jamie's original Redux Boilerplate, but it is now showing on the SplashPage.js component.