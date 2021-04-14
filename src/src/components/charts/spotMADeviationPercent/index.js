// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header } from "./styles";

class SpotAndMovingAveragePercent extends Component {
  static defaultProps = {
    data: {
      deviation_ratio: {},
    },
  };
  render() {
    const { deviation_ratio } = this.props.supply;
    let spot = [];
    let xUSD = [];
    let date = [];

    if (deviation_ratio !== undefined) {
      for (var i = 0; i < deviation_ratio.length; i++) {
        spot.push(deviation_ratio[i][`spot_price`]);
        xUSD.push(deviation_ratio[i][`xUSD`]);
        date.push(moment(deviation_ratio[i].period).format("MMM Do"));
      }
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "Spot Price",
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
          pointHoverBackgroundColor: "rgba(64, 214, 116, 0.8)",
          pointHoverBorderColor: "rgba(64, 214, 116, 1)",
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
            height: 600,
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

export default connect(mapStateToProps)(SpotAndMovingAveragePercent);
