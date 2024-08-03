import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'
import './css/index.css'
import Layout from './components/Layout.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home.jsx'
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import NotFound from './components/NotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>, children:[
      {index:true, element: <Home/>},
      {path:"/About", element:<About/>},
      {path:"/Portfolio", element:<Portfolio/>},
      {path:"/Contact", element:<Contact/>},
      {path:"*", element: <NotFound/>}
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
