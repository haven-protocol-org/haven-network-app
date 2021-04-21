import { FETCH_ASSETS } from "../types/index.js";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_ASSETS:
      return action.payload;
    default:
      return state;
  }
}
