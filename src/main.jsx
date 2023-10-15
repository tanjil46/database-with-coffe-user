import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Addcofee from './componets/Addcofee.jsx';
import Updatecoffe from './componets/Updatecoffe.jsx';
import Root from './componets/Root.jsx';
import Errors from './componets/Errors.jsx';
import Singup from './componets/Singup.jsx';
import Authprovider from './componets/Authprovider.jsx';
import User from './componets/User.jsx';
import Login from './componets/Login.jsx';



const router=createBrowserRouter([
{
  path:'/',
  element:<Root></Root>,
 errorElement:<Errors></Errors>,
  
  children:[

     {
      path:'/',
      loader:()=>fetch('http://localhost:5000/coffee'),
      element:<App></App>
     },
     


    {
      path:'/addcoffee',
      element:<Addcofee></Addcofee>
    },
    {
      path:'/updatecoffee/:id',
      element:<Updatecoffe></Updatecoffe>,
      loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`)

    },
    {
      path:'/singup',
      element:<Singup></Singup>
    },
    {
      path:'/user',
      loader:()=>fetch('http://localhost:5000/user'),
      element:<User></User>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
    







  ]
}












])

















ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Authprovider>
   <RouterProvider router={router}></RouterProvider>
   </Authprovider>
  </React.StrictMode>,
)
