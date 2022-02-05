import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import jobdetailsreducer from './jobdetails/jobdetailsreducer'

const store = createStore (
    jobdetailsreducer,
    composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store