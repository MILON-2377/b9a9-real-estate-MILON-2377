import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Routes from './Routes/Routes.jsx'
import AuthProviderContext from './AuthProviderContext/AuthProviderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderContext>
      <Routes></Routes>
    </AuthProviderContext>
  </React.StrictMode>,
)
