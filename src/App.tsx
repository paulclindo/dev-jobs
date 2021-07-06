// @ts-ignore
import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./layout/main";
import Home from "./screens/Home";
import JobDetails from "./screens/JobDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:slug">
          <JobDetails />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
