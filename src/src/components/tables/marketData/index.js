// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class MarketData extends Component {
  render() {
    let to = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const { coingecko } = this.props.data;
    let totalVolume;
    let high;
    let low;
    let change;
    let currentPrice;

    if (coingecko !== undefined) {
      currentPrice = to.format(coingecko.market_data.current_price.usd);
      totalVolume = to.format(coingecko.market_data.total_volume.usd);
      high = to.format(coingecko.market_data.high_24h.usd);
      low = to.format(coingecko.market_data.low_24h.usd);
      change = coingecko.market_data.price_change_24h;
    }

    return (
      <Container>
        <Header>Market Data</Header>
        <Cell>
          <Key>Spot Price</Key>
          <Value>{currentPrice}</Value>
        </Cell>
        <Cell>
          <Key>Total Volume</Key>
          <Value>{totalVolume}</Value>
        </Cell>
        <Cell>
          <Key>24H High</Key>
          <Value>{high}</Value>
        </Cell>
        <Cell>
          <Key>24H Low</Key>
          <Value>{low}</Value>
        </Cell>
        <Cell>
          <Key>24h Change</Key>
          <Value>{change + "%"}</Value>
        </Cell>
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(MarketData);
