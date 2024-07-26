import RecommendationModel from '@modules/recommendation/schema';
import { IRecommendation } from '@modules/recommendation/model';

export const createRecommendation = async (productId: string, recommendations: string[]): Promise<IRecommendation> => {
  const newRecommendation = new RecommendationModel({
    productId,
    recommendations,
  });
  return await newRecommendation.save();
};
