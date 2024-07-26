import CartModel from '@modules/cart/schema';
import { ICart } from '@modules/cart/model';

/**
 * Get a cart by ID.
 * @param cartId - The ID of the cart to retrieve.
 * @returns The cart if found, or null if not found.
 */
export const getCart = async (cartId: string): Promise<ICart | null> => {
  const cart = await CartModel.findById(cartId).exec();
  return cart;
};
