import Post from "./Post";
// import {blogs} from '../../data/index.js'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Posts = () => {
  const URL = "https://blog-w5bl.onrender.com"
  const [ posts, setPosts] = useState([]);
  const { search } = useLocation()


  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get("http://localhost:5000/api/posts" + search)
      const res = await axios.get(`${URL}/api/posts/${search}`)
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