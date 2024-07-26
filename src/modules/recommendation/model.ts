import { Document } from 'mongoose';

export interface IRecommendation extends Document {
  productId: string;
  recommendedProductId: string;
}
