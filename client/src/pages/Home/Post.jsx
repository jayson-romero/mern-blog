import { Link } from "react-router-dom"



const Post = ({_id , title, desc, img, categories, createdAt}) => {
   const PF = "https://blog-w5bl.onrender.com/images/"
  return (
     <> 
      <Link to={`/singleblog/${_id}`} className="max-w-[350px] cursor-pointer">
         {img && <img src={ PF + img} alt="" 
         className="w-[100%] h-[280px] rounded-2xl object-cover"
         /> }
         

         <div className="postInfo flex flex-col items-center">
            <div className="category mt-[10px]">
               {categories.map((cat, index) => (
                  <p key={index} className="text-[12px]">{cat}</p>
               ))}
            </div> 
            <h1 className="text-[24px] mt-[15px]">{title}</h1>
            <p className="text-[11px] italic mt-[10px]">{new Date(createdAt).toDateString()}</p>
         </div>   
            <p className="text-[14px] leading-[18px] mt-[15px] mb-[50px]  line-clamp-4">
               {desc}
            </p> 
      </Link>
     </>
  )
}
export default Post