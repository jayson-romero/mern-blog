import { Link } from "react-router-dom"
const Post = ({id , title, desc, img, category}) => {
  return (
     <>  
      <Link to={`/singleblog/${id}`} className="max-w-[350px] cursor-pointer">
         <img srcSet={img} alt="" 
         className="w-[100%] h-[280px] rounded-2xl object-cover"
         />

         <div className="postInfo flex flex-col items-center">
            <div className="category mt-[10px]">
               <p className="text-[12px]">{category}</p>
            </div> 
            <h1 className="text-[24px] mt-[15px]">{title}</h1>
            <p className="text-[11px] italic mt-[10px]">1 hr ago</p>
         </div>   
            <p className="text-[14px] leading-[18px] mt-[15px] mb-[50px]  line-clamp-4">
               {desc}
            </p> 
      </Link>
     </>
  )
}
export default Post