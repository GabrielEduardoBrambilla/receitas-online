import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Modal } from './components/Modal';

Modal.setAppElement('#yourAppElement');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
