// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

// Relative Imports
import { Container, Header } from "./styles";

class SpotAndMovingAveragePercent extends Component {
  static defaultProps = {
    data: {
      deviation_ratio: {},
    },
  };
  render() {
    const { deviation_ratio } = this.props.data;
    console.log(deviation_ratio);
    let spot = [];
    let xUSD = [];
    let date = [];

    //
    for (var i = 0; i < deviation_ratio.length; i++) {
      spot.push(deviation_ratio[i][`spot_price`]);
      xUSD.push(deviation_ratio[i][`xUSD`]);
      date.push(moment(deviation_ratio[i].period).format("MMM Do"));
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "Spot",
          fill: true,
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
          data: spot,
        },
        {
          label: "Moving Average",
          fill: true,
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
        <Header>Spot & MA Deviation Percent</Header>
        <Line
          options={{
            responsive: true,
            maintainAspectRatio: true,
            scales: {
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

export default SpotAndMovingAveragePercent;
