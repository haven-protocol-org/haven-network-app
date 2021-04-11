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

class App extends Component {
  render() {
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

export default App;
