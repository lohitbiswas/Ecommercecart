import { Request, Response } from 'express';
import { createCart } from '@services/cart/create-cart';

export const createCartController = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = req.body.userId;
    const cart = await createCart(userId);
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create cart', error });
  }
};
