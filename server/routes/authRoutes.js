import express from 'express'
const router = express.Router();

import { login, register, logout }  from '../controllers/authContollers.js'

//REGISER
router.post('/register', register)
//LOGIN
router.post('/login', login)
//LOGOUT
router.post('/logout', logout)


export default router