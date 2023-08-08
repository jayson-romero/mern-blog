import Post from "./Post";
// import {blogs} from '../../data/index.js'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Posts = () => {

  const [ posts, setPosts] = useState([]);
  const { search } = useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search)
      setPosts(res.data)
    }
    fetchPosts()
  },[])

  return (
    <>
            <div className="flex m-[20px] items-center justify-around flex-wrap">
            {posts.map((post) => (
              <Post key={post._id} {...post}/>
            ))}
          </div>   
    </>
  )
}
export default Posts