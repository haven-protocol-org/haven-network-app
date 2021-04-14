// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header } from "./styles";

class SpotAndMovingAveragePrice extends Component {
  static defaultProps = {
    data: {
      deviation: {},
    },
  };
  render() {
    const { deviation } = this.props.supply;

    let spot = [];
    let average = [];
    let date = [];

    if (deviation !== undefined) {
      for (var i = 0; i < deviation.length; i++) {
        average.push(deviation[i][`xUSD-ma`]);
        spot.push(deviation[i][`xUSD-spot`]);
        date.push(moment(deviation[i].period).format("MMM Do"));
      }
    }

    const purple = "rgba(64, 214, 116)";
    const green = "rgba(114, 137, 218)";

    const info = {
      labels: date,
      datasets: [
        {
          label: "Moving Average",
          data: average,
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
          label: "Spot Price",
          data: spot,
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
        <Header>Spot & MA Deviation Price</Header>
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

export default connect(mapStateToProps)(SpotAndMovingAveragePrice);
