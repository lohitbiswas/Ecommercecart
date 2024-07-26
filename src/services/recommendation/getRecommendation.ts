import RecommendationModel from '@modules/recommendation/schema';
import { IRecommendation } from '@modules/recommendation/model';

export const getRecommendation = async (productId: string): Promise<IRecommendation | null> => {
  return await RecommendationModel.findOne({ productId }).populate('recommendations').exec();
};
