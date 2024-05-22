import { Request, Response } from "express";
import { ProductService } from "./product.service";


const createProduct=async(req: Request, res: Response)=>{
     try{
        const productDetails=req.body.product
          const result=await ProductService.createProductIntoDB(productDetails);
                
          res.status(200).json({
            success:true,
            message: "Product Successfully created",
            data: result
          })
     }
     catch(error){
        console.log(error)
     }
}

const getAllProduct=async(req:Request,res:Response)=>{
      try{
          const result=await ProductService.getAllProductIntoDB()
          res.status(200).json({
            success:true,
            message: "Products fetched successfully!",
            data: result
          })
      }
      catch(error){
         console.log(error)
      }
}


export const ProductControllers={
       createProduct,
       getAllProduct
}