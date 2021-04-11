// Library Imports
import React, { Component } from "react";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class Blockchain extends Component {
  render() {
    let result = {};
    const { bc } = this.props.data;

    if (bc !== undefined) {
      result = bc.result;
    }

    let dataSize = result.database_size / 1073741274;

    return (
      <Container>
        <Header>Protocol</Header>
        <Cell>
          <Key>Height</Key>
          <Value>{result.height}</Value>
        </Cell>
        <Cell>
          <Key>Block Size Limit</Key>
          <Value>{result.block_size_limit}</Value>
        </Cell>
        <Cell>
          <Key>Block Size Median</Key>
          <Value>{result.block_size_median}</Value>
        </Cell>
        <Cell>
          <Key>Blockchain Size</Key>
          <Value>{dataSize === isNaN ? "" : dataSize.toFixed(2) + " GB"}</Value>
        </Cell>
        <Cell>
          <Key>Difficulty</Key>
          <Value>{result.difficulty}</Value>
        </Cell>

        <Cell>
          <Key>Transaction Count</Key>
          <Value>{result.tx_count}</Value>
        </Cell>
        <Cell>
          <Key>Online</Key>
          <Value>{result.offline ? "No" : "Yes"}</Value>
        </Cell>
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  data: state.getInfo,
});

export default connect(mapStateToProps)(Blockchain);
