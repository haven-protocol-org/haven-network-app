// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

// Relative Imports
import { Container, Header } from "./styles";

class OffshoreFees extends Component {
  static defaultProps = {
    data: {
      offshore_fee: {},
    },
  };
  render() {
    const { offshore_fee } = this.props.data;

    let low = [];
    let normal = [];
    let medium = [];
    let high = [];
    let date = [];

    //
    for (var i = 0; i < offshore_fee.length; i++) {
      low.push(offshore_fee[i][`xUSD-low`]);
      normal.push(offshore_fee[i][`xUSD-normal`]);
      medium.push(offshore_fee[i][`xUSD-medium`]);
      high.push(offshore_fee[i][`xUSD-high`]);
      date.push(moment(offshore_fee[i].period).format("MMM Do"));
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "Low",
          fill: false,
          lineTension: 0.1,
          borderColor: "rgba(1, 127, 221, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(1, 127, 221, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: low,
        },
        {
          label: "Normal",
          fill: false,
          lineTension: 0.1,
          borderColor: "rgba(64, 214, 116, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(64, 214, 116, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: normal,
        },
        {
          label: "Medium",
          fill: false,
          lineTension: 0.1,
          borderColor: "rgba(236, 175, 1, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(236, 175, 1, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: medium,
        },
        {
          label: "High",
          fill: false,
          lineTension: 0.1,
          borderColor: "rgba(246, 69, 56, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(246, 69, 56, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(246, 69, 56, 0.5)",
          pointHoverBorderColor: "rgba(246, 69, 56, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: high,
        },
      ],
    };

    return (
      <Container>
        <Header>Offshore Fees</Header>
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

export default OffshoreFees;
