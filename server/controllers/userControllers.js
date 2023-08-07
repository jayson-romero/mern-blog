import asyncHandler from 'express-async-handler'
import User from '../Models/userModel.js'
import bcrypt from 'bcryptjs'

//GET USER
const getUser = asyncHandler(async(req, res) => {
   const user = await User.findById(req.user._id)

   if (user) {
      const { password, ...other} = user._doc
      res.status(200).json(other)
   } else {
      res.status(404);
      throw new Error('User not found');
   }
}) 


//UPDATE USER
const updateUser = asyncHandler(async (req, res) => {
   const user = await User.findById(req.user._id)
 
    if (user) {
      user.username = req.body.username || user.username;
      user.email = req.body.email || user.email;
      if (req.body.password) {
         const salt = bcrypt.genSaltSync(10);
         const hash = bcrypt.hashSync(req.body.password, salt);

        user.password = hash;
      }
   const updatedUser = await user.save();
   const { password, ...other} = updatedUser._doc
      res.status(200).json(other)
    } else {
      res.status(404);
      throw new Error('User not found');
    }
   
})


//DELTE USER
const deleteUser =  asyncHandler(async (req, res) => {

   const user = await User.findByIdAndDelete(req.user._id)
   if (user) {
      res.status(200).json("User has been deleted")
   } else {
      res.status(404);
      throw new Error('User not found');
   }

})

export { getUser, updateUser, deleteUser } 