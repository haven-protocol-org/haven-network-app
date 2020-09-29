// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

// Relative Imports
import { Container, Header } from "./styles";

class InflationDeflationImpact extends Component {
  static defaultProps = {
    data: {
      organic_coins: {},
    },
  };
  render() {
    const { organic_coins } = this.props.data;
    let offshore = [];
    let supply = [];
    let date = [];

    //
    for (var i = 0; i < organic_coins.length; i++) {
      offshore.push(organic_coins[i][`offshore`]);
      supply.push(organic_coins[i][`supply`]);
      date.push(moment(organic_coins[i].period).format("MMM Do"));
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "With Offshore",
          fill: true,
          lineTension: 0.1,
          borderColor: "rgba(64, 214, 116, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(64, 214, 116, 0.8)",
          pointBackgroundColor: "rgba(255, 255, 255, 0.5)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(64, 214, 116, 1)",
          pointHoverBorderColor: "rgba(64, 214, 116, 0.8)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: offshore,
        },
        {
          label: "Without Offshore",
          fill: true,
          lineTension: 0.1,
          borderColor: "rgba(114, 137, 218, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(114, 137, 218, 1)",
          pointBackgroundColor: "rgba(255, 255, 255, 0.5)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(114, 137, 218, 0.8)",
          pointHoverBorderColor: "rgba(114, 137, 218, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: supply,
        },
      ],
    };
    return (
      <Container>
        <Header>Offshore Inflation Impact</Header>
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: true,
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

export default InflationDeflationImpact;
