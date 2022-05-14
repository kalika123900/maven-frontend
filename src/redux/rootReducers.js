import { combineReducers } from "redux";
import pageReducer from "./page/reducer";
import userReducer from "./user/reducer";
import walletReducer from "./wallet/reducer";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
  page: pageReducer,
});

export default rootReducer;
