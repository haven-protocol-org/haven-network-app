// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class MarketData extends Component {
  static defaultProps = {
    data: {
      current_price: {},
      total_volume: {},
      low_24h: {},
      high_24h: {},
      price_change_percentage_24h: null,
    },
  };
  render() {
    const { data } = this.props;
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",

      // These options are needed to round to whole numbers if that's what you want.
      //minimumFractionDigits: 0,
      //maximumFractionDigits: 0,
    });

    return (
      <Container>
        <Header>Market Data</Header>
        <Cell>
          <Key>Spot Price</Key>
          <Value>${data.current_price.usd}</Value>
        </Cell>
        <Cell>
          <Key>Total Volume</Key>
          <Value>{formatter.format(data.total_volume.usd)}</Value>
        </Cell>
        <Cell>
          <Key>24H High</Key>
          <Value>${data.high_24h.usd}</Value>
        </Cell>
        <Cell>
          <Key>24H Low</Key>
          <Value>${data.low_24h.usd}</Value>
        </Cell>
        <Cell>
          <Key>24h Change</Key>
          <Value>
            {data.price_change_percentage_24h === null
              ? null
              : data.price_change_percentage_24h.toFixed(2) + "%"}
          </Value>
        </Cell>
      </Container>
    );
  }
}

export default MarketData;
