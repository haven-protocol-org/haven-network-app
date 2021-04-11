// Primary Imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Navigation from "./src/_layout/navigation/index.js";
import Page from "./src/_layout/page/index.js";
import Columns from "./src/_layout/columns/index.js";
import Column from "./src/_layout/column/index.js";
import Menu from "./src/_layout/menu/index.js";

// Pages
import Overview from "./src/pages/overview";
import Assets from "./src/pages/assets";
import History from "./src/pages/history";
import Protocol from "./src/pages/protocol";

import { connect } from "react-redux";
import { getInfo, getSupply } from "./src/redux/actions";

class App extends Component {
  componentDidMount() {
    this.props.getInfo();
    this.props.getSupply();
  }

  render() {
    console.log("INFO", this.props.info);
    console.log("SUPPLY", this.props.supply);

    return (
      <Router>
        <Navigation />
        <Page>
          <Columns>
            <Menu />
            <Column>
              <Switch>
                <Route path="/" exact component={Overview} />
                <Route path="/assets" exact component={Assets} />
                <Route path="/protocol" exact component={Protocol} />
                <Route path="/history" exact component={History} />
              </Switch>
            </Column>
          </Columns>
        </Page>
      </Router>
    );
  }
}

export const mapStateToProps = (state) => ({
  info: state.getInfo,
  supply: state.getSupply,
});

export default connect(mapStateToProps, { getInfo, getSupply })(App);
