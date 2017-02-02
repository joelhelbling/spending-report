import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reports from './reports'

const rootReducer = combineReducers({ reports, routing: routerReducer })

export default rootReducer;
