import express from "express";
import dotenv from 'dotenv'
const app = express();
const port = process.env.PORT || 5000
import {notFound, errorHandler} from './middleware/errorHandler.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
import multer from "multer";
import path from 'path'
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
//db
import connectDB from "./config/db.js";
//route
import postRouter from './routes/postRoutes.js'
import authRouter from './routes/authRoutes.js'
import userRotuer from './routes/userRoutes.js'
import categoryRouter from './routes/categoriesRoutes.js';

dotenv.config()

connectDB()
app.use(cors({
    origin: process.env.CLIENT_HOST, 
    credentials: true
}))
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json())
app.use("/images", express.static(path.join(__dirname,"/images")));



const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "images"); 
   },
   filename: (req, file, cb) => {
      cb(null, req.body.name)
   },
})
const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) => {
   res.status(200).json("file has been uploaded")
})



app.use('/api/posts', postRouter)
app.use('/api/auth', authRouter)
app.use('/api/user', userRotuer)
app.use('/api/categories', categoryRouter)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () =>  {
   console.log(`Listening on port ${port}`)
})
