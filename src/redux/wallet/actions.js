import { SET_WALLET, RESET_WALLET } from "./types";

export const setWalletToStore = (walletInfo) => {
  console.log(walletInfo);
  return {
    type: SET_WALLET,
    payload: walletInfo,
  };
};

export const resetWalletFromStore = () => ({
  type: RESET_WALLET,
});
