import { Router } from 'express';
import {
    createRecommendationController,
    getRecommendationsController,
} from '@controllers/recommendationController';
import { validateUserAccessToken } from '@middleware/validate-user-access-token';
import {
  createRecommendationValidator,
  getRecommendationsByProductIdValidator,
} from '@validations/recommendationValidator/recommendationValidator';

const recommendationrouter = Router();

recommendationrouter.post('/recommendations', createRecommendationValidator, validateUserAccessToken, createRecommendationController);
recommendationrouter.get('/recommendations/:productId', getRecommendationsByProductIdValidator, validateUserAccessToken, getRecommendationsController);

export default recommendationrouter;
