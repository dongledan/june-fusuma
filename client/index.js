import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'

// establishes socket connection
import './socket'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontFamily: 'Knewave',
      color: '#FFF',
      backgroundColor: '#000'
    },
    h3: {
      fontFamily: 'Knewave'
    }
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
)
