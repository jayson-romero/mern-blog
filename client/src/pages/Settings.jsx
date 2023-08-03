import {CgProfile} from 'react-icons/cg'
import Sidebar from "../components/Sidebar"
import { Navigate } from 'react-router-dom'

const Settings = () => {
   const user = true

   if(!user) {
      return <Navigate to='/register'/>
   }

  return (
    <>
       <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"'>
        <div className='grow-[9] w-[70%]'>
           <div className="settings m-6">
              <div className="flex justify-between items-center font-bold mb-8">
                 <h1 className='text-[25px]'>Update Your Account</h1>
                 <h1 className='text-[14px] text-red'>Delete Account</h1>
              </div>
               <form>
                  <label>Profile Picture</label>
                  <div className="flex items-end gap-2 mb-8">
                     <img src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292ZXIlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt=""
                     className='w-[200px] h-[200px] rounded'/>
                
                  
                     <label htmlFor="fileinput">
                        <CgProfile className='w-[25px] h-[25px]'/>
                     </label>
                     <input type="file" id="fileinput" className='hidden'/>
                  </div>

                  <div className='flex flex-col mb-16'>
                     
                     <label className="">Username</label>
                     <input 
                        type="text" 
                        placeholder='Jayson'
                        className='rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4'/>
                     
                     <label>Email</label>
                     <input 
                        type="email"
                        placeholder='Jayson@gmai.com'
                        className='rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4' />
                     
                     <label>Password</label>
                     <input 
                        type="password" 
                        className=' rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4'/>
                     
                     <label>Confirm Password</label>
                     <input 
                        type="password" 
                        className='rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 mb-8 '/>    

                     <button  className=' bg-primary inline-flex items-center justify-center rounded-md p-2.5 font-bold'>Update</button>   
                  </div>
                 


               </form>

           </div>
        </div>
        <div  className='grow-[3] w-[30%]'><Sidebar/></div>
      </div>  
    </>
  )
}
export default Settings