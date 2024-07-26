import { Request, Response } from 'express';
import { deleteProduct } from '@services/product/deleteProduct';

export const deleteProductController = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.id;
    await deleteProduct(productId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error });
  }
};
