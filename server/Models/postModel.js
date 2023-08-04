import mongoose from "mongoose";

const postSchema = mongoose.Schema(
   {
     title: {
       type: String,
       required: true,
       unique: true
     },
     username: {
       type: String,
       required: true
     },
     body: {
       type: String,
       required: true
     },
     photo: {
       type: String,
       required: false
     },
     categories: {
      type: Array,
      required: false
    },
   },
   {
     timestamps: true,
   }
 );

 const Post = mongoose.model('Post', postSchema);

export default Post;
