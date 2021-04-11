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

  displayAssets = () => {
    const { db_lastblock } = this.props.data;

    if (db_lastblock !== undefined) {
      const { pricing_record } = db_lastblock;

      return Object.entries(pricing_record).map((prices) => {
        if (prices[1] === 0) {
          return null;
        } else if (prices[0][0] === "u") {
          return null;
        } else {
          return (
            <AssetCell key={prices[0]} name={prices[0]} value={prices[1]} />
          );
        }
      });
    }
  };

  render() {
    return (
      <Container>
        <Header title="Assets" description="..." />
        {this.displayAssets()}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(Assets);
