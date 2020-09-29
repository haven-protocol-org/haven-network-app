// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

// https://maketintsandshades.com/#E63E98,40D674,017FDD,ECAF01,F64538,9E37A9

// Relative Imports
import { Container, Header } from "./styles";

class CirculatingSupply extends Component {
  render() {
    const { data } = this.props;
    let xhv = [];
    let xusd = [];
    let date = [];

    for (var i = 0; i < data.length; i++) {
      xhv.push(data[i].XHV);
      xusd.push(data[i].xUSD);
      date.push(moment(data[i].period).format("MMM Do"));
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "XHV",
          fill: true,
          lineTension: 0.1,
          borderColor: "rgba(1, 127, 221, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(1, 127, 221, 1)",
          pointBackgroundColor: "rgba(255, 255, 255, 0.5)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(1, 127, 221, 1)",
          pointHoverBorderColor: "rgba(1, 127, 221, 0.8)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: xhv,
        },
        {
          label: "xUSD",
          fill: true,
          lineTension: 0.1,
          borderColor: "rgba(64, 214, 116, 0.8)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(64, 214, 116, 1)",
          pointBackgroundColor: "rgba(255, 255, 255, 0.5)",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(64, 214, 116, 1)",
          pointHoverBorderColor: "rgba(64, 214, 116, 0.8)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: xusd,
        },
      ],
    };

    return (
      <Container>
        <Header>Circulating Supply</Header>
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

CirculatingSupply.propTypes = {};

export default CirculatingSupply;
