import express from "express";
import dotenv from 'dotenv'
const app = express();
const port = process.env.PORT || 5000
import {notFound, errorHandler} from './middleware/errorHandler.js'
import cookieParser from "cookie-parser";
//db
import connectDB from "./config/db.js";
//route
import postRouter from './routes/postRoutes.js'
import authRouter from './routes/authRoutes.js'
import userRotuer from './routes/userRoutes.js'





dotenv.config()
app.use(cookieParser());
app.use(express.json())


connectDB()

app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRotuer)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>  {
   console.log(`Listening on port ${port}`)
})
