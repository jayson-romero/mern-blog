import express from 'express'
const router = express.Router();
import { createPost, deletePost, updatePost, getPost, getAllPost} from '../controllers/postControllers.js'
import {verifyToken, } from '../middleware/verifyToken.js'

router.post('/',verifyToken, createPost)
router.get('/', getAllPost)
router.get('/:id', getPost)
router.put('/:id',verifyToken, updatePost)
router.delete('/:id',verifyToken, deletePost)




export default router