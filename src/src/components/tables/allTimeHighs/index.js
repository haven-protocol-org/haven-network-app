// Library Imports
import React, { Component } from "react";
import moment from "moment";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class AllTimeHighs extends Component {
  static defaultProps = {
    data: {
      ath: {},
      ath_change_percentage: {},
      ath_date: {},
    },
  };
  render() {
    const { data } = this.props;

    return (
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
    );
  }
}

export default AllTimeHighs;
