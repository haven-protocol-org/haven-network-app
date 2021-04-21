// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Container } from "./styles";
import Header from "../../components/header/index.js";
import AssetCell from "../../components/assetCell/index.js";
import { getAssets } from "../../redux/actions/index.js";

class Assets extends Component {
  static defaultProps = {
    data: {
      db_lastblock: {
        pricing_record: {},
      },
    },
  };

  componentDidMount() {
    this.props.getAssets();
    window.scrollTo(0, 0);
  }

  displayAssets = () => {
    return this.props.data.map((asset) => {
      const { ticker, name, ma, supply, marketcap } = asset;
      return (
        <AssetCell
          to={`/assets/${ticker}`}
          key={ticker}
          name={`${name}`}
          ticker={ticker}
          ma={ma}
          supply={supply}
          marketcap={marketcap}
        />
      );
    });
  };

  render() {
    return (
      <Container>
        <Header title="Assets" description="Overview of available assets" />
        {this.displayAssets()}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getAssets,
});

export default connect(mapStateToProps, { getAssets })(Assets);
