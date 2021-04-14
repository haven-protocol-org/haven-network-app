// Library Imports
import React, { Component } from "react";
import Header from "../../components/header/index.js";
import { connect } from "react-redux";

// Relative Imports
import { Container } from "./styles";

class Details extends Component {
  state = {
    asset: this.props.match.params.id,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { asset } = this.state;
    const { data } = this.props;
    const { db_lastblock24 } = data;

    if (db_lastblock24 !== undefined) {
      const { pricing_spot_record } = db_lastblock24;

      console.log("RESULT", pricing_spot_record);
    }

    return (
      <Container>
        <Header
          title={`${this.state.asset} Details`}
          description={`Overview of current ${asset} statistics`}
          back
        />
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
  supply: state.getSupply,
});

export default connect(mapStateToProps)(Details);
