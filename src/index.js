import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
