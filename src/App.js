// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";
import CirculatingSupply from "./src/components/charts/circulatingSupply";
import TotalSupply from "./src/components/charts/totalSupply";

const info = "https://network-api.havenprotocol.org/api/info";
const supply = "https://network-api.havenprotocol.org/api/circulationSupply";

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
    supply_coins: {},
  };

  componentDidMount() {
    axios.get(info).then((response) => {
      console.log("response", response);
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

    axios.get(supply).then((response) => {
      this.setState({
        supply_coins: response.data.supply_coins,
      });
    });
  }

  render() {
    const { supply_coins, xusd_price, xusd_supply, xhv_supply } = this.state;
    return (
      <Router>
        <Navigation />
        <Layout state={this.state}>
          <CirculatingSupply data={supply_coins} />
          <TotalSupply
            xusd_price={xusd_price}
            xhv_supply={xhv_supply}
            xusd_supply={xusd_supply}
          />
        </Layout>
      </Router>
    );
  }
}

export default App;
