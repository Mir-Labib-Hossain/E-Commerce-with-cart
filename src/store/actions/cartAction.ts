import { ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_PRODUCT, REMOVE_FROM_CART } from "../contants/action-types";

export const addToCart = (product: IProduct) => {
  console.log("action - addToCart");
  
  return {
    type: ADD_TO_CART,
    payload: {
      product: product,
    },
  };
};

export const removeFromCart = (productId: number) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      productId: productId,
    },
  };
};

export const adjustQty = (productId: number, value: number) => {
  return {
    type: ADJUST_QTY,
    payload: {
      productId: productId,
      value: value,
    },
  };
};

export const loadCurrentProduct = (product: {}) => {
  return {
    action: LOAD_CURRENT_PRODUCT,
    payload: product,
  };
};
