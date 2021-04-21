import { FETCH_INFO, FETCH_SUPPLY, FETCH_ASSETS } from "../types/index.js";
import axios from "axios";
import assetsAPI from "../../constants/mock.js";
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

export const getAssets = () => ({
  type: FETCH_ASSETS,
  payload: assetsAPI,
});
// export const getAssets = () => {
//   return (dispatch) => {
//     axios.get(assetsAPI).then((response) => {
//       dispatch({
//         type: FETCH_ASSETS,
//         payload: response.data,
//       });
//     });
//   };
// };
