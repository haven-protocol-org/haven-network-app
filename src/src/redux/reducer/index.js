import { combineReducers } from "redux";
import getInfo from "./getInfo";
import getSupply from "./getSupply";
import getAssets from "./getAssets";

const rootReducer = combineReducers({
  getInfo,
  getSupply,
  getAssets,
});

export default rootReducer;
