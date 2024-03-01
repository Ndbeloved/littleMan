import { useState } from 'react'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import ErrorPage from '../Pages/404/404'
import './App.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from '../Components/Login/Login'
import SignUp from '../Components/SignUp/SignUp'
import Main from '../Components/DashboardComponents/Main/Main'
import Withdraw from '../Components/DashboardComponents/Withdraw/Withdraw'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage/>
    },
    {
      path:'/about',
      element: <About/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path:'/signup',
      element: <SignUp/>
    },
    {
      path: '/dashboard',
      element: <Main/>
    },
    {
      path: '/dashboard/withdraw',
      element: <Withdraw/>
    }
  ])

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
