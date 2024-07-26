import mongoose, { Schema, Document } from 'mongoose';

export interface IRecommendation extends Document {
  productId: string;
  recommendedProductId: string;
}

const RecommendationSchema: Schema<IRecommendation> = new Schema(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    recommendedProductId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);

export default mongoose.model<IRecommendation>('Recommendation', RecommendationSchema, 'recommendations');
