import { Request, Response } from 'express';
import { getRecommendation } from '@services/recommendation/getRecommendation';

export const createRecommendationController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const recommendations = await getRecommendation(productId);
    if (recommendations) {
      res.status(200).json(recommendations);
    } else {
      res.status(404).json({ message: 'Recommendations not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get recommendations', error });
  }
};
