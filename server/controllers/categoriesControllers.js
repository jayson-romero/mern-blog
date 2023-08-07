import Category from '../Models/categoryModel.js'
import asyncHandler from 'express-async-handler'

const createCategory = asyncHandler(async (req, res) => {
   const newCat = new Category(req.body)
   if(newCat) {
      const savedCat = await newCat.save()
      res.status(200).json(savedCat)
   } else{
      res.status(404);
      throw new Error('Something went wrong');
   }
})

const getCategories = asyncHandler(async (req, res) => {
   const savedCat = await Category.find()
   if(savedCat) { 
      res.status(200).json(savedCat)
   } else{
      res.status(404);
      throw new Error('Something went wrong');
   }
})



export {createCategory, getCategories}