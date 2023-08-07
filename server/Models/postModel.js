import mongoose from "mongoose";

const postSchema = mongoose.Schema(
   {
     title: {
       type: String,
       required: true
     },
     username: {
       type: String,
       required: true
     },
     desc: {
       type: String,
       required: true
     },
     img: {
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
