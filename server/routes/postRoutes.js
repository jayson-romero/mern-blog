import express from 'express'
const router = express.Router();
import { getPosts, updatePost, deletePost, createPost} from '../controllers/postControllers.js'

router.get('/', getPosts)
router.put('/:id', updatePost)
router.delete('/:id', deletePost)
router.post('/create', createPost)



export default router