import { Request, Response } from 'express';
import { ProductService } from './product.service';
import productValidationSchema from './product.validation';
import { z } from 'zod';


// create product
const createProduct = async (req: Request, res: Response) => {
  try {


    const productDetails = req.body;
    const zodParseData=productValidationSchema.parse(productDetails)
    const result = await ProductService.createProductIntoDB(zodParseData);
    res.status(200).json({
      success: true,
      message: 'Product Successfully created',
      data: result,
    });
  } catch (error) {
    console.log( error);
    if (error instanceof z.ZodError) {
      const firstErrorMessage = error.errors[0].message;
      res.status(400).json({
        success: false,
        message: firstErrorMessage,
      });
    } 
  }
};
// get all product
const getAllProduct = async (req: Request, res: Response) => {
  try {
    const searchValue: string | undefined= req.query.searchTerm as string | undefined
    
      const   result = await ProductService.getAllProductIntoDB(searchValue);
 
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
// get one product
const getOneProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
  
    const result = await ProductService.getOneProductIntoDB(id);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product Not Found",
        data: result,
      });
    }
    res.status(200).json({
        success:true,
        message: "Products fetched successfully!",
        data: result
      })
  } catch (error) {
    console.log(error);
  }
};

// delete one product
const  deleteProduct=async(req:Request, res: Response)=>{
      try{
            const id=req.params.productId
          
            const result=await ProductService.deleteProductIntoDB(id)
            res.status(200).json({
                success:true,
                message: "Product deleted successfully!",
                data: result
              })
      }
      catch(error){
         console.log(error)
      }
}


const updateProduct=async(req:Request,res:Response)=>{
      try{
        const id = req.params.productId;

        const productDetails = req.body;
      

        const result= await ProductService.updateProductIntoDB(id,productDetails)

        if(result){
          res.status(200).json({
            success:true,
            message: "Product deleted successfully!",
            data: result
          })
        }
        else{
          res.status(404).json({
            success:false,
            message: "Product not found",
          })
        }

    
      }
      catch(error){
         console.log(error)
      }
}



export const ProductControllers = {
  createProduct,
  getAllProduct,
  getOneProduct,
  deleteProduct,
   updateProduct
};
