import express from 'express'
const router = express.Router();
import { getUser, updateUser, deleteUser } from '../controllers/userControllers.js'

//GET USER
router.get('/:id', getUser)
//UPDATE USER
router.put('/:id', updateUser)
//DELETE USER
router.delete('/:id', deleteUser)


export default router