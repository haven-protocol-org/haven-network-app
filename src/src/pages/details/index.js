// Library Imports
import React, { Component } from "react";
import Header from "../../components/header/index.js";
import { connect } from "react-redux";
import { getAssets } from "../../redux/actions/index.js";
import WebStatistic from "../../components/details/web/index.js";
import ConversionsCell from "../../components/conversionsCell/index.js";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  state = {
    asset: this.props.match.params.id,
    ticker: null,
    name: null,
    ma: null,
    spot: null,
    supply: null,
    marketcap: null,
  };

  componentDidMount() {
    this.props.getAssets();
    window.scrollTo(0, 0);
  }

  displayAsset = () => {
    let to = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const decimal = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "USD",
    });

    const { asset } = this.state;
    const { data } = this.props;

    var filter = data.filter((obj) => {
      return obj.ticker === asset;
    });

    return filter.map((asset) => {
      const { ticker, name, ma, spot, supply, marketcap } = asset;
      const _spot = to.format(spot.toFixed(2));
      const _ma = to.format(ma.toFixed(2));
      const _supply = decimal.format(supply.toFixed(2));
      const _marketcap = to.format(marketcap.toFixed(2));

      return (
        <WebStatistic
          key={ticker}
          ticker={name}
          name={name}
          ma={_ma}
          spot={_spot}
          supply={_supply}
          marketcap={_marketcap}
        />
      );
    });
  };

  recentTransactions = () => {
    const { data } = this.props;
    const { asset } = this.state;

    var history = data.filter((obj) => {
      return obj.ticker === asset;
    });

    if (history.length > 0) {
      return history[0].transactions.map((tx) => {
        const { amount, date, fee, unlocks } = tx;

        return (
          <ConversionsCell
            key={date}
            amount={amount}
            date={date}
            fee={fee}
            unlocks={unlocks}
          />
        );
      });
    }
  };

  render() {
    const { asset } = this.state;

    return (
      <Container>
        <Header
          title={`${asset} Details`}
          description={`Overview of current ${asset} statistics`}
          back
        />
        {this.displayAsset()}
        <Header
          title={`${asset} Conversions`}
          description={`Recent ${asset} conversions`}
        />
        {this.recentTransactions()}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getAssets,
});

export default connect(mapStateToProps, { getAssets })(Details);
