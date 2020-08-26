// Library Imports
import React, { Component } from "react";
import moment from "moment";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class AllTimeLows extends Component {
  static defaultProps = {
    data: {
      atl: {},
      atl_change_percentage: {},
      atl_date: {},
    },
  };
  render() {
    const { data } = this.props;

    return (
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
    );
  }
}

export default AllTimeLows;
