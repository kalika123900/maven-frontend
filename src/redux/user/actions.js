import { SET_USER, RESET_USER } from "./types";

export const setUserToStore = (user) => ({ type: SET_USER, payload: user });
export const resetUserFromStore = () => ({ type: RESET_USER });
