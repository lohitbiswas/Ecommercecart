import { check } from 'express-validator';

export const createCartValidator = [
  check('userId').notEmpty().withMessage('User ID is required'),
];

export const getCartByIdValidator = [
  check('id').isMongoId().withMessage('Invalid cart ID'),
];

export const addOrUpdateCartItemValidator = [
  check('id').isMongoId().withMessage('Invalid cart ID'),
  check('items').isArray().withMessage('Items should be an array'),
];
