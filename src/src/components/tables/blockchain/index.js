// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Header, Cell, Key, Value } from "./styles";

class Blockchain extends Component {
  static defaultProps = {
    data: {
      results: {},
    },
  };
  render() {
    const { result } = this.props.data;

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
          <Value>{result.database_size}</Value>
        </Cell>
        <Cell>
          <Key>Difficulty</Key>
          <Value>{result.difficulty}</Value>
        </Cell>
        <Cell>
          <Key>Offline</Key>
          <Value>{result.offline ? "True" : "False"}</Value>
        </Cell>
        <Cell>
          <Key>Transaction Count</Key>
          <Value>{result.tx_count}</Value>
        </Cell>
      </Container>
    );
  }
}

export default Blockchain;
