import ProductModel from '@modules/product/schema';
import { IProduct } from '@modules/product/model';

export const getProduct = async (productId: string): Promise<IProduct | null> => {
  return await ProductModel.findById(productId).exec();
};
