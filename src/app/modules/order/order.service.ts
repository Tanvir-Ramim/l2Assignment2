import { order } from "./order.interface"
import { orderModel } from "./order.model"

const createOrderIntoDB=async(orderDetails: order)=>{
    const result=   await  orderModel.create(orderDetails)

    return result
    
}

export const OrderService={
    createOrderIntoDB
}