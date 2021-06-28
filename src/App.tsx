import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./theme";
import Typography from "./components/Typography";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography variant="h1">Hi there</Typography>
      <Typography variant="h2">Hi there</Typography>
      <Typography variant="h3">Hi there</Typography>
      <Typography variant="h4">Hi there</Typography>
      <Typography variant="body">Hi there</Typography>
      <Button variant="primary">Button</Button>
      <Button variant="secondary">Button</Button>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
