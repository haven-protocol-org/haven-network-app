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

    const purple = "rgba(64, 214, 116)";
    const green = "rgba(114, 137, 218)";

    const info = {
      labels: date,
      datasets: [
        {
          label: "Spot Price",
          data: spot,
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
          label: "Moving Average",
          data: xUSD,
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
