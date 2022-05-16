import { SET_LOADER_VALUE } from "../contants/action-types";

interface IAction {
  type: {};
  payload: {
    value: number;
  };
}
const initialState = { value: 10 };

export const loaderReducer = (state = initialState, { type, payload }: IAction) => {
  switch (type) {
    case SET_LOADER_VALUE:
      return { value: payload.value };

    default:
      return state;
  }
};
