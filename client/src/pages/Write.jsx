import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import { Navigate, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/authContext/authContext';
import { toast } from 'react-toastify';
import axios from 'axios';


const Write = () => {
   const URL = "https://blog-w5bl.onrender.com"
   const { user } = useContext(AuthContext)
   console.log(user)
   const navigate = useNavigate()
   const [ title, setTitle] = useState("")
   const [ desc, setDesc] = useState("")
   const [ file, setFile] = useState(null)

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {
         title,
         username: user.username,
         desc
      }
      if (file) {
         const data = new FormData();
         const filename = Date.now() + file.name;
         data.append("name", filename);
         data.append("file", file);
         newPost.img = filename;
         try {
            await axios.post(`${URL}/api/upload`, data )
         } catch (error) {
            console.log(error)
         }
      }
      try {
         const res =  await axios.post(`${URL}/api/posts`, newPost,  {
            withCredentials: true,
            credentials: 'include',
          })
         navigate(`/singleblog/${res.data._id}`)
      } catch (error) {
         console.log(error)
      }
   }


   if(!user) {
      toast.error("kinly register to add blog")
      return <Navigate to='/register'/>
   }

  return (
    <>
      <div className='m-6 flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
         { file && (
            <img src={URL.createObjectURL(file)} alt="img" 
              className="w-[100%] h-[280px] rounded-2xl object-cover"/>
         )}
         <form onSubmit={handleSubmit}>
            <div className='m-6'>
               <label htmlFor='fileinput' className='flex items-center'>
                  <MdOutlineAddPhotoAlternate className='w-[30px] h-[30px]'/>
                  <p className='text-[14px] text-gray-light'>Add Photo</p>
               </label>
               <input 
               type="file" 
               id="fileinput" 
               className='hidden'
               onChange={e => setFile(e.target.files[0])}
               />

               <input 
               type="text" 
               onChange={e=>setTitle(e.target.value)}
               className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 my-6 '
               placeholder="Title" 
               autoFocus={true}/>
            </div> 
            <div>
               <textarea 
               placeholder='Tell your story...' 
               type="text"
               onChange={e=>setDesc(e.target.value)}
               className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300  my-6 h-[500px]'
               ></textarea>
               <button
               type='submit'
               className='flex w-full justify-center rounded-md bg-primary py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark'
               >Publish</button>
            </div>
         </form>
      </div>
    </>
  )
}
export default Write