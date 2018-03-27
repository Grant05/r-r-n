/* eslint react/prefer-stateless-function: 0 */
import React from 'react'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'

// Components
import App from './App'

const AppRouter = () => (
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
)

export default AppRouter
