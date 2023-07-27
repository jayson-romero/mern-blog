import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route,
} from "react-router-dom";
import Posts from './components/Posts.jsx';
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx';
import SingleBlog from './pages/SingleBlog.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
          <Route path="/" element={<Home />}>
          <Route path="" element={<Posts />} />
          <Route path="singleblog/:id" element={<SingleBlog />} component={SingleBlog}  />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
    </Route>
  ))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
