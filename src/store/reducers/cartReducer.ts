import { ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_PRODUCT, REMOVE_FROM_CART } from "./../contants/action-types";

interface ActionProps {
  type: {};
  payload: {
    product: ICartProduct;
    productId?: number;
    value?: number;
  };
}

const initialState = {
  cart: [{}],
};

export const cartReducer = (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case ADD_TO_CART:
      const product = payload.product;
      const cart = state.cart;
      // const inCart = cart.find((cartProduct: any) => cartProduct.id === product.id);
      const inCart = cart.find((cartProduct: any) => cartProduct.id === product.id);

      // cart.push(product);
      console.log("inCart :" + inCart);

      return {
        ...state,
        cart: inCart ? state.cart.map((cartProduct: any) => (cartProduct.id === product.id ? { ...cartProduct, qty: cartProduct.qty + 1 } : cartProduct)) : [...cart, { ...product, qty: 1 }],
      };

    case REMOVE_FROM_CART:
      return {};

    case ADJUST_QTY:
      return {};

    case LOAD_CURRENT_PRODUCT:
      return {};

    default:
      return state;
  }
};
