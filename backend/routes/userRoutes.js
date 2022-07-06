import express from 'express'
// import asyncHandler from 'express-async-handler'
const router = express.Router()
// import Product from '../models/productModel.js'
import {
  authUser, getUserProfile
  } from '../controllers/userController.js'
  import { protect } from '../middleware/authMiddleware.js'


router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile)


export default router