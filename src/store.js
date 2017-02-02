import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index'

const defaultState = {
  reports: {
    foo: {
      title: 'Four Winds Eclectic',
      created_at: Date.now(),
      updated_at: Date.now(),
      status: 'open',
      comment: 'A report',
    },
    bar: {
      title: 'Wonderful putty --try it!',
      created_at: Date.now(),
      updated_at: Date.now(),
      status: 'closed',
      comment: 'A bicycle and a truck went on a date.'
    }
  }
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store = createStore(rootReducer, defaultState, enhancers)

export const history = syncHistoryWithStore(browserHistory, store)

if(module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store;
