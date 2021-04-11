import { FETCH_DATA } from "../types/index.js";

const URL = "https://jsonplaceholder.typicode.com";

export const fetchData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});
