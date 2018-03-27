import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

// CSS
import './Assets/Stylesheets/Main.scss'

// Router
import AppRouter from './Router'

// Store
import store from 'Config/Store'

const rootEl = document.getElementById('root')

ReactDOM.render(
  <AppContainer warnings={false}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./Router', () => {
    const NextApp = require('./Router').default

    ReactDOM.render(
      <AppContainer warnings={false}>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>
    )
  })
}
