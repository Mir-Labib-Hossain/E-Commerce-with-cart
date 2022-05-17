import { Dispatch } from "redux";
import { SET_CART } from "../contants/action-types";

export const addToCart = (product: IProduct) => (dispatch: Dispatch, getState: () => IStore) => {
  const cart = getState().persistedReducers.cartReducer.cart;

  // check if the product already exists inCart
  const inCart = cart.find((cartProduct: any) => cartProduct.id === product.id);
  const updatedCartProducts = inCart ? cart.map((cartProduct: ICartProduct) => (cartProduct.id === product.id ? { ...cartProduct, qty: cartProduct.qty + 1 } : cartProduct)) : [...cart, { ...product, qty: 1 }];

  dispatch(setCart(updatedCartProducts));
};

export const removeFromCart = (productId: number) => (dispatch: Dispatch, getState: () => IStore) => {
  const cart = getState().persistedReducers.cartReducer.cart;
  const updatedCartProducts = cart.filter((cartProduct) => cartProduct.id !== productId);

  dispatch(setCart(updatedCartProducts));
};

export const adjustQty = (productId: number, value: number) => (dispatch: Dispatch, getState: () => IStore) => {
  const cart = getState().persistedReducers.cartReducer.cart;
  const updatedCartProducts = cart.map((cartProduct: ICartProduct) => (cartProduct.id === productId ? { ...cartProduct, qty: cartProduct.qty + value } : cartProduct));

  dispatch(setCart(updatedCartProducts));
};

export const setCart = (updatedCartProducts: ICartProducts) => {
  return {
    type: SET_CART,
    payload: updatedCartProducts,
  };
};
