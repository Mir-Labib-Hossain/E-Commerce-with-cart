import { SET_LOADER_VALUE } from "../contants/action-types";

export const setLoaderValue = (value: number) => {
  return {
    type: SET_LOADER_VALUE,
    payload: { value: value },
  };
};
