// Library Imports
import React, { Component } from "react";
import moment from "moment";

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

    return (
      <Container>
        <Header>Market Data</Header>
        <Cell>
          <Key>Spot Price</Key>
          <Value>${data.current_price.usd}</Value>
        </Cell>
        <Cell>
          <Key>Total Volume</Key>
          <Value>${data.total_volume.usd}</Value>
        </Cell>
        <Cell>
          <Key>24H High / Low</Key>
          <Value>
            ${data.high_24h.usd} / ${data.low_24h.usd}
          </Value>
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
