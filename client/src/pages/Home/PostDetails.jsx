import { useParams, Link } from "react-router-dom"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
// import { blogs } from "../../data/index.js"
import { useEffect, useState } from "react"
import axios from "axios"


const PostDetails = () => {
   const [post, setPost] = useState({})
   const { id } = useParams()

   useEffect(() => {
      const getPosts = async () => {
        const res = await axios.get("http://localhost:5000/api/posts/" + id)
        setPost(res.data)
      }
      getPosts()
    },[id])


  return (
    <>
     

   
            <div className="m-[20px]">
               {post.img && 
               <img src={post.img} alt="" 
               className="w-[100%] h-[280px] rounded-2xl object-cover"/>
               }
               <div className="postInfo flex flex-col items-start ml-[12px]">
                  <div className="category mt-[10px]">
                        <p  className="text-[20px]">{post.categories}</p>                     
                  </div> 
                  <div className="flex items-center gap-[20px]">
                     <h1 className="text-[40px] ">{post.title}</h1>
                     <div className="flex gap-[15px] text-[20px] ">
                        <AiFillEdit className="text-green"/>
                        <AiFillDelete className="text-red"/>
                     </div>
                  </div>
                  <div className="flex gap-[5px] items-center">
                     <p className="text-[16px] bold mt-[10px]">Author: </p>
                     <Link to={`/?user=${post.username}`} className="text-[16px] bold mt-[10px] text-primary">{post.username}  |  </Link>
                     <p className="text-[14px] italic mt-[10px]">{new Date(post.createdAt).toDateString()}</p>
                  </div>
               </div>   

               <p className="text-[18px] leading-[25px] mt-[15px] mb-[50px] first-letter:ml-10 first-letter:text-3xl text-gray-light">
                  {post.desc}
               </p> 
               
            </div>
       
       

    
    </>
  )
}
export default PostDetails