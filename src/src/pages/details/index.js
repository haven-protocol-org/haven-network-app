// Library Imports
import React, { Component } from "react";
import Header from "../../components/header/index.js";

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

export default Details;
