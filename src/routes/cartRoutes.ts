import { Router } from 'express';
import {
    createCartController,
    getCartController,
    updateOrAddCartController,
} from '@controllers/cartController';
import { validateUserAccessToken } from '@middleware/validate-user-access-token';
import {
  createCartValidator,
  getCartByIdValidator,
  addOrUpdateCartItemValidator,
} from '@validations/cartValidator/cartValidator';

const cartrouter = Router();

cartrouter.post('/cart', createCartValidator, validateUserAccessToken, createCartController);
cartrouter.get('/cart/:id', getCartByIdValidator, validateUserAccessToken, getCartController);
cartrouter.put('/cart/:id/items', addOrUpdateCartItemValidator, validateUserAccessToken, updateOrAddCartController);

export default cartrouter;
