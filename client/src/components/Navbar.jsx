import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsSearch} from 'react-icons/bs'

import {Link} from 'react-router-dom'

const Navbar = () => {

   const links = [
      { name: 'HOME', href: '/', current: true },
      { name: 'ABOUT', href: '/about', current: false },
      { name: 'CONTACT', href: '/contact', current: false },
      { name: 'WRITE', href: '/write', current: false },
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
                  <Link 
                  className="font-semi-bold"
                  key={link.name} 
                  to={link.href}
                  onClick={prev => !prev}
                  >
                     {link.name}
                  </Link>
               ))}
            </div>

            <div className='flex gap-[12px] items-center'>
               <Link to="/settings">
                  <img src='https://img.freepik.com/free-icon/user_318-644324.jpg?w=2000' alt='unknown profile picture'
                  className='w-[40px]'
                  />
               </Link>
               <BsSearch className='w-[23px] h-[23px]'/>
            </div>
         
         </div>  
        </div>
    </nav>
    </>
  )
}
export default Navbar