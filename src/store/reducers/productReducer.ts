import {  REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./../contants/action-types";
const initialState = {
  products: [{}],
};

interface IAction {
  type: string;
  payload: IProduct | IProducts;
}

export const productReducer = (state = initialState, { type, payload }: IAction) => {
   
  switch (type) {
    case SET_PRODUCTS:
      return { ...state, products: payload };
   
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }: IAction) => {
  switch (type) {
    case SELECTED_PRODUCT:
      return { ...state, product: payload };

    case REMOVE_SELECTED_PRODUCT:
      return {};

    default:
      return state;
  }
};
