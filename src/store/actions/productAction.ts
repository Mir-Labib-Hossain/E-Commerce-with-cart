import { Dispatch } from "redux";
import fakeStoreApi from "../../apis/fakeStore";
import { REMOVE_SELECTED_PRODUCT, SELECTED_PRODUCT, SET_PRODUCTS } from "./../contants/action-types";
import { setLoaderValue } from "./loaderAction";

export const fetchProducts =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoaderValue(30));
    const response = await fakeStoreApi.get("./products");
    dispatch(setLoaderValue(60));
    dispatch(setProducts(response.data));
    dispatch(setLoaderValue(80));
    dispatch(setLoaderValue(100));
  };

export const fetchSelectedProduct =
  (productId: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    dispatch(setLoaderValue(40));
    const response = await fakeStoreApi.get(`/products/${productId}`);
    dispatch(setLoaderValue(60));
    dispatch(selectedProduct(response.data));
    dispatch(setLoaderValue(80));
    dispatch(setLoaderValue(100));
  };

export const setProducts = (products: IProducts) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product: IProduct) => {
  return {
    type: SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProducts = (product: {}) => {
  return {
    type: REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};
