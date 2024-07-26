import { Document, Types } from 'mongoose';

export interface IProduct extends Document {
  pname: string;
  description: string;
  type: string;
  colour: string;
}
