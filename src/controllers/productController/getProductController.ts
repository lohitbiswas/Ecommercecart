import { Request, Response } from 'express';
import { getProduct } from '@services/product/getProduct';

export const getProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await getProduct(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get product', error });
  }
};
