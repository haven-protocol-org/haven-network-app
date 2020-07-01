// Primary Imports
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Layout from "./src/pages/layout";
import Navigation from "./src/components/navigation/index.js";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Layout />
      </Router>
    </>
  );
}

export default App;
