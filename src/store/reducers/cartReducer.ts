import { SET_CART } from "./../contants/action-types";

interface CartActionProps {
  type: string;
  payload: ICartProducts;
}

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, { type, payload }: CartActionProps) => {
  switch (type) {
    case SET_CART:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};
