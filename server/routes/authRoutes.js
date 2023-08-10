import express from 'express'
const router = express.Router();
import { verifyToken } from '../middleware/verifyToken.js';

import { login, register, logout }  from '../controllers/authContollers.js'

//REGISER
router.post('/register', register)
//LOGIN
router.post('/login', login)
//LOGOUT
router.get('/logout', logout)


export default router