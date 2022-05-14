import { SET_USER, RESET_USER } from "./userTypes";

const initialState = {
  email: "",
  user_name: "",
  mobile: "",
  name: "",
  profile: "",
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER:
      return {
        ...state,
        email: payload.email ? payload.email : state.email,
        user_name: payload.user_name ? payload.user_name : state.user_name,
        name: payload.name ? payload.name : state.name,
        mobile: payload.mobile ? payload.mobile : state.mobile,
        isLoggedIn: true,
      };
    case RESET_USER:
      return {
        ...state,
        email: "",
        user_name: "",
        mobile: "",
        name: "",
        profile: "",
        isLoggedIn: false,
      };

    default:
      return state;
  }
};

export default authReducer;
