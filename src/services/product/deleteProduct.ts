import ProductModel from '@modules/product/schema';

export const deleteProduct = async (productId: string): Promise<void> => {
  await ProductModel.findByIdAndDelete(productId).exec();
};
