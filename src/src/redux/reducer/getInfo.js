import { FETCH_INFO } from "../types/index.js";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_INFO:
      return action.payload;
    default:
      return state;
  }
}
