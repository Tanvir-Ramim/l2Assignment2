import express from "express"
import { OrderControllers } from "./order.controller";
const router=express.Router()



router.post('/orders',OrderControllers.createOder)
router.get('/orders',OrderControllers.getAllOrder)

export const OrderRoutes=router