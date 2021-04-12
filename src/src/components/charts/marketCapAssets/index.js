// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";

// Relative Imports
import { Container, Header } from "./styles";

class MarketCapAssets extends Component {
  static defaultProps = {
    data: {
      supply_value: {},
    },
  };
  render() {
    const { supply_value } = this.props.supply;
    // console.log(supply_value);

    let xhv = [];
    let xUSD = [];
    let total = [];
    let date = [];

    // xAssets
    let gold = [];
    let silver = [];

    if (supply_value !== undefined) {
      for (var i = 0; i < supply_value.length; i++) {
        xhv.push(supply_value[i][`XHV`]);
        xUSD.push(supply_value[i][`xUSD`]);
        total.push(supply_value[i][`xUSD`] + supply_value[i][`XHV`]);
        date.push(moment(supply_value[i].period).format("MMM Do"));
      }
    }

    const info = {
      yAxisID: "bar-stacked",
      labels: date,
      datasets: [
        {
          label: "xUSD",
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
          pointHoverBackgroundColor: "rgba(1, 127, 221, 0.8)",
          pointHoverBorderColor: "rgba(1, 127, 221, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: xUSD,
        },
        {
          label: "XHV",
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
          pointHoverBackgroundColor: "rgba(64, 214, 116, 0.8)",
          pointHoverBorderColor: "rgba(64, 214, 116, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: xhv,
        },
      ],
    };

    return (
      <Container>
        <Header>Total Network Value</Header>
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
                  id: "bar-stacked",
                  stacked: true,
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

export default connect(mapStateToProps)(MarketCapAssets);
