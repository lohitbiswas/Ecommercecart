import { Request, Response } from 'express';
import { createProduct } from '@services/product/createProduct';

export const createProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productData = req.body;
    const product = await createProduct(productData);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create product', error });
  }
};
