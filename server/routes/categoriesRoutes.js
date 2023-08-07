import express from 'express'
const router = express.Router()
import {createCategory, getCategories} from '../controllers/categoriesControllers.js'

router.post("/", createCategory)
router.get("/", getCategories)



export default router