import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  pname: string;
  description: string;
  type: string;
  colour: string;
}

const ProductSchema: Schema<IProduct> = new Schema(
  {
    pname: { type: String, required: true, trim: true },
    description: { type: String, required: true, unique: true, trim: true },
    type: { type: String, required: true, trim: true },
    colour: { type: String, required: true, trim: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

export default mongoose.model<IProduct>('Product', ProductSchema, 'products');
