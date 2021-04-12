// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header/index.js";
import AssetCell from "../../components/assetCell/index.js";

class Assets extends Component {
  static defaultProps = {
    data: {
      db_lastblock: {
        pricing_record: {},
      },
    },
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  displayAssets = () => {
    const { db_lastblock } = this.props.data;

    if (db_lastblock !== undefined) {
      const { pricing_spot_record, pricing_record } = db_lastblock;

      return Object.entries(pricing_record).map((prices) => {
        if (prices[1] === 0) {
          return null;
        } else if (prices[0][0] === "u") {
          return null;
        } else {
          const asset = prices[0];
          return (
            <AssetCell
              to={"/assets/gold"}
              key={prices[0]}
              name={prices[0]}
              value={prices[1]}
            />
          );
        }
      });
    }
  };

  render() {
    // console.log(this.props.data.db_lastblock24);
    let supply = {};
    let xhv, xag, xau, xcny, xeuro, xusd;

    const { db_lastblock24 } = this.props.data;
    if (db_lastblock24 !== undefined) {
      supply = db_lastblock24.supply;
      xag = supply.xAG.toFixed(2);
      xhv = supply.XHV.toFixed(2);
      xau = supply.xAU.toFixed(2);
      xcny = supply.xCNY.toFixed(2);
      xeuro = supply.xEUR.toFixed(2);
      xusd = supply.xUSD.toFixed(2);
    }

    return (
      <Container>
        <Header title="Assets" description="Overview of available assets" />
        {this.displayAssets()}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(Assets);
