// Library Imports
import React, { Component } from "react";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class AllTimeHighs extends Component {
  render() {
    let to = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const { coingecko } = this.props.data;
    let highPrice;
    let highPercentage;
    let highDate;

    if (coingecko !== undefined) {
      highPrice = to.format(coingecko.market_data.ath.usd);
      highDate = coingecko.market_data.ath_date.usd;
      highPercentage = coingecko.market_data.ath_change_percentage.usd.toFixed(
        2
      );
    }

    return (
      <Container>
        <Header>All Time Highs</Header>
        <Cell>
          <Key>Price</Key>
          <Value>{highPrice}</Value>
        </Cell>
        <Cell>
          <Key>Percentage</Key>
          <Value>{highPercentage + "%"}</Value>
        </Cell>
        <Cell>
          <Key>Date</Key>
          <Value>{moment(highDate).format("MMM Do Y")}</Value>
        </Cell>
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(AllTimeHighs);
