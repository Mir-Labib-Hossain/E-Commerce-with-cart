import { ADD_TO_CART, ADJUST_QTY, LOAD_CURRENT_PRODUCT, REMOVE_FROM_CART } from "./../contants/action-types";

interface ActionProps {
  type: {};
  payload: {
    updatedCartProducts?: ICartProducts;
    value?: number;
  };
}

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }: ActionProps) => {
  switch (type) {
    case ADD_TO_CART:
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: payload.updatedCartProducts,
      };

    case ADJUST_QTY:
      return state;

    case LOAD_CURRENT_PRODUCT:
      return state;

    default:
      return state;
  }
};
