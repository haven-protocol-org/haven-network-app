import { combineReducers } from "redux";
import getInfo from "./getInfo";
import getSupply from "./getSupply";

const rootReducer = combineReducers({
  getInfo,
  getSupply,
});

export default rootReducer;
