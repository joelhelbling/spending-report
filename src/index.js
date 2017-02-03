import React from 'react'
import { render } from 'react-dom'

import './css/styles.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

import App from './components/App'
import Login from './components/Login'
import Report from './components/Report'
import Reports from './components/Reports'

import { Router, Route, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Login}></IndexRoute>
        <Route path="/reports" component={Reports}></Route>
        <Route path="/reports/:reportId" component={Report}></Route>
      </Route>
    </Router>
  </Provider>
)

render(
  router,
  document.getElementById('root')
);
