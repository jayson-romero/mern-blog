import express from 'express'
const router = express.Router();
import { getUser, updateUser, deleteUser } from '../controllers/userControllers.js'
import {verifyToken}  from '../middleware/verifyToken.js';

//GET USER
router.get('/', getUser)
//UPDATE USER
router.put('/',verifyToken, updateUser)
//DELETE USER
router.delete('/', verifyToken, deleteUser)


export default router