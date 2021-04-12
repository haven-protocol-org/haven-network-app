// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Data, Grid, Value, Label, Statistic } from "./styles";

class WebStatistic extends Component {
  render() {
    let to = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const decimal = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "USD",
    });

    const { prices } = this.props;
    let networkValue = "...";
    let movingAverage = "...";
    let xhvCirculatingSupply = "...";
    let xusdCirculatingSupply = "...";

    if (prices !== undefined) {
      movingAverage = `${to.format(prices.pricing_record.xUSD.toFixed(2))}`;
      xhvCirculatingSupply = decimal.format(prices.supply.XHV.toFixed(2));
      xusdCirculatingSupply = decimal.format(prices.supply.xUSD.toFixed(2));

      const marketCap =
        prices.pricing_record.xUSD * prices.supply.XHV + prices.supply.xUSD;

      networkValue = to.format(marketCap.toFixed(2));
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
