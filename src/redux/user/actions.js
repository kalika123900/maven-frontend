import { SET_USER, RESET_USER } from "./types";

export const SETUSER_ACTION = (user) => ({ type: SET_USER, payload: user });
export const RESETUSER_ACTION = () => ({ type: RESET_USER });
