import { z } from 'zod';


const variantValidationSchema = z.object({
    type: z.string().min(1, "Type is required"),  
  value: z.string().min(1, "Value is required"),  
});




const inventoryValidationSchema = z.object({
    quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),  
    inStock: z.boolean(), 
});


const productValidationSchema = z.object({
  name: z.string().min(2, "Name is required from zod"),  
  description: z.string().min(1, "Description is required"),  
  price: z.number().positive("Price must be a positive number"),  
  category: z.string().min(1, "Category is required"),  
  tags: z.array(z.string().min(1, "Tag must be a non-empty string")),  
  variants: z.array(variantValidationSchema),  
  inventory: inventoryValidationSchema,  
});



export default productValidationSchema
