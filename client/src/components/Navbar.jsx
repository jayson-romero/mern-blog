import { useContext, useEffect } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsSearch} from 'react-icons/bs'

import {Link, NavLink,} from 'react-router-dom'

import { AuthContext } from '../context/authContext/authContext.jsx'
import { getUser, logout  } from '../context/authContext/apiCalls.js'

const Navbar = () => {
   const {user, dispatch, removeToLocalStorage, isFetching} = useContext(AuthContext)
   const PF = "https://blog-w5bl.onrender.com/images/"


   useEffect(() => {
        getUser(dispatch)
   },[dispatch])
   


   const handleLogout =  () => {
      logout(dispatch)
      removeToLocalStorage()
   }
 

   const links = [
      { name: 'HOME', href: '/'},
      { name: 'ABOUT', href: '/about'},
      { name: 'CONTACT', href: '/contact'},
      { name: 'WRITE', href: '/write'},
   ]

  return (
    <>
     <nav className="bg-white z-40 sticky top-0">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
         <div className="relative flex h-16 items-center justify-between">
            
            <div className='flex gap-[12px]'>
                 <BsFacebook className='w-[25px] h-[25px]'/> 
                 <BsInstagram className='w-[25px] h-[25px]'/> 
                 <BsLinkedin className='w-[25px] h-[25px]'/> 
                 <BsTwitter className='w-[25px] h-[25px]'/> 

            </div>

            <div className='flex gap-[12px]'>
               {links.map((link) => (
                  <NavLink 
                  className={({ isActive }) => isActive ? "font-bold" : "font-semi-bold"}
                  key={link.name} 
                  to={link.href}
                  onClick={prev => !prev}
                  >
                     {link.name}
                  </NavLink>
                  
               ))               
               }  
               <Link to="/login" onClick={handleLogout}>{user && "LOGOUT"}</Link>
            </div>

          
               {
               user ? 
                  <div className='flex gap-[12px] items-center'>
                     <Link to="/settings">
                    {isFetching && <p>Loading....</p>}    
                    {user &&  <img src={PF+user.profilePic} alt='unknown profile picture'
                     className='w-[40px] rounded-full'
                     />} 
                     </Link>
                     <BsSearch className='w-[23px] h-[23px]'/>
                  </div>
                  : 
                  <div className='flex gap-[14px] items-center'>
                     <Link to="/login">LOGIN</Link>
                     <Link to="/register">REGISTER</Link>
                     <BsSearch className='w-[23px] h-[23px]'/>
                  </div>
               }
               
            
         
         </div>  
        </div>
    </nav>
    </>
  )
}
export default Navbar

