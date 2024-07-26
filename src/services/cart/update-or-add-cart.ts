import CartModel from '@modules/cart/schema';
import { ICart } from '@modules/cart/model';

/**
 * Add or update items in a cart.
 * @param cartId - The ID of the cart to update.
 * @param items - The items to add or update in the cart.
 * @returns The updated cart.
 */
export const updateOrAddCart = async (cartId: string, items: ICart['items']): Promise<ICart | null> => {
  // Find the cart by ID
  const cart = await CartModel.findById(cartId).exec();

  if (!cart) {
    throw new Error('Cart not found');
  }

  // Update the cart's items
  cart.items = items;

  // Save the updated cart
  await cart.save();
  return cart;
};
