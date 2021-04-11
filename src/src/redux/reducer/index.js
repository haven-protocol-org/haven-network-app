import { combineReducers } from "redux";
import fetchData from "./fetchData";

const rootReducer = combineReducers({
  fetchData,
});

export default rootReducer;
