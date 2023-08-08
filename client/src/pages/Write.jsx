import {MdOutlineAddPhotoAlternate} from 'react-icons/md'
import { Navigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { toast } from 'react-toastify';
import axios from 'axios';


const Write = () => {
   const { user } = useContext(Context)
   const [ title, setTitle] = useState("")
   const [ desc, setDesc] = useState("")
   const [ file, setFile] = useState(null)

   const handleSubmit = async (e) => {
      e.preventDefault();
      const newPost = {title, desc}
      const res = await axios.post("http://localhost:5000/api/posts", newPost)

   }


   if(!user) {
      toast.error("kinly register to add blog")
      return <Navigate to='/register'/>
   }

  return (
    <>
      <div className='m-6 flex flex-col mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
             <img src="https://media.istockphoto.com/id/496848472/vector/blog-blogging-and-blogglers-theme.jpg?s=612x612&w=0&k=20&c=mSpcEVoA-YeViMFD--ozz_CyP1UXnEgw89MpU8bwd9s=" alt="img" 
               className="w-[100%] h-[280px] rounded-2xl object-cover"/>
         <form onSubmit={handleSubmit}>
            <div className='m-6'>
               <label htmlFor='fileinput' className='flex items-center'>
                  <MdOutlineAddPhotoAlternate className='w-[30px] h-[30px]'/>
                  <p className='text-[14px] text-gray-light'>Add Photo</p>
               </label>
               <input type="file" id="fileinput" className='hidden'/>

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
               className=' bg-primary inline-flex items-center justify-center rounded-md p-2.5 font-bold'
               >Publish</button>
            </div>
         </form>
      </div>
    </>
  )
}
export default Write