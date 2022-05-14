import { CHANGE_PAGE } from "./types";

export const changePageToStore = (page) => ({
  type: CHANGE_PAGE,
  payload: page,
});
