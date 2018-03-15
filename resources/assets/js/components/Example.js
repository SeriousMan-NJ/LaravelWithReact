import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import '@progress/kendo-theme-default/dist/all.css' // Kendo default theme

import rootReducer from '../reducers'
import App from './App'
import PostList from '../scenes/PostList'

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Switch>
          <Route exact path='/post' component={PostList} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('example')
)
