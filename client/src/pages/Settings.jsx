import {CgProfile} from 'react-icons/cg'
import Sidebar from "../components/Sidebar"
import { Navigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { Context } from '../context/Context'
import axios from 'axios'
import {toast} from 'react-toastify'

const Settings = () => {
   const {user} = useContext(Context)
   const [ username, setUsername] = useState("")
   const [ email, setEmail] = useState("")
   const [ password, setPassword] = useState("")
   const [ file, setFile] = useState(null)
   const PF = "http://localhost:5000/images/"



   useEffect(() => {
      const getUser = async () => {
        const res = await axios.get("http://localhost:5000/api/user", {
         withCredentials: true,
         credentials: 'include',
       } )
        setUsername(res.data.username)
        setEmail(res.data.email)
      }
      getUser()
    },[])
   
   const handleUpdate = async (e) => {
      e.preventDefault();
      const updatedUser = {
         username,
         email,
         password
      }
      if (file) {
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append("name", filename);
         data.append("file", file);
         updatedUser.profilePic = filename;
         try {
            await axios.post("http://localhost:5000/api/upload", data )
         } catch (error) {
            console.log(error)
         }
      }
      try {
         const res =  await axios.put("http://localhost:5000/api/user/ ", updatedUser,  {
            withCredentials: true,
            credentials: 'include',
          })
          console.log(res)
      } catch (error) {
         console.log(error)
      }
   }

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
               <form onSubmit={handleUpdate}>
                  <label>Profile Picture</label>
                  <div className="flex items-end gap-2 mb-8">
                     <img src={file ? URL.createObjectURL(file) : PF+ user.profilePic} alt=""
                     className='w-[200px] h-[200px] rounded'/>
                
                  
                     <label htmlFor="fileinput">
                        <CgProfile className='w-[25px] h-[25px]'/>
                     </label>
                     <input type="file" 
                     id="fileinput" 
                     className='hidden'
                     onChange={e => setFile(e.target.files[0])}
                     />
                  </div>

                  <div className='flex flex-col mb-16'>
                     
                     <label className="">Username</label>
                     <input 
                        type="text" 
                        placeholder={username}
                        onChange={e=> setUsername(e.target.value)}
                        className='rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4'/>
                     
                     <label>Email</label>
                     <input 
                        type="email"
                        placeholder={email}
                        onChange={e=> setEmail(e.target.value)}
                        className='rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4' />
                     
                     <label>Password</label>
                     <input 
                        type="password" 
                        onChange={e=> setPassword(e.target.value)}
                        className=' rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 mb-4'/>
                     
                     <label>Confirm Password</label>
                     <input 
                        type="password" 
                        className='rounded-md border-0 py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 mb-8 '/>    

                     <button  
                     className=' bg-primary inline-flex items-center justify-center rounded-md p-2.5 font-bold'
                     type='submit'
                     >Update</button>   
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