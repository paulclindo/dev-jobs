import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { JobProvider } from "./job-provider";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../theme";

function AppProviders({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <JobProvider>{children}</JobProvider>
      </Router>
    </ThemeProvider>
  );
}

export { AppProviders };
