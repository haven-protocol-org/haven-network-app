// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";
import CirculatingSupply from "./src/components/charts/circulatingSupply";
import TotalSupply from "./src/components/charts/totalSupply";

const stagenet = "https://network-api.havenprotocol.org/api-stagenet/info";
const supply =
  "https://network-api.havenprotocol.org/api-stagenet/circulationSupply";

// https://network-api.havenprotocol.org/api/info
// https://network-api.havenprotocol.org/api/circulationSupply

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
    supply_coins: {},
  };
  componentDidMount() {
    axios.get(`${stagenet}`).then((response) => {
      // handle success

      const { bc, coingecko, db_lastblock } = response.data;

      this.setState({
        version: bc.result.version,
        network: bc.result.nettype,
        xusd_price: db_lastblock.pricing_record.xUSD,
        xusd_supply: db_lastblock.supply.xUSD,
        xhv_supply: db_lastblock.supply.XHV,
        xhv_spot: coingecko.tickers[4].last,
      });
    });

    axios.get(`${supply}`).then((response) => {
      this.setState({
        supply_coins: response.data.supply_coins,
      });
    });
  }

  render() {
    const { network, version, supply_coins } = this.state;
    return (
      <Router>
        <Navigation network={network} version={version} />
        <Layout state={this.state}>
          <CirculatingSupply data={supply_coins} />
          <TotalSupply
            xusd_price={2.4545}
            xhv_supply={382599.04}
            xusd_supply={330359.621}
          />
        </Layout>
      </Router>
    );
  }
}

export default App;
