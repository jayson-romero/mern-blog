import User from '../Models/userModel.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler'


const login = asyncHandler( async(req, res) => {
   const {email, password } = req.body
   
   //IF FORM IN INCOMPLETE
   if( !email || !password) {
      res.status(404)
      throw new Error("Complete registration")
   }
   
    //FIND USER and COMPARE PASSWORD
   const user = await User.findOne({email}) 
   if(user && bcrypt.compareSync(password, user.password)) {
      generateToken(res, user._id)
      const {password, ...other} = user._doc
      res.status(200).json(other)
   } else {
      res.status(400)
      throw new Error("Wrong Credintials")
   }
}) 


const register = asyncHandler( async (req, res) => {
      const {username, email, password } = req.body

      //IF FORM IN INCOMPLETE
      if(!username || !email || !password) {
         res.status(404)
         throw new Error("Complete registration")
      }

       //IF USER ALREADT EXIST
      const userExist = await User.findOne({email}) 
      if(userExist){
         res.status(404)
         throw new Error("user already exists")
      }

      //HASH THE PASSWORD
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(password, salt);

      //CREATE USER
      const user = await User.create({
         username,
         password: hash,
         email,
         profilePic: "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg"
      });

      if(user) {
         generateToken(res, user._id)
         res.status(200).json({
            _id: user._id,
            username: user.username,
            email: user.email
         })
      } else {
         res.status(400);
         throw new Error("Invalid user data")
      }
    

})


const logout = asyncHandler((req, res) => {
    //REMOVE  COOKIES
   res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ 
       message: 'Logged out successfully',     
      });
})



//GENERATE TOKEN
const generateToken = (res, userId) => {
   const token = jwt.sign({ userId }, process.env.JWT_SECRET);
 
   res.cookie('jwt', token, {
      httpOnly: true,
      secure: true, // Use secure cookies in production
      sameSite: 'none', // Prevent CSRF attacks
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
   });
 };

 export { login, register, logout } 