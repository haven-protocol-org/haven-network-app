// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

// Relative Imports
import { Container, Header } from "./styles";

class MarketCapAssets extends Component {
  static defaultProps = {
    data: {
      supply_value: {},
    },
  };
  render() {
    const { supply_value } = this.props.data;

    console.log("SUPPLY VALUE", this.props.data);
    let xhv = [];
    let xUSD = [];
    let date = [];

    for (var i = 0; i < supply_value.length; i++) {
      xhv.push(supply_value[i][`XHV`]);
      xUSD.push(supply_value[i][`xUSD`]);
      date.push(moment(supply_value[i].period).format("MMM Do"));
    }
    const info = {
      labels: date,
      datasets: [
        {
          label: "XHV",
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
          data: xhv,
        },
        {
          label: "xUSD",
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
          data: xUSD,
        },
      ],
    };

    return (
      <Container>
        <Header>Assets Market Cap</Header>
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

export default MarketCapAssets;
