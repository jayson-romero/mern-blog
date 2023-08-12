import { useParams, Link, useNavigate } from "react-router-dom"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
// import { blogs } from "../../data/index.js"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { Context } from "../../context/LocalStorageContext/Context.jsx"
import { toast } from "react-toastify"


const PostDetails = () => {
   const navigate = useNavigate()
   const {user} = useContext(Context)
   const [post, setPost] = useState({})
   const { id } = useParams()
   const PF = "http://localhost:5000/images/"
   const [ title, setTitle] = useState("")
   const [desc, setDesc] = useState("")
   const [ updateMode, setUpdateMode] = useState(false)

 
   useEffect(() => {
      const getPosts = async () => {
        const res = await axios.get("http://localhost:5000/api/posts/" + id)
        setPost(res.data)
        setTitle(res.data.title)
        setDesc(res.data.desc)
        
      }
      getPosts()
    },[id])

    const handleDelete = async () => {
       try {
        const res = await axios.delete("http://localhost:5000/api/posts/" + id,  {
            withCredentials: true,
            credentials: 'include',
          })
         toast.success(res.data)
         navigate('/')
       } catch (error) {
          console.log(error)
       }
    }

    const handleUpdate = async () => { 
      try {
         const res = await axios.put("http://localhost:5000/api/posts/" + id, {
            title: title,
            desc: desc,
          }, {
             withCredentials: true,
             credentials: 'include',
           })
           if(res) {
            setUpdateMode(false)
            toast.success("Blog updated successfully")
           }
        } catch (error) {
           console.log(error)
        }
    }

  return (
   <>
      <div className="m-[20px]">
        {/* IMAGE */}
         {post.img && 
            <img src={PF + post.img} alt="Blog Image" 
            className="w-[100%] h-[280px] rounded-2xl object-cover"/>
         }

         <div className="postInfo flex flex-col items-start ml-[12px]">
            
            {/* CATEGORY */}
            <div className="category mt-[10px]">
               <p className="text-[20px]">
                  {post.categories}
               </p>                     
            </div> 

            {updateMode ? (
               <input 
               type="text" 
               value={title}
               onChange={e=>setTitle(e.target.value)}
               className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300 my-6 '
               autoFocus={true}/>
            ) : (
               <div className="flex items-center gap-[20px]">
                  {/* TITLE && DELETE/UPDATE ICONS */}
                  <h1 className="text-[40px] ">{title}</h1>

                  {post.username === user?.username && (
                     <div className="flex gap-[15px] text-[20px] ">
                        <AiFillEdit className="text-green" onClick={() => setUpdateMode(true)}/>
                        <AiFillDelete className="text-red" onClick={handleDelete}/>  
                     </div>       
                   )}
               </div>
            )}

            {/* AUTHOR &&  DATE CREATED */}
            <div className="flex gap-[5px] items-center">
               
               <p className="text-[16px] bold mt-[10px]">Author:</p>
               <Link 
                  to={`/?user=${post.username}`} 
                  className="text-[16px] bold mt-[10px] text-primary">{post.username}  |  
               </Link>
            
               <p className="text-[14px] italic mt-[10px]">{new Date(post.createdAt).toDateString()}</p>
            </div>

         </div>   

         {updateMode ? (
            <textarea 
            type="text"
            value={desc}
            onChange={e=>setDesc(e.target.value)}
            className='block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-gray-300  my-6 h-[500px]'
            ></textarea>
         ) : (
            <p className="text-[18px] leading-[25px] mt-[15px] mb-[50px] first-letter:ml-10 first-letter:text-3xl text-gray-light">
               {/* DESCRIPTION */}
               {desc}
            </p> 
         )}

      {updateMode && 
         <button
            type='submit'
            onClick={handleUpdate}
            className='flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark'
            >Update
         </button>}       
      </div>
    </>
  )
}
export default PostDetails