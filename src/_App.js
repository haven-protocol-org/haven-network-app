// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";

// Components
import Layout from "./src/layout";
import Stats from "./src/pages/stats";
import Navigation from "./src/components/navigation/index.js";
import Tab from "./src/components/tab/index.js";
import Sidebar from "./src/components/sidebar/index.js";
import Header from "./src/components/header/index.js";

// Charts
import CirculatingSupply from "./src/components/charts/circulatingSupply";
import MarketCapAssets from "./src/components/charts/marketCapAssets";
import InflationDeflationImpact from "./src/components/charts/inflationDeflationImpact";
import SpotAndMovingAveragePercent from "./src/components/charts/spotMADeviationPercent";
import SpotAndMovingAveragePrice from "./src/components/charts/spotMADeviationPrice";

// Tables
import MarketData from "./src/components/tables/marketData";
import AllTimeHighs from "./src/components/tables/allTimeHighs";
import AllTimeLows from "./src/components/tables/allTimeLows";
import Blockchain from "./src/components/tables/blockchain";

// Pages
import Overview from "./src/pages/overview";
import Assets from "./src/pages/assets";
// import History from "./src/pages/history";
// import Protocol from "./src/pages/protocol";

// Testnet API Endpoints
const haven = "https://network-api.havenprotocol.org/";
const testnet = "api-testnet/";
const mainnet = "api/";
const info = "info";
const supply = "circulationSupply";

const getInfo = `${haven}${testnet}${info}`;
const getSupply = `${haven}${testnet}${supply}`;

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
    axios.get(getInfo).then((response) => {
      const { bc, coingecko, db_lastblock } = response.data;

      this.setState({
        data: response.data,
        version: bc.result.version,
        network: bc.result.nettype,
        xusd_price: db_lastblock.pricing_record.xUSD,
        xusd_supply: db_lastblock.supply.xUSD,
        xhv_supply: db_lastblock.supply.XHV,
        xhv_spot: coingecko.tickers[1].last,
        coingecko: coingecko,
        blockchain: bc,
        last_block: db_lastblock,
      });
    });

    // <CirculatingSupply data={supply} />

    axios.get(getSupply).then((response) => {
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
        <Layout>
          <Sidebar />
          <Router>
            <Route path="/" exact component={Overview} />
            <Route path="/assets" exact component={Assets} />
          </Router>
        </Layout>
      </Router>
    );
  }
}

export default App;

// <Layout>
//   <Sidebar />
//
//   <Stats state={this.state} supply={supply}>
//     <Header title="Overview" description="Overview of network" />
//     <Tab
//       firstTabLabel="Activity"
//       firstTabState={firstTabActive}
//       firstTabClickEvent={this.firstTab}
//       secondTabLabel="Prices"
//       secondTabState={secondTabActive}
//       secondTabClickEvent={this.secondTab}
//       thirdTabLabel="Protocol"
//       thirdTabState={thirdTabActive}
//       thirdTabClickEvent={this.thirdTab}
//     />
//     {firstTabActive && (
//       <>
//         <MarketCapAssets data={supply_data} />
//         <InflationDeflationImpact data={supply_data} />
//         <SpotAndMovingAveragePercent data={supply_data} />
//         <SpotAndMovingAveragePrice data={supply_data} />
//         <CirculatingSupply data={supply} />
//       </>
//     )}
//     {secondTabActive && (
//       <>
//         <MarketData data={market_data} />
//         <AllTimeHighs data={market_data} />
//         <AllTimeLows data={market_data} />
//       </>
//     )}
//     {thirdTabActive && <Blockchain data={blockchain} />}
//   </Stats>
// </Layout>;
