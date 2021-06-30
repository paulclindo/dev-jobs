// @ts-ignore

import React from "react";
import { GlobalStyles, theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import JobDetails from "./screens/JobDetails";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/:jobId">
            <JobDetails />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
