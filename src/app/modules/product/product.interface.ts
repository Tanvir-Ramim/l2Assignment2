import { Schema, model, connect } from 'mongoose';

export type tVariants = {
  type: string;
  value: string;
}

export type  tInventory ={
     quantity: number;
     inStock : boolean
}

export type product={
       name: string ;
       description: string;
       price: number;
       category : string;
       tags: string[];
       variants: tInventory[]
       inventory: tInventory
}
