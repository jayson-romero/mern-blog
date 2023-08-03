import express from "express";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = process.env.PORT || 5000

//db
import connectDB from "./config/db.js";
//route
import postRouter from './routes/postRoutes.js'

connectDB()
app.use('/api/posts', postRouter)

app.listen(port, () =>  {
   console.log(`Listening on port ${port}`)
})
