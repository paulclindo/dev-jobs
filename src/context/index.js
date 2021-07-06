import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { JobProvider } from "./job-provider";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyles } from "../theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <JobProvider>{children}</JobProvider>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export { AppProviders };
