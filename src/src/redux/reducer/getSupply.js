import { FETCH_SUPPLY } from "../types/index.js";

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SUPPLY:
      return action.payload;
    default:
      return state;
  }
}
