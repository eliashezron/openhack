import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Profile from './Profile'
import { DAppProvider } from '@usedapp/core'
import { DAPP_CONFIG } from './config'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profile',
    element: <Profile />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DAppProvider config={DAPP_CONFIG}>
      <RouterProvider router={router} />
    </DAppProvider>
  </React.StrictMode>
)
