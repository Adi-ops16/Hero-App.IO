import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routs.jsx'




createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
