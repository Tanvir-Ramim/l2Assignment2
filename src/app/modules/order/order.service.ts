import { productModel } from "../product/product.model"
import { order } from "./order.interface"
import { orderModel } from "./order.model"

const createOrderIntoDB=async(orderDetails: order)=>{
    
    const  productNew= await productModel.findById(orderDetails.productId)


    if(!productNew){
         return {
            success: false,
            message : "Product not found"
         }
    }

     if(orderDetails.quantity>productNew.inventory.quantity){
        return {
            success: false,
            message : "Insufficient Stock!"
         }
     }


    const result=   await  orderModel.create(orderDetails)

    productNew.inventory.quantity -= orderDetails.quantity

    if(productNew.inventory.quantity==0){
        productNew.inventory.inStock=false
    }

    await productNew.save()


   return {
            success: true,
            message: 'Order created successfully!',
            order: result
        };
    
}

export const OrderService={
    createOrderIntoDB
}