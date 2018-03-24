import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer warnings={false}>
    <App />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    ReactDOM.render(
      <AppContainer warnings={false}>
        <NextApp />
      </AppContainer>
    )
  })
}
