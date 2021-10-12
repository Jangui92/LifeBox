import React from 'react'
import ReactDOM from 'react-dom'
import './services/index.css'
import App from './App'
import { BrowserRouter, Switch } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
