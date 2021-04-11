// Library Imports
import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class AllTimeLows extends Component {
  render() {
    let to = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const { coingecko } = this.props.data;
    let lowPrice;
    let lowPercentage;
    let lowDate;

    if (coingecko !== undefined) {
      lowPrice = to.format(coingecko.market_data.atl.usd);
      lowDate = coingecko.market_data.atl_date.usd;
      lowPercentage = coingecko.market_data.atl_change_percentage.usd.toFixed(
        2
      );
    }

    return (
      <Container>
        <Header>All Time Lows</Header>
        <Cell>
          <Key>Price</Key>
          <Value>{lowPrice}</Value>
        </Cell>
        <Cell>
          <Key>Percentage</Key>
          <Value>{lowPercentage + "%"}</Value>
        </Cell>
        <Cell>
          <Key>Date</Key>
          <Value>{moment(lowDate).format("MMM Do Y")}</Value>
        </Cell>
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(AllTimeLows);
