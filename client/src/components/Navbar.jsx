import { useContext } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsSearch} from 'react-icons/bs'
import axios from 'axios'
import {Link, NavLink} from 'react-router-dom'
import { Context } from '../context/Context'

const Navbar = () => {

   const {user, dispatch} = useContext(Context)
   const PF = "http://localhost:5000/images/"
   const handleLogout = async () => {
      try {
      
        const res = await axios.get("http://localhost:5000/api/auth/logout")
         if(res) {
            dispatch({type: "LOGOUT"})
         }
      } catch (error) {
         console.log(error)
      }
      
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
                     <img src={PF + user.profilePic} alt='unknown profile picture'
                     className='w-[40px] rounded-full'
                     /></Link>
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