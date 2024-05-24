import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderService } from "./order.service";
import { z } from "zod";

const createOder = async (req: Request, res: Response) => {
    try {
  
  
      const oderDetails = req.body;
      const zodParseData=orderValidationSchema.parse(oderDetails)
      const result = await OrderService.createOrderIntoDB(zodParseData);
  
      res.status(200).json({
        
        data: result,
      });
    } catch (error) {
        if (error instanceof z.ZodError) {
            const firstErrorMessage = error.errors[0].message;
            res.status(400).json({
              success: false,
              message: firstErrorMessage,
            });
          } 
    }
  };

 const getAllOrder =async(req:Request , res: Response)=>{


          try
          {
            const email:string | undefined=req.query.email as string | undefined
            
            const result =await OrderService.getAllOrderIntoDB(email)
              
             if(email){
              return res.status(200).json({
                success: true,
               message: result.length>0 ? "Orders fetched successfully for user email!":  "Data not found",
                data: result,
              });
             }
             
          return  res.status(200).json({
             success: true,
            message: "Orders fetched successfully!",
             data: result,
           });
          }
          catch{
            res.status(404).json({
              success: false,
              message: "Product Not Found",
            });
          }
 }



  export const OrderControllers = {
     createOder,
     getAllOrder
  };
  