import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import buttonReduxReducer from './components/button_redux/reducer'
import initReactFastclick from 'react-fastclick'
import createApiRequest from 'redux-api-request'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { hot } from 'react-hot-loader'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import React from 'react'

import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Page3 from './pages/page3'
import NotFound from './pages/not_found'

initReactFastclick()

class App extends React.Component {

  static propTypes = {
    reducers: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.store = this._getStore()
  }

  render() {
    return (
      <Provider store={ this.store }>
        <Router>
          <Switch>
            <Route exact path="/" component={ Page1 } />
            <Route path="/page1" component={ Page1 } />
            <Route path="/page2" component={ Page2 } />
            <Route path="/page3" component={ Page3 } />
            <Route component={ NotFound } />
          </Switch>
        </Router>
      </Provider>
    )
  }

  _getStore() {

    const reducers = combineReducers({
      button: buttonReduxReducer
    })

    const loggerMiddleware = createLogger({ collapsed: true })

    const apiRequestMiddleware = createApiRequest()

    const middleware = [
      thunkMiddleware,
      apiRequestMiddleware,
      loggerMiddleware
    ]

    const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)

    return createStoreWithMiddleware(reducers)

  }

}

export default hot(module)(App)
