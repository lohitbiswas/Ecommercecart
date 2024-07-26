import { Request, Response } from 'express';
import { getCart } from '@services/cart/get-cart';

export const getCartController = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartId = req.params.id;
    const cart = await getCart(cartId);
    if (cart) {
      res.status(200).json(cart);
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get cart', error });
  }
};
