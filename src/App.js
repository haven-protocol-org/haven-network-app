// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";
import CirculatingSupply from "./src/components/charts/circulatingSupply";
import MarketData from "./src/components/tables/market/index.js";

const info = "https://network-api.havenprotocol.org/api/info";
const supply = "https://network-api.havenprotocol.org/api/circulationSupply";

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
    supply_coins: {},
    coingecko: {},
  };

  componentDidMount() {
    axios.get(info).then((response) => {
      console.log("INFO", response);
      // handle success
      const { bc, coingecko, db_lastblock } = response.data;

      this.setState({
        version: bc.result.version,
        network: bc.result.nettype,
        xusd_price: db_lastblock.pricing_record.xUSD,
        xusd_supply: db_lastblock.supply.xUSD,
        xhv_supply: db_lastblock.supply.XHV,
        xhv_spot: coingecko.tickers[4].last,
        coingecko: coingecko,
      });
    });

    axios.get(supply).then((response) => {
      this.setState({
        supply_coins: response.data.supply_coins,
      });
      console.log("SUPPLY", response);
    });

    axios
      .get("https://api.coingecko.com/api/v3/coins/haven")
      .then((response) => {
        this.setState({
          coingecko: response,
        });
        console.log("COINGECKO", response);
      });
  }

  render() {
    // const { supply_coins } = this.state;
    // {<CirculatingSupply data={supply_coins} />}
    return (
      <Router>
        <Navigation />
        <Layout state={this.state}>
          <MarketData data={this.state.coingecko.market_data} />
        </Layout>
      </Router>
    );
  }
}

export default App;
