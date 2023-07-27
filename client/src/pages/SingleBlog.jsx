import { useParams } from "react-router-dom"
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'
import { blogs } from "../data/index.js"





const SingleBlog = () => {
   const { id } = useParams()

      const singleblog = blogs.filter((blog) => blog.id == id)

  return (
    <div>
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
                  <p className="text-[16px] italic mt-[10px]">1 hr ago</p>
               </div>   

               <p className="text-[18px] leading-[18px] mt-[15px] mb-[50px]">
                  {blog.desc}
               </p> 
               
            </div>
          ))
       }
    </div>
  )
}
export default SingleBlog