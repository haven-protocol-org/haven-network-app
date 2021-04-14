import { FETCH_INFO, FETCH_SUPPLY } from "../types/index.js";
import axios from "axios";

const haven = "https://network-api.havenprotocol.org/";
// const testnet = "api-testnet/";
const mainnet = "api/";
const info = "info";
const supply = "circulationSupply";

const infoAPI = `${haven}${mainnet}${info}`;
const supplyAPI = `${haven}${mainnet}${supply}?nbDatapoints=300`;

// Other method from Frontend Masters
export const getInfo = () => {
  return (dispatch) => {
    axios.get(infoAPI).then((response) => {
      dispatch({
        type: FETCH_INFO,
        payload: response.data,
      });
    });
  };
};

export const getSupply = () => {
  return (dispatch) => {
    axios.get(supplyAPI).then((response) => {
      dispatch({
        type: FETCH_SUPPLY,
        payload: response.data,
      });
    });
  };
};
