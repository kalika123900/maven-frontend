import { SET_WALLET, RESET_WALLET } from "./types";

const initialState = {
  publicAddress: "",
  torusReady: false,
  chainId: "",
  encryptionKey: "",
};

const walletReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_WALLET: {
      return {
        ...state,
        publicAddress: payload.publicAddress
          ? payload.publicAddress
          : state.publicAddress,
        torusReady: payload.torusReady ? true : false,
        chainId: payload.chainId ? payload.chainId : state.chainId,
        encryptionKey: payload.encryptionKey
          ? payload.encryptionKey
          : state.encryptionKey,
      };
    }

    case RESET_WALLET:
      return {
        publicAddress: "",
        torusReady: false,
        chainId: "",
        encryptionKey: "",
      };

    default:
      return state;
  }
};

export default walletReducer;
