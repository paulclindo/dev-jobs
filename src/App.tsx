// @ts-ignore
import React from "react";
import { Switch, Route } from "react-router-dom";
import { fetchJobs } from "./api";
import { useJobs } from "./context/job-provider";
import Layout from "./layout/main";
import Home from "./screens/Home";
import JobDetails from "./screens/JobDetails";

function App() {
  const [, dispatch] = useJobs();

  React.useEffect(() => {
    dispatch({ type: "pending" });
    fetchJobs()
      .then((data) => {
        dispatch({ type: "success", data });
      })
      .catch((err) => {
        dispatch({ type: "rejected", err });
      });
  }, [dispatch]);

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
