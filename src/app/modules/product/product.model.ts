import { Schema, model } from 'mongoose';
import { product, tInventory, tVariants } from './product.interface';


const variantSchema =new Schema<tVariants>({
    type: {type: String, required:true},
    value: {type: String, required:true}
})

const inventorySchema =new Schema<tInventory>({
    quantity: {type: Number, required:true},
    inStock: {type: Boolean, required:true}
})


const productSchema =new Schema<product>({
    name: {type: String, required:true},
    description: {type: String, required:true},
    price: {type: Number, required:true},
    category: {type: String, required:true},
    tags: {type: [String], required:true},
    variants:[variantSchema],
    
    inventory: {
        type: inventorySchema,
        required: true,
      },
      
 
})


export const productModel= model<product>("product", productSchema)

