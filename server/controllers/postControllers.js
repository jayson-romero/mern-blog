import asyncHandler from 'express-async-handler'
import Post from '../Models/postModel.js'
import User from '../Models/userModel.js'



//CREATE POST 
const createPost = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id)
   if (user) {
      const {title, desc, categories, img } = req.body
      const newPost = await Post.create({
         title, 
         username: user.username,
         desc, 
         categories, 
         img
      })
      res.status(200).json(newPost)
   } else {
     res.status(400)
     throw new Error("unable to create post")
   }   
}) 


//UPDATE POST
const updatePost = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id)

   if(user.username === req.body.username) {
      const post = await Post.findById(req.params.id)
 
      if (post) {
        post.title = req.body.title || post.title;
        post.desc = req.body.desc || post.desc;
        post.categories = req.body.categories || post.categories;
        post.img = req.body.img || post.img;
  
        const updatedPost = await post.save()
        res.status(200).json(updatedPost)
      }  else {
        res.status(404);
        throw new Error('Post not found');
      }
    } else {
      res.status(404);
      throw new Error('you can update only your posts');
    }
   
})


//DELTE USER
const deletePost =  asyncHandler(async (req, res) => {

   const user = await User.findById(req.user._id)

   if(user.username === req.body.username) {
      const post = await Post.findByIdAndDelete(req.params.id)
 
      if (post) {
        res.status(200).json("Post has been deleted")
      }  else {
        res.status(404);
        throw new Error('Post not found');
      }
    } else {
      res.status(404);
      throw new Error('you can update only your posts');
    }
})


//GET POST 
const getPost = asyncHandler(async (req, res) => {
   const post = await Post.findById(req.params.id)
   if(post) {
      res.status(200).json(post)

   } else {
      res.status(404);
      throw new Error('unable to get post');
   }
}) 

//GET ALL POST 
const getAllPost = asyncHandler(async (req, res) => {
   const username = req.query.user
   const catname = req.query.cat
   let posts;
   if(username) {
      posts = await Post.find({username})
   }
    else if(catname){
      posts = await Post.find({categories:{
         $in:[catname],
      }})
   }  else {
      posts =  await Post.find()
   }
   res.status(200).json(posts)
}) 





export { createPost, deletePost, updatePost, getPost, getAllPost } 