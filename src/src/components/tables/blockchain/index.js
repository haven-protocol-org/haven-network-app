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
    const gb = result.database_size / 1073741274;

    return (
      <Container>
        <Header>Protocol</Header>
        <Cell>
          <Key>Height</Key>
          <Value>{result.height.toLocaleString()}</Value>
        </Cell>
        <Cell>
          <Key>Block Size Limit</Key>
          <Value>{result.block_size_limit.toLocaleString()}</Value>
        </Cell>
        <Cell>
          <Key>Block Size Median</Key>
          <Value>{result.block_size_median.toLocaleString()}</Value>
        </Cell>

        <Cell>
          <Key>Blockchain Size</Key>
          <Value>{gb.toFixed(2).toLocaleString() + "GB"}</Value>
        </Cell>
        <Cell>
          <Key>Difficulty</Key>
          <Value>{result.difficulty.toLocaleString()}</Value>
        </Cell>

        <Cell>
          <Key>Transaction Count</Key>
          <Value>{result.tx_count.toLocaleString()}</Value>
        </Cell>
        <Cell>
          <Key>Online</Key>
          <Value>{result.offline ? "No" : "Yes"}</Value>
        </Cell>
      </Container>
    );
  }
}

export default Blockchain;
