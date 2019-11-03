import { CART_ADD, CART_REMOVE } from '../../utils/constats';

export const addCart = data => ({
  type: CART_ADD,
  payload: data,
});

export const removeCart = id => ({
  type: CART_REMOVE,
  payload: id,
});
