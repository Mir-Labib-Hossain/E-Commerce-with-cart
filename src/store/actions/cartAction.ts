import { Dispatch } from "redux";
import { ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_PRODUCT, REMOVE_FROM_CART } from "../contants/action-types";

export const addToCart =
  (product: IProduct) =>
  async (dispatch: Dispatch, getState: () => IStore): Promise<void> => {
    const cart = getState().persistedReducers.cartReducer.cart;
    console.log("cartaction "+cart);

    // check if the product already exists inCart
    const inCart = cart.find((cartProduct: any) => cartProduct.id === product.id);
    const updatedCartProducts = inCart ? cart.map((cartProduct: any) => (cartProduct.id === product.id ? { ...cartProduct, qty: cartProduct.qty + 1 } : cartProduct)) : [...cart, { ...product, qty: 1 }];

    dispatch({
      type: ADD_TO_CART,
      payload: {
        updatedCartProducts: updatedCartProducts,
      },
    });
  };

export const removeFromCart = 
(productId: number) => 
  async (dispatch: Dispatch, getState: () => IStore): Promise<void> => {
    const cart = getState().persistedReducers.cartReducer.cart;
     const updatedCartProducts = cart.filter(cartProduct => cartProduct.id !== productId)

    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        updatedCartProducts: updatedCartProducts,
      },
    });
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
