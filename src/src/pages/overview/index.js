// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header";

// Charts
import MobileStatistics from "../../components/statistics/mobile";
import WebStatistic from "../../components/statistics/web";
import CirculatingSupply from "../../components/charts/circulatingSupply";
import InflationDeflationImpact from "../../components/charts/inflationDeflationImpact";
import MarketCapAssets from "../../components/charts/marketCapAssets";
import SpotAndMovingAveragePercent from "../../components/charts/spotMADeviationPercent";
import SpotAndMovingAveragePrice from "../../components/charts/spotMADeviationPrice";

class Assets extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container>
        <Header title="Insights" description="Usage and activity statistics" />
        <WebStatistic />
        <MobileStatistics />
        <MarketCapAssets />
        <InflationDeflationImpact />
        <SpotAndMovingAveragePercent />
        <SpotAndMovingAveragePrice />
        <CirculatingSupply />
      </Container>
    );
  }
}

export default Assets;
