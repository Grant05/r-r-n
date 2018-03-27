import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import history from '../history'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

// Root Reducer
import rootReducer from 'Reducers'

// Root Saga
// import rootSaga from 'Sagas'

const composeEnhancers = composeWithDevTools({})
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware, routerMiddleware(history)]

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
)

// sagaMiddleware.run(rootSaga)

export default store
