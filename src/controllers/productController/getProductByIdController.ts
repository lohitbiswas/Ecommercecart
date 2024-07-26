import { Request, Response } from 'express';
import { getProductById } from '@services/product/getProductById';

export const getProductByIdController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    const product = await getProductById(productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get product', error });
  }
};
