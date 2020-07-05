// Library Imports
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Pie } from "react-chartjs-2";
import { dark } from "../../../constants/themes.js";

// https://maketintsandshades.com/#E63E98,40D674,017FDD,ECAF01,F64538,9E37A9

// Relative Imports
import { Container, Header } from "./styles";

class TotalSupply extends Component {
  render() {
    const { xusd_price, xhv_supply, xusd_supply } = this.props;

    const xhv_value = xusd_price * xhv_supply;

    const pieData = {
      labels: ["Haven (XHV)", "United States Dollar xUSD"],
      datasets: [
        {
          data: [xhv_value, xusd_supply],
          backgroundColor: ["#ee78b7", "rgb(114, 137, 218, 1)"],
          hoverBackgroundColor: ["rgb(232, 75, 159, 1)", "#e63e98"],
          borderColor: `${dark.body.border}`,
        },
      ],
    };

    return (
      <Container>
        <Header>Market Share</Header>
        <Pie data={pieData} />
      </Container>
    );
  }
}

export default TotalSupply;
