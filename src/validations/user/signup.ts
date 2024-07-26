// import { celebrate, Joi } from 'celebrate';

// export const userSignup = celebrate({
//   body: Joi.object({
//     firstName: Joi.string().required().min(3),
//     lastName: Joi.string().required().min(3),
//     email: Joi.string().email().required().lowercase(),
//     password: Joi.string()
//       .required()
//       ,
//   }),
// });

// write json input for user signup
// {
//   "firstName": "string",
//   "lastName": "string",
//   "email": "string",
//   "password": "string"
// }

// validators/userValidator.ts

import { body } from 'express-validator';

export const userSignup = () => {
  return [
    body('firstName')
      .notEmpty()
      .withMessage('First name is required.')
      .isString()
      .withMessage('First name must be a string.'),
    body('lastName')
      .notEmpty()
      .withMessage('Last name is required.')
      .isString()
      .withMessage('Last name must be a string.'),
    body('email')
      .notEmpty()
      .withMessage('Email is required.')
      .isEmail()
      .withMessage('Must be a valid email address.'),
    body('password')
      .notEmpty()
      .withMessage('Password is required.')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long.')
  ];
};
