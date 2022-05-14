import { DEFAULT_PAGE } from "../../routes";
import { CHANGE_PAGE } from "./types";

const initialState = {
  name: DEFAULT_PAGE,
};

export const pageReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_PAGE:
      return {
        ...state,
        name: payload,
      };

    default:
      return state;
  }
};

export default pageReducer;
