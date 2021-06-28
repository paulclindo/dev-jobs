import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Kumbh Sans', sans-serif;
  }

`;

const theme = {
  palette: {
    primary: {
      700: "#5964E0",
      500: "#939BF4",
      300: "#C5C8F6",
    },
    secondary: {
      700: "#6E8098",
      500: "#9DAEC2",
      300: "#F4F6F8",
    },
    neutral: {
      700: "#121721",
      500: "#19202D",
    },
    white: "#fff",
  },
  typography: {
    h1: {
      fontSize: "1.75rem",
      lineHeight: "28px",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "1.5rem",
      lineHeight: "24px",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1.25rem",
      lineHeight: "20px",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "0.875rem",
      lineHeight: "14px",
      fontWeight: "bold",
    },
    body: {
      fontSize: "1rem",
      lineHeight: "26px",
    },
  },
};

export { theme, GlobalStyles };
