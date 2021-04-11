// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Data, Grid, Value, Label, Statistic } from "./styles";

class WebStatistic extends Component {
  render() {
    const { prices } = this.props;
    let networkValue = "...";
    let movingAverage = "...";
    let xhvCirculatingSupply = "...";
    let xusdCirculatingSupply = "...";

    if (prices !== undefined) {
      movingAverage = `${"$"}${prices.pricing_record.xUSD.toFixed(4)}`;
      xhvCirculatingSupply = prices.supply.XHV.toFixed(4);
      xusdCirculatingSupply = prices.supply.XHV.toFixed(4);

      const marketCap =
        prices.pricing_record.xUSD * prices.supply.XHV + prices.supply.xUSD;

      networkValue = `${"$"}${marketCap.toFixed(4)}`;
    }
    return (
      <Grid>
        <Statistic>
          <Data>
            <Value>{movingAverage}</Value>
            <Label>Haven 24h MA Price</Label>
          </Data>
        </Statistic>
        <Statistic>
          <Data>
            <Value>{xhvCirculatingSupply}</Value>
            <Label>XHV Circulating Supply</Label>
          </Data>
        </Statistic>
        <Statistic>
          <Data>
            <Value>{xusdCirculatingSupply}</Value>
            <Label>xUSD Circulating Supply</Label>
          </Data>
        </Statistic>
        <Statistic>
          <Data>
            <Value>{networkValue}</Value>
            <Label>Total Network Value</Label>
          </Data>
        </Statistic>
      </Grid>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
  prices: state.getInfo.db_lastblock,
});

export default connect(mapStateToProps)(WebStatistic);
