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
import SpotAndMovingAveragePercent from "./src/components/charts/spotMADeviationPercent";
import SpotAndMovingAveragePrice from "./src/components/charts/spotMADeviationPrice";
// import OffshoreFees from "./src/components/charts/offshoreFees";
// {<OffshoreFees data={supply_data} />}

// Tables
import MarketData from "./src/components/tables/marketData";
import AllTimeHighs from "./src/components/tables/allTimeHighs";
import AllTimeLows from "./src/components/tables/allTimeLows";
import Blockchain from "./src/components/tables/blockchain";

const info = "https://network-api.havenprotocol.org/api/info";
const supply = "https://network-api.havenprotocol.org/api/circulationSupply";

class App extends Component {
  state = {
    network: "",
    version: "",
    xUSD_Price: "",
    supply: {},
    coingecko: {},
    blockchain: {},
    firstTabActive: true,
    secondTabActive: false,
    thirdTabActive: false,
  };

  componentDidMount() {
    axios.get(info).then((response) => {
      const { bc, coingecko, db_lastblock } = response.data;
      console.log("coingecko", coingecko);

      this.setState({
        data: response.data,
        version: bc.result.version,
        network: bc.result.nettype,
        xusd_price: db_lastblock.pricing_record.xUSD,
        xusd_supply: db_lastblock.supply.xUSD,
        xhv_supply: db_lastblock.supply.XHV,
        xhv_spot: coingecko.tickers[3].last,
        coingecko: coingecko,
        blockchain: bc,
        last_block: db_lastblock,
      });
    });

    axios.get(supply).then((response) => {
      this.setState({
        supply: response.data.supply_coins,
        supply_data: response.data,
      });
    });
  }

  firstTab = () => {
    this.setState({
      firstTabActive: true,
      secondTabActive: false,
      thirdTabActive: false,
    });
  };

  secondTab = () => {
    this.setState({
      firstTabActive: false,
      secondTabActive: true,
      thirdTabActive: false,
    });
  };

  thirdTab = () => {
    this.setState({
      firstTabActive: false,
      secondTabActive: false,
      thirdTabActive: true,
    });
  };

  render() {
    const {
      firstTabActive,
      secondTabActive,
      thirdTabActive,
      supply,
      coingecko,
      supply_data,
      blockchain,
    } = this.state;
    const { market_data } = coingecko;

    return (
      <Router>
        <Navigation />
        <Layout state={this.state}>
          <Tab
            firstTabLabel="Activity"
            firstTabState={firstTabActive}
            firstTabClickEvent={this.firstTab}
            secondTabLabel="Prices"
            secondTabState={secondTabActive}
            secondTabClickEvent={this.secondTab}
            thirdTabLabel="Protocol"
            thirdTabState={thirdTabActive}
            thirdTabClickEvent={this.thirdTab}
          />
          {firstTabActive && (
            <>
              <MarketCapAssets data={supply_data} />
              <InflationDeflationImpact data={supply_data} />
              <SpotAndMovingAveragePercent data={supply_data} />
              <SpotAndMovingAveragePrice data={supply_data} />

              <CirculatingSupply data={supply} />
            </>
          )}

          {secondTabActive && (
            <>
              <MarketData data={market_data} />
              <AllTimeHighs data={market_data} />
              <AllTimeLows data={market_data} />
            </>
          )}
          {thirdTabActive && (
            <>
              <Blockchain data={blockchain} />
            </>
          )}
        </Layout>
      </Router>
    );
  }
}

export default App;
