// Library Imports
import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { connect } from "react-redux";
import { Loading } from "../../loading/index.js";

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
    // let gold = [];
    // let silver = [];

    if (supply_value !== undefined) {
      for (var i = 0; i < supply_value.length; i++) {
        xhv.push(supply_value[i][`XHV`]);
        xUSD.push(supply_value[i][`xUSD`]);
        total.push(supply_value[i][`xUSD`] + supply_value[i][`XHV`]);
        date.push(moment(supply_value[i].period).format("MMM Do"));
      }
    }

    const purple = "rgba(64, 214, 116)";
    const green = "rgba(114, 137, 218)";

    const info = {
      yAxisID: "bar-stacked",
      labels: date,
      datasets: [
        {
          label: "xUSD",
          data: xUSD,
          fill: true,
          lineTension: 0.1,
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          borderColor: `${purple}`,
          pointHoverBackgroundColor: `${purple}`,
          pointHoverBorderColor: `${purple}`,
        },

        {
          label: "XHV",
          data: xhv,
          fill: true,
          lineTension: 0.1,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 2,
          pointBorderWidth: 1,
          pointHitRadius: 10,
          borderColor: `${green}`,
          pointHoverBorderColor: `${green}`,
          pointHoverBackgroundColor: `${green}`,
        },
      ],
    };

    return (
      <Container>
        <Header>Total Network Value</Header>
        {supply_value === undefined ? (
          <Loading message="Fetching network data" />
        ) : (
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
        )}
      </Container>
    );
  }
}

export const mapStateToProps = (state) => ({
  supply: state.getSupply,
});

export default connect(mapStateToProps)(MarketCapAssets);
