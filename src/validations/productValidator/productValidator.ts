// create celebrate with joi validation for craete product fields name, description, creater

import { check } from 'express-validator';

export const createProductValidator = [
  check('pname').notEmpty().withMessage('Product name is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('colour').notEmpty().withMessage('Colour is required'),
  check('type').notEmpty().withMessage('Type is required'),
];

export const getProductByIdValidator = [
  check('id').isMongoId().withMessage('Invalid product ID'),
];

export const deleteProductValidator = [
  check('id').isMongoId().withMessage('Invalid product ID'),
];

export const getProductRecommendationsValidator = [
  check('id').isMongoId().withMessage('Invalid product ID'),
];


// write json input for create product
// {
//   "name": "string",
//   "description": "string"
// }