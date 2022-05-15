import { SET_USER, RESET_USER } from "./types";

const initialState = {
  email: "",
  profileImage: "",
  name: "",
  verifierId: "",
  verifier: "",
  typeOfLogin: "",
  aggregateVerifier: "",
  hexa: "",
  users: [],
  userId: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_USER: {
      if (payload?.typeOfLogin === "google") {
        return {
          ...state,
          email: payload.email ? payload.email : state.email,
          name: payload.name ? payload.name : state.name,
          profileImage: payload.profileImage
            ? payload.profileImage
            : state.profileImage,
          aggregateVerifier: payload.aggregateVerifier
            ? payload.aggregateVerifier
            : state.aggregateVerifier,
          typeOfLogin: payload.typeOfLogin
            ? payload.typeOfLogin
            : state.typeOfLogin,
          verifier: payload.verifier ? payload.verifier : state.verifier,
          verifierId: payload.verifierId
            ? payload.verifierId
            : state.verifierId,
          hexa: payload.hexa ? payload.hexa : state.hexa,
          users: payload.users ? payload.users : state.users,
          userId: payload.userId ? payload.userId : state.userId,
        };
      } else {
        return {
          email: payload.email ? payload.email : state.email,
          name: payload.name ? payload.name : state.name,
          profileImage: payload.profileImage
            ? payload.profileImage
            : state.profileImage,
          aggregateVerifier: payload.aggregateVerifier
            ? payload.aggregateVerifier
            : state.aggregateVerifier,
          typeOfLogin: payload.typeOfLogin
            ? payload.typeOfLogin
            : state.typeOfLogin,
          verifier: payload.verifier ? payload.verifier : state.verifier,
          verifierId: payload.verifierId
            ? payload.verifierId
            : state.verifierId,

          hexa: payload.hexa ? payload.hexa : state.hexa,
          users: payload.users ? payload.users : state.users,
          userId: payload.userId ? payload.userId : state.userId,
        };
      }
    }

    case RESET_USER:
      return {
        ...state,
        email: "",
        profileImage: "",
        name: "",
        verifierId: "",
        verifier: "",
        typeOfLogin: "",
        aggregateVerifier: "",
        hexa: "",
        users: [],
        userId: null,
      };

    default:
      return state;
  }
};

export default authReducer;
