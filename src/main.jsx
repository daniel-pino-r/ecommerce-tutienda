import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/App'
import './styles/index.css'
import './styles/navbar.css'
import './styles/header.css'
import './styles/cards.css'
import './styles/body.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
)
