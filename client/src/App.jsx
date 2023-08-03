import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'

//layout
import RootLayout from './layout/RootLayout'

//pages
import Home from './pages/Home/Home';
import Posts from './pages/Home/Posts';
import SingleBlog from './pages/Home/PostDetails'


import Write from './pages/Write'
import Settings from './pages/Settings'


import Login from './pages/Login'
import Register from './pages/Register'

import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

import NotFound from './pages/NotFound';


function App() {


  
const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path='/' element={<RootLayout />}>
          <Route  element={<Home />}>
             <Route index element= {<Posts/>}/>
             <Route path='singleblog/:id' element={<SingleBlog/>} component={SingleBlog}/>
          </Route>  
          
          <Route path="write" element={<Write/> } />
          <Route path="settings" element={<Settings />} />

          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
    </Route>
    <Route path="login" element={<Login/>}/>
    <Route path="register" element={ <Register/>} />
    <Route path="*" element={<NotFound/>} />  
    </> 
  ))


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
