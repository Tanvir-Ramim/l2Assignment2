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
        success: true,
        message: 'Product Successfully created',
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

  export const OrderControllers = {
     createOder
  };
  