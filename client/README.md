# Josh's adaptation of a Redux - Express Boilerplate

Hopefully this will help you as you need it. Please let me know if there's anything you found that I missed.

`create-react-app client && cd "$_"`

`npm i axios history react react-dom react-redux react-scripts redux redux-devtools-extension redux-logger redux-thunk react-router-redux@next`

`cd src`

`rm logo.svg index.css App.css App.js index.js`

`touch index.js`

```md
echo "
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root/>, document.getElementById('root'));
registerServiceWorker();
" >> index.js
```

`touch Root.js`

```md
echo "
import React from 'react'
import {Provider} from 'react-redux'
import {Route} from 'react-router'
import {ConnectedRouter} from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import SplashPage from './components/SplashPage.js'
import UserPage from './components/UserPage.js'

const history = createHistory()
const store = configureStore(history)
console.log(store)
const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact path='/' component={SplashPage}/>
        <Route exact path='/users' component={UserPage}/>
      </div>
    </ConnectedRouter>
  </Provider>
)
export default Root
" >> Root.js
```

`touch configureStore.js`

```md
echo "
import {createStore, applyMiddleware} from 'redux'
import {routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './reducers' // Or wherever you keep your reducers

export default function configureStore(history) {
  // Apply navigation middleware

  const routerHistory = routerMiddleware(history)
  // Middleware for logging redux action to console

  const logger = createLogger({collapsed: true})

  const store = createStore(reducer, composeWithDevTools(applyMiddleware(...[thunk, routerHistory, logger])))

return store
}" >> configureStore.js
```

`mkdir components reducers actions tests`

`mv App.test.js tests`

That last segment inserts the standard boilerplate store configuration. I haven't had to change it yet.

As of January 2018 you have to make sure the `react-router-redux` shows up in package.json with `^5.0.0-alpha.9` version or later.

Then you'll need to go through file by file and copy out the pieces you need.

I've included a setup for full CRUD to an API route in thunk.actions.js

The CRUD routes won't work because I don't have the other half of the API's included in here, but I did include the userController.js that those routes are referring to, so you can see exactly what I was talking about.

I've kept the example actions from Jamie's original Redux Boilerplate, but it is now showing on the SplashPage.js component.

When I make my ruby redux boilerplate I'll need these things:

>touch Procfile.dev
>
>echo "web: sh -c 'cd client && PORT=3000 npm start'
>
>api: rails s -p 4000" >> Procfile.dev
>
>touch Procfile
>
>echo "web rails s" >> Procfile
>
> start with `foreman start -f Procfile.dev`

`"proxy": "http://localhost:4000",` >> client/package.json
