// Library Imports
import React, { Component } from "react";
import Statistics from "../../components/statistics/web/index.js";
import MobileStatistics from "../../components/statistics/mobile/index.js";

// Relative Imports
import { Container, Page } from "./styles";

class Stats extends Component {
  static defaultProps = {
    supply: {},
  };

  // componentDidMount() {
  //   const map = this.props.supply.map((i) => {
  //     return console.log(i);
  //   });
  //
  //   console.log("MAP", map);
  // }

  handleData = () => {
    const { supply } = this.props;

    if (supply.length > 0) {
      supply.map((i) => {
        const {
          XHV,
          xAG,
          // xAU,
          // xAUD,
          // xBTC,
          // xCAD,
          // xCHF,
          // xCNY,
          // xEUR,
          // xGBP,
          // xJPY,
          // xNOK,
          // xNZD,
        } = i;
        console.log(typeof XHV);

        return console.log(XHV);
      });
    } else {
      console.log("FALSE");
    }
  };

  render() {
    const { xusd_price, xusd_supply, xhv_supply } = this.props.state;
    const network_calc = xusd_price * xhv_supply + xusd_supply;

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
          <MobileStatistics
            xUSD={xUSD}
            xhv_circ={xhv_circ}
            xusd_circ={xusd_circ}
            network_value={network_value}
          />
          <Statistics
            xUSD={xUSD}
            xhv_circ={xhv_circ}
            xusd_circ={xusd_circ}
            network_value={network_value}
          />
        </Page>
      </Container>
    );
  }
}

export default Stats;
