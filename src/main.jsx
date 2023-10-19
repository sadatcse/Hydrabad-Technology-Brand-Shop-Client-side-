import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


// Import React Router dom 


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// Import Browser Root

import Root from './components/Root';
import AuthProvider from './providers/AuthProvider';


// Import Web site Page 

import Error404 from './components/Page/Error404';
import Home from './components/Page/Home';
import About from './components/Page/About';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';

//Brand 

import Amazon from './components/Brand/Amazon';
import Apple from './components/Brand/Apple';
import Google from './components/Brand/Google';
import Intel from './components/Brand/Intel';
import Samsung from './components/Brand/Samsung';
import Sony from './components/Brand/Sony';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        path:'/',
        element:<Home></Home>
        
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }, 
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/brand/amazon',
        element:<Amazon></Amazon>
      },
      {
        path:'/brand/apple',
        element:<Apple></Apple>
      },
      {
        path:'/brand/google',
        element:<Google></Google>
      },
      {
        path:'/brand/intel',
        element:<Intel></Intel>
      },
      {
        path:'/brand/samsung',
        element:<Samsung></Samsung>
      },
      {
        path:'/brand/sony',
        element:<Sony></Sony>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
      <RouterProvider router={router} />
      </AuthProvider>
      </React.StrictMode>,
)

