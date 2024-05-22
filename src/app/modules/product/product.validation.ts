import { z } from 'zod';

const variantSchema = z.object({
    type: z.string().nonempty("Type is required"),
    value: z.string().nonempty("Value is required"),
  });
  
  // Define the zod schema for the inventory
  const inventorySchema = z.object({
    quantity: z.number().int().min(0, "Quantity must be a non-negative integer"),
    inStock: z.boolean(),
  });
  
  // Define the zod schema for the product
  const productSchema = z.object({
    name: z.string().min(20, "Name must be at least 20 characters long"),
    description: z.string().nonempty("Description is required"),
    price: z.number().positive("Price must be a positive number"),
    category: z.string().nonempty("Category is required"),
    tags: z.array(z.string().nonempty("Tag must be a non-empty string")),
    variants: z.array(variantSchema),
    inventory: inventorySchema,
  });