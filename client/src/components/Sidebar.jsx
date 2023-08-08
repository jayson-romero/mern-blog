import {Link} from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Sidebar = () => {
   const [cats, setCats] = useState([]);

   useEffect(() => {
      const getCats = async () => {
         const res = await axios.get('http://localhost:5000/api/categories')
         setCats(res.data)
      }
      getCats()
   },[])

  return (
    <>
      <div>
         <div className="sidebarItem flex flex-col gap-3 py-[10px] ">
            <h3 className="title text-[20px] font-semibold border-y-2 text-center">ABOUT ME</h3>
            <img src="https://st2.depositphotos.com/3724325/8979/i/950/depositphotos_89792560-stock-photo-about-me-note-pinned-on.jpg" alt=""
            className=""
            />
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>  
         </div>
       

         <div className="sidebarItem flex flex-col gap-3 gap-3 py-[10px]" >
            <h3 className="title text-[20px] font-semibold border-y-2 text-center">CATEGORIES</h3>
            <div className='flex gap-5 flex-wrap mx-[50px]'>
               {cats.map((cat)=> (
                  <Link to={`/?cat=${cat.name}`} key={cat._id}>{cat.name}</Link>
               ))}
            </div>    
         </div>
       

         <div className="sidebarItem flex flex-col gap-3 gap-3 py-[10px]">
            <h3 className="title text-[20px] font-semibold border-y-2 text-center">FOLLOW US</h3>
            <div className='flex gap-5 justify-center'>
                 <BsFacebook className='w-[25px] h-[25px]'/> 
                 <BsInstagram className='w-[25px] h-[25px]'/> 
                 <BsLinkedin className='w-[25px] h-[25px]'/> 
                 <BsTwitter className='w-[25px] h-[25px]'/> 
            </div>
         </div>
      </div>
    </>
  )
}
export default Sidebar