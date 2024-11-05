import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home/index.jsx'
import Wallet from './pages/Wallet/index.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Perfil from './pages/Perfil/index.jsx'
import Login from './pages/Login'

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/wallet",
      element: <Wallet />
    },
    {
      path:"/perfil",
      element: <Perfil />
    },
    
  ]
},
{
  path: "/login",
  element: <Login />
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
