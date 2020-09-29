// Library Imports
import React, { Component } from "react";
import Statistics from "../../components/statistics/index.js";

// Relative Imports
import { Container, Page } from "./styles";

class Layout extends Component {
  render() {
    const { xusd_price, xusd_supply, xhv_supply } = this.props.state;
    const network_calc = xusd_price * xhv_supply + xusd_supply;
    console.log(this.props.state);

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const formatSupply = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "USD",
    });

    const xUSD = parseFloat(xusd_price).toFixed(4);
    const xhv_circ = formatSupply.format(parseFloat(xhv_supply).toFixed(4));
    const xusd_circ = formatSupply.format(parseFloat(xusd_supply).toFixed(4));
    const network_value = formatter.format(parseFloat(network_calc).toFixed(4));

    return (
      <Container>
        <Page>
          <Statistics
            xUSD={xUSD}
            xhv_circ={xhv_circ}
            xusd_circ={xusd_circ}
            network_value={network_value}
          />
          {this.props.children}
        </Page>
      </Container>
    );
  }
}

export default Layout;
