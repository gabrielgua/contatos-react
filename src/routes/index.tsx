import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: '*', element: <Navigate to="/" replace></Navigate> }
])

export default routes
