import ProductModel from '@modules/product/schema';
import { IProduct } from '@modules/product/model';

export const createProduct = async (productData: IProduct): Promise<IProduct> => {
  const product = new ProductModel(productData);
  return await product.save();
};
