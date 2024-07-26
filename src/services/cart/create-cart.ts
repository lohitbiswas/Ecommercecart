import CartModel from '@modules/cart/schema';
import { ICart } from '@modules/cart/model';

/**
 * Create a new cart.
 * @param userId - The ID of the user creating the cart.
 * @returns The created cart.
 */
export const createCart = async (userId: string): Promise<ICart> => {
  const newCart = new CartModel({
    userId,
    items: [], // Initialize with an empty items array
  });

  await newCart.save();
  return newCart;
};
