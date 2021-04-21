// Library Imports
import React from "react";

// Relative Imports
import { Data, Grid, Value, Label, Statistic } from "./styles";

const WebStatistic = ({ ticker, name, ma, spot, supply, marketcap }) => {
  return (
    <Grid>
      <Statistic>
        <Data>
          <Value>{supply}</Value>
          <Label>{ticker} Circulating Supply</Label>
        </Data>
      </Statistic>
      <Statistic>
        <Data>
          <Value>{ma}</Value>
          <Label>{ticker} 24h MA Price</Label>
        </Data>
      </Statistic>
      <Statistic>
        <Data>
          <Value>{spot}</Value>
          <Label>{ticker} Spot Price</Label>
        </Data>
      </Statistic>
      <Statistic>
        <Data>
          <Value>{marketcap}</Value>
          <Label>{ticker} Market Cap</Label>
        </Data>
      </Statistic>
    </Grid>
  );
};

export default WebStatistic;
