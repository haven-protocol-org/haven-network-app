// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";
import Tab from "./src/components/tab/index.js";

// Charts
import CirculatingSupply from "./src/components/charts/circulatingSupply";
import MarketCapAssets from "./src/components/charts/marketCapAssets";
import InflationDeflationImpact from "./src/components/charts/inflationDeflationImpact";
import OffshoreFees from "./src/components/charts/offshoreFees";
import SpotAndMovingAveragePercent from "./src/components/charts/spotMADeviationPercent";
import SpotAndMovingAveragePrice from "./src/components/charts/spotMADeviationPrice";

// Tables
import MarketData from "./src/components/tables/marketData";
import AllTimeHighs from "./src/components/tables/allTimeHighs";
import AllTimeLows from "./src/components/tables/allTimeLows";

const info = "https://network-api.havenprotocol.org/api/info";
const supply = "https://network-api.havenprotocol.org/api/circulationSupply";

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
    supply_coins: {},
    coingecko: {},
    firstTabActive: true,
    secondTabActive: false,
  };

  componentDidMount() {
    axios.get(info).then((response) => {
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
      });
  }

  firstTab = () => {
    this.setState({
      firstTabActive: true,
      secondTabActive: false,
    });
  };

  secondTab = () => {
    this.setState({
      firstTabActive: false,
      secondTabActive: true,
    });
  };

  render() {
    const {
      firstTabActive,
      secondTabActive,
      supply_coins,
      coingecko,
    } = this.state;

    const { market_data } = coingecko;

    return (
      <Router>
        <Navigation />
        <Layout state={this.state}>
          <Tab
            firstTabLabel="Network"
            firstTabState={firstTabActive}
            firstTabClickEvent={this.firstTab}
            secondTabLabel="Prices"
            secondTabState={secondTabActive}
            secondTabClickEvent={this.secondTab}
          />
          {firstTabActive ? (
            <>
              <CirculatingSupply data={supply_coins} />
              <MarketCapAssets />
              <InflationDeflationImpact />
              <SpotAndMovingAveragePercent />
              <SpotAndMovingAveragePrice />
              <OffshoreFees />
            </>
          ) : (
            <>
              <MarketData data={market_data} />
              <AllTimeHighs data={market_data} />
              <AllTimeLows data={market_data} />
            </>
          )}
        </Layout>
      </Router>
    );
  }
}

export default App;
