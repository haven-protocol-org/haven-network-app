// Library Imports
import React, { Component } from "react";

// Relative Imports
import { Container, Grid, Page, Statistic, Data, Label, Value } from "./styles";

class Layout extends Component {
  render() {
    const { xusd_price, xusd_supply, xhv_supply } = this.props.state;
    const xUSD = parseFloat(xusd_price).toFixed(4);

    const network_calc = xusd_price * xhv_supply + xusd_supply;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const formatSupply = new Intl.NumberFormat("en-US", {
      style: "decimal",
      currency: "USD",
    });

    const xhv_circ = formatSupply.format(parseFloat(xhv_supply).toFixed(4));
    const xusd_circ = formatSupply.format(parseFloat(xusd_supply).toFixed(4));
    const network_value = formatter.format(parseFloat(network_calc).toFixed(4));

    return (
      <Container>
        <Page>
          <Grid>
            <Statistic>
              <Data>
                <Value>${xUSD}</Value>
                <Label>Haven 24h MA Price</Label>
              </Data>
            </Statistic>
            <Statistic>
              <Data>
                <Value>{xhv_circ}</Value>
                <Label>XHV Circulating Supply</Label>
              </Data>
            </Statistic>
            <Statistic>
              <Data>
                <Value>{xusd_circ}</Value>
                <Label>xUSD Circulating Supply</Label>
              </Data>
            </Statistic>
            <Statistic>
              <Data>
                <Value>{network_value}</Value>
                <Label>Total Network Value</Label>
              </Data>
            </Statistic>
          </Grid>
          {this.props.children}
        </Page>
      </Container>
    );
  }
}

export default Layout;
