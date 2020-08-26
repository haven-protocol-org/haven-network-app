// Library Imports
import React, { Component } from "react";
import moment from "moment";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class MarketData extends Component {
  static defaultProps = {
    data: {
      current_price: {},
      ath: {},
      ath_change_percentage: {},
      ath_date: {},
      atl: {},
      atl_change_percentage: {},
      atl_date: {},
      total_volume: {},
      market_cap_rank: null,
      low_24h: {},
      high_24h: {},
      price_change_24h: null,
      price_change_percentage_24h: null,
      price_change_percentage_7d: null,
      price_change_percentage_14d: null,
      price_change_percentage_30d: null,
      price_change_percentage_60d: null,
      price_change_percentage_200d: null,
      price_change_percentage_1y: null,
      price_change_24h_in_currency: {},
      price_change_percentage_1h_in_currency: {},
      price_change_percentage_24h_in_currency: {},
      price_change_percentage_7d_in_currency: {},
      price_change_percentage_14d_in_currency: {},
      price_change_percentage_30d_in_currency: {},
      price_change_percentage_60d_in_currency: {},
      price_change_percentage_200d_in_currency: {},
      price_change_percentage_1y_in_currency: {},
    },
  };
  render() {
    console.log("Market Data", this.props.data);
    const { data } = this.props;

    return (
      <>
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

        <Container>
          <Header>All Time Highs</Header>
          <Cell>
            <Key>Price</Key>
            <Value>${data.ath.usd}</Value>
          </Cell>
          <Cell>
            <Key>Percentage</Key>
            <Value>
              {data.ath_change_percentage.usd === undefined
                ? null
                : data.ath_change_percentage.usd.toFixed(2) + "%"}
            </Value>
          </Cell>
          <Cell>
            <Key>Date</Key>
            <Value>
              {data.ath_date.usd === null
                ? null
                : moment(data.ath_date.usd).format("MMM Do Y")}
            </Value>
          </Cell>
        </Container>

        <Container>
          <Header>All Time Lows</Header>
          <Cell>
            <Key>Price</Key>
            <Value>
              {data.atl.usd === undefined ? null : data.atl.usd.toFixed(2)}
            </Value>
          </Cell>
          <Cell>
            <Key>Percentage</Key>
            <Value>
              {data.atl_change_percentage.usd === undefined
                ? null
                : data.atl_change_percentage.usd.toFixed(2) + "%"}
            </Value>
          </Cell>
          <Cell>
            <Key>Date</Key>
            <Value>
              {data.atl_date.usd === null
                ? null
                : moment(data.atl_date.usd).format("MMM Do Y")}
            </Value>
          </Cell>
        </Container>
      </>
    );
  }
}

export default MarketData;
