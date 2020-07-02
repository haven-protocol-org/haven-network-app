// Library Imports
import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { Line } from "react-chartjs-2";

// https://maketintsandshades.com/#E63E98,40D674,017FDD,ECAF01,F64538,9E37A9

// Relative Imports
import { Container, Header } from "./styles";

class CirculatingSupply extends Component {
  mapData = (data) => {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].period);
      console.log(data[i].XHV);
      console.log(data[i].xUSD);
    }
  };
  render() {
    const { data } = this.props;
    let xhv = [];
    let xusd = [];
    let date = [];

    for (var i = 0; i < data.length; i++) {
      console.log(data[i].period);
      console.log(data[i].XHV);
      console.log(data[i].xUSD);
      xhv.push(data[i].XHV);
      xusd.push(data[i].xUSD);
      date.push(data[i].period);
    }

    const info = {
      labels: date,
      datasets: [
        {
          label: "Haven (XHV)",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgb(232, 75, 159, 0.2)",
          borderColor: "rgb(232, 75, 159, 1)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
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
          label: "USD (xUSD)",
          fill: true,
          lineTension: 0.1,
          backgroundColor: "rgb(114, 137, 218, 0.2)",
          borderColor: "rgb(114, 137, 218)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
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
        <Line data={info} />
      </Container>
    );
  }
}

CirculatingSupply.propTypes = {};

export default CirculatingSupply;
