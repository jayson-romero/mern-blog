import { useParams } from "react-router-dom"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { blogs } from "../../data/index.js"


const PostDetails = () => {
   const { id } = useParams()

      const singleblog = blogs.filter((blog) => blog.id == id)

  return (
    <>
     

        {
          singleblog.map((blog) => (
            <div key={blog.id} className="m-[20px]">
               <img src={blog.img} alt="" 
               className="w-[100%] h-[280px] rounded-2xl object-cover"/>
               <div className="postInfo flex flex-col items-start ml-[12px]">
                  <div className="category mt-[10px]">
                     <p className="text-[20px]">{blog.category}</p>
                  </div> 
                  <div className="flex items-center gap-[20px]">
                     <h1 className="text-[40px] ">{blog.title}</h1>
                     <div className="flex gap-[15px] text-[20px] ">
                        <AiFillEdit className="text-green"/>
                        <AiFillDelete className="text-red"/>
                     </div>
                  </div>
                  <div className="flex gap-[5px] items-center">
                     <p className="text-[16px] bold mt-[10px]">Author: {blog.author}  | </p>
                     <p className="text-[14px] italic mt-[10px]">1 hr ago</p>
                  </div>
               </div>   

               <p className="text-[18px] leading-[25px] mt-[15px] mb-[50px] first-letter:ml-10 first-letter:text-3xl text-gray-light">
                  {blog.desc}
               </p> 
               
            </div>
          ))
       }

    
    </>
  )
}
export default PostDetails