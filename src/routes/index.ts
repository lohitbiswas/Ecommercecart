import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
//import { productRouter } from './product';
import cartrouter from './cartRoutes';
import recommendationrouter from './recommendationRoutes';

import productroute from './productRoutes';


const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/cart', cartrouter);
v1Router.use('/recommmendation',recommendationrouter);
v1Router.use('/product', productroute);
// All routes go here

export { v1Router };
