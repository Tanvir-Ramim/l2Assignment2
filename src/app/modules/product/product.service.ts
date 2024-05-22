import { setDefaultAutoSelectFamilyAttemptTimeout } from "net";
import { product } from "./product.interface";
import { productModel } from "./product.model";
import { ObjectId } from "mongoose";


const createProductIntoDB=async(productDetails: product)=>{
    const result=   await  productModel.create(productDetails)

    return result
    
}


const getAllProductIntoDB=async(searchValue:any)=>{
     console.log(searchValue)
    let query: object
    if(searchValue){
      console.log("ass")
      query= {
          $or: [
            { name: { $regex: new RegExp(searchValue, 'i') } },
            { description: { $regex: new RegExp(searchValue, 'i') } },
            { category: { $regex: new RegExp(searchValue, 'i') } }
          ]
        }
    }
    else{
     
       query={}
    }
     const result =await productModel.find(query)
     return result
}

const getOneProductIntoDB=async(id:string)=>{
       
         const result= await productModel.findById(id)
         return result

}


const deleteProductIntoDB=async(id:string)=>{

    const result =await productModel.findByIdAndDelete(id)

       return   result
     
}



export const ProductService={
    createProductIntoDB,
    getAllProductIntoDB,
    getOneProductIntoDB,
    deleteProductIntoDB
}