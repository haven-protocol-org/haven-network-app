// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";

const stagenet = "https://network-api.havenprotocol.org/api-stagenet/info";
const mainnet = "https://network-api.havenprotocol.org/api/info";

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
  };
  componentDidMount() {
    axios.get(`${stagenet}`).then((response) => {
      // handle success

      const { bc, coingecko, db_lastblock, db_lastblock24 } = response.data;

      console.log("MA", response.data);

      this.setState({
        version: bc.result.version,
        network: bc.result.nettype,
        xusd_price: db_lastblock.pricing_record.xUSD,
        xusd_supply: db_lastblock.supply.xUSD,
        xhv_supply: db_lastblock.supply.XHV,
        xhv_spot: coingecko.tickers[4].last,
      });
    });
  }

  render() {
    return (
      <>
        <Router>
          <Navigation
            network={this.state.network}
            version={this.state.version}
          />
          <Layout state={this.state} />
        </Router>
      </>
    );
  }
}

export default App;
