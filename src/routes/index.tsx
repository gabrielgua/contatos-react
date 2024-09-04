import { createBrowserRouter, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import New from '../pages/New'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  { path: '/new', element: <New /> },
  { path: '*', element: <Navigate to="/" replace></Navigate> }
])

export default routes
