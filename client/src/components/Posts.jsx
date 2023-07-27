import Post from "./Post"
import {blogs} from '../data/index.js'

const Posts = () => {
  return (
    <>
    <div className="flex m-[20px] items-center justify-around flex-wrap">
      {blogs.map((blog) => (
         <Post key={blog.id} {...blog}/>
      ))}
    </div>
    </>
  )
}
export default Posts