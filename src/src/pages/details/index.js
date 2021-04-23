// Library Imports
import React, { Component } from "react";
import Header from "../../components/header/index.js";
import { connect } from "react-redux";
import { getAssets } from "../../redux/actions/index.js";
import WebStatistic from "../../components/details/web/index.js";
import ConversionsCell from "../../components/conversionsCell/index.js";
import moment from "moment";
import AssetChart from "../../components/charts/assetPrice/index.js";

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

  displayChart = () => {
    return <AssetChart />;
  };

  displayAsset = () => {
    const mon = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const num = new Intl.NumberFormat("en-US", {
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
      const _spot = mon.format(spot.toFixed(2));
      const _ma = mon.format(ma.toFixed(2));
      const _supply = num.format(supply.toFixed(2));
      const _marketcap = mon.format(marketcap.toFixed(2));

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

    const mon = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const num = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "USD",
    });

    var history = data.filter((obj) => {
      return obj.ticker === asset;
    });

    if (history.length > 0) {
      return history[0].transactions.map((tx) => {
        const {
          conversion_date,
          conversion_fee,
          conversion_asset,
          conversion_price,
          minted_amount,
          minted_asset,
          burned_amount,
          burned_asset,
          unlock_date,
        } = tx;

        const _conversion_date = moment
          .unix(conversion_date, "YYYYMMDD")
          .fromNow(); // 9 years ago
        const _unlock_date = moment.unix(unlock_date, "YYYYMMDD").fromNow(); // 9 years ago

        return (
          <ConversionsCell
            key={conversion_date}
            minted_amount={`🔥 Minted ${minted_amount} ${minted_asset}`}
            conversion_date={_conversion_date}
            conversion_fee={conversion_fee}
            conversion_price={conversion_price}
            conversion_asset={minted_asset}
            burned_amount={burned_amount}
            burned_asset={burned_asset}
            unlock_date={_unlock_date}
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
        {this.displayChart()}
        {this.recentTransactions()}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getAssets,
});

export default connect(mapStateToProps, { getAssets })(Details);
