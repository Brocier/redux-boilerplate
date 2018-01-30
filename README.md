# Brocier's adaptation of a Redux Boilerplate

start off with create-react-app

Then you must
npm i axios history react react-dom react-redux react-scripts redux redux-devtools-extension redux-logger redux-thunk react-router-redux@next

As of January 2018 you have to make sure the `react-router-redux` shows up in package.json with `^5.0.0-alpha.9` version or later.

After that installation you'll need to go through file by file and copy out the pieces you need.

I've included a setup for full CRUD to an express route in thunk.actions.js

I've kept the example actions from Jamie's original Redux Boilerplate, but it is not showing on the SplashPage.js component.