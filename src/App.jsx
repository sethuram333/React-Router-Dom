import React from 'react'
import {createHashRouter,RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

import AppLayout from './AppLayout'
import Authentication from './Authentication'
import Signup from './pages/Signup'
import Login from './pages/Login'

const router = createHashRouter([
{
  path:'/',
  element:<AppLayout/>,
  children:[
    {
     index:true,
     element:<Home/>
    },
    {
      path:'contact',
      element: <Contact/>
    },
    {
      path:'about',
      element: <About/>
    },
  ]

},
{
  path:'/authentication',
  element:<Authentication/>,
  children:[
    {
      path:'signup',
      element:<Signup/>
    },
    {
      path:'login',
      element:<Login/>
    }
  ]
},{
  path:"*",
  element:<NotFound/>
}
])

const App = () => {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  )
}

export default App
