import express from "express"
import { ProductControllers } from "./product.controller"

const router=express.Router()


router.post('/products',ProductControllers.createProduct)
router.get('/products',ProductControllers.getAllProduct)
router.get('/products/:productId',ProductControllers.getOneProduct)
router.delete('/products/:productId',ProductControllers.deleteProduct)
// router.get('/products',ProductControllers.searchProduct)

export const ProductRoutes=router