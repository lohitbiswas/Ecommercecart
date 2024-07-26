import { Router } from 'express';
import {
    getProductController,
    getProductByIdController,
    createProductController,
    deleteProductController,
  
} from '@controllers/productController';
import { validateUserAccessToken } from '@middleware/validate-user-access-token';
import {
  createProductValidator,
  getProductByIdValidator,
  deleteProductValidator,
  getProductRecommendationsValidator,
} from '@validations/productValidator/productValidator';

const productroute = Router();

productroute.post('/products', createProductValidator, validateUserAccessToken, createProductController);
productroute.get('/products', getProductController);
productroute.get('/products/:id', getProductByIdValidator, validateUserAccessToken, getProductByIdController);
productroute.delete('/products/:id', deleteProductValidator, validateUserAccessToken, deleteProductController);
//productroute.get('/products/:id/recommendations', getProductRecommendationsValidator, validateUserAccessToken, getProductRecommendations);

export default productroute;
