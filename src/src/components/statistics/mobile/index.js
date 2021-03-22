// Library Imports
import React from "react";

// Relative Imports
import { Data, Grid, Value, Label, Statistic } from "./styles";

const MobileStatistics = ({ xUSD, xhv_circ, xusd_circ, network_value }) => {
  return (
    <Grid>
      <Statistic>
        <Data>
          <Value>${xUSD}</Value>
          <Label>Haven 24h MA Price</Label>
        </Data>
        <Data>
          <Value>{xhv_circ}</Value>
          <Label>XHV Circulating Supply</Label>
        </Data>
      </Statistic>
      <Statistic>
        <Data>
          <Value>{xusd_circ}</Value>
          <Label>xUSD Circulating Supply</Label>
        </Data>
        <Data>
          <Value>{network_value}</Value>
          <Label>Total Network Value</Label>
        </Data>
      </Statistic>
    </Grid>
  );
};

export default MobileStatistics;
