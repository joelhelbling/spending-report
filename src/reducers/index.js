import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reports from './reports'
import lineItems from './lineItems'

const rootReducer = combineReducers({ reports, lineItems, routing: routerReducer })

export default rootReducer;
