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

import Brand from './components/Brand/Brand';

// Product 
import AddProduct from './components/Dashboard/AddProduct';
import Cart from './components/Dashboard/Cart';
import Updateproduct from './components/Dashboard/Updateproduct';
import DetailsPage from './components/Products/DetailsPage';
import PrivateRoot from './components/Root/PrivateRoot';


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
        path:'/addproduct',
        element:<PrivateRoot><AddProduct></AddProduct></PrivateRoot>,
      },
      {
        path:'/cart',
        element:<PrivateRoot><Cart></Cart></PrivateRoot>,
        loader: () => fetch('https://h-technology-server-f37hhlhr4-sadatcses-projects.vercel.app/cart')
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
        path: '/brand/:brand',
        element: <Brand></Brand>,
        loader: ({ params }) => fetch(`https://h-technology-server-f37hhlhr4-sadatcses-projects.vercel.app/product/brand/${params.brand}`)

      },
      { 
        path: '/updateproduct/:id',
        element: <PrivateRoot><Updateproduct></Updateproduct></PrivateRoot>,
        loader: ({ params }) => fetch(`https://h-technology-server-f37hhlhr4-sadatcses-projects.vercel.app/product/${params.id}`)   
      },
      { 
        path: '/product/:id',
        element: <PrivateRoot><DetailsPage></DetailsPage></PrivateRoot>,
        loader: ({ params }) => fetch(`https://h-technology-server-f37hhlhr4-sadatcses-projects.vercel.app/product/${params.id}`)   
      },
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

