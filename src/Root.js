import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import configureStore from './configureStore'
import App from './components/App'

const history = createHistory()
const store = configureStore(history)


const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={App}/>
      </Switch>
    </ConnectedRouter>
  </Provider>
)

export default Root
