import Post from "./Post"
import {blogs} from '../data/index.js'
import Header from './Header'
import Sidebar from "./Sidebar"

const Posts = () => {
  return (
    <>
    <Header/>
     <div className='flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"'>
        <div className='grow-[9] w-[70%]'>
            <div className="flex m-[20px] items-center justify-around flex-wrap">
            {blogs.map((blog) => (
              <Post key={blog.id} {...blog}/>
            ))}
          </div>
        </div>
        <div  className='grow-[3] w-[30%]'><Sidebar/></div>
      </div> 

      
    </>
  )
}
export default Posts