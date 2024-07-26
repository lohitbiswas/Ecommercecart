import { Request, Response } from 'express';
import { updateOrAddCart } from '@services/cart/update-or-add-cart';

export const updateOrAddCartController = async (req: Request, res: Response): Promise<void> => {
  try {
    const cartId = req.params.id;
    const { productId, quantity } = req.body;
    const updatedCart = await updateOrAddCart(cartId, productId);
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update or add item to cart', error });
  }
};
