import { z } from "zod";

// const orderValidationSchema = z.object({
//       email: z.string().email(),
//       productId: z.string().min(1, "ProductID is required"),
//       price: z.number().positive(),
//       quantity: z.number().int().positive(),
//     });

    export const orderValidationSchema = z.object({
      email: z.string().email({ message: "Invalid email address" }).min(1,{message: "Email Is required"}),
      productId: z.string().min(1, { message: "ProductID is required" }),
      price: z.number().positive({ message: "Price must be positive" }),
      quantity: z.number().int().positive({ message: "Quantity must be a positive integer" }),
    });

    export default orderValidationSchema


    

