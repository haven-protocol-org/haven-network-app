import { FETCH_DATA } from "../types/index.js";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
