import { check } from 'express-validator';

export const createRecommendationValidator = [
  check('productId').notEmpty().withMessage('Product ID is required'),
  check('recommendedProductId').notEmpty().withMessage('Recommended Product ID is required'),
];

export const getRecommendationsByProductIdValidator = [
  check('productId').isMongoId().withMessage('Invalid product ID'),
];
