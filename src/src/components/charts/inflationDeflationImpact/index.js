// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header } from "./styles";

class InflationDeflationImpact extends Component {
  static defaultProps = {
    data: {
      organic_coins: {},
    },
  };
  render() {
    const { organic_coins } = this.props.supply;
    let offshore = [];
    let supply = [];
    let date = [];

    if (organic_coins !== undefined) {
      for (var i = 0; i < organic_coins.length; i++) {
        offshore.push(organic_coins[i][`offshore`]);
        supply.push(organic_coins[i][`supply`]);
        date.push(moment(organic_coins[i].period).format("MMM Do"));
      }
    }

    const purple = "rgba(64, 214, 116)";
    const green = "rgba(114, 137, 218)";

    const info = {
      labels: date,
      datasets: [
        {
          label: "Current Supply",
          data: offshore,
          fill: true,
          lineTension: 0.1,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointHitRadius: 10,
          borderColor: `${purple}`,
          pointHoverBorderColor: `${purple}`,
          pointHoverBackgroundColor: `${purple}`,
        },
        {
          label: "Standard Emissions",
          data: supply,
          fill: true,
          lineTension: 0.1,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointHitRadius: 10,
          borderColor: `${green}`,
          pointHoverBorderColor: `${green}`,
          pointHoverBackgroundColor: `${green}`,
        },
      ],
    };
    return (
      <Container>
        <Header>Offshore Inflation Impact</Header>
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
              yAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },
          }}
          data={info}
        />
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  supply: state.getSupply,
});

export default connect(mapStateToProps)(InflationDeflationImpact);
