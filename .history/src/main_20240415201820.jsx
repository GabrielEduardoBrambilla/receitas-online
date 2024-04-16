import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    Modal.setAppElement('#yourAppElement');

    <App />
  </React.StrictMode>,
)
