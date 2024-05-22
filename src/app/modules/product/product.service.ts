import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
import { product } from "./product.interface";
import { productModel } from "./product.model";


const createProductIntoDB=async(productDetails: product)=>{
    const result=   await  productModel.create(productDetails)

    return result
    
}


const getAllProductIntoDB=async()=>{
     const result =await productModel.find()
     return result
}


export const ProductService={
    createProductIntoDB,
    getAllProductIntoDB
}