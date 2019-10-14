import React from "react";
import ReactDOM from "react-dom";
import ds from "./styles/ds";

import "./styles.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

const { css, theme } = ds({
  theme: {
    borderRadius: {
      normal: "2px"
    },
    boxShadow: {},
    breakpoints: {
      xxs: "22em",
      xs: "34em",
      sm: "48em",
      md: "64em",
      lg: "75em"
    },
    colors: {
      pureBlack: "#000000",
      pureRed: "red",
      pureWhite: "#ffffff"
    },
    fontSizes: {
      xlarge: "2.5rem",
      h1: "1.5rem",
      h2: "1.25rem",
      h3: "1.125rem",
      normal: "1rem",
      small: "0.875rem",
      caption: "0.75rem"
    },
    fontWeights: {
      bold: 600,
      light: 400,
      normal: 500
    },
    layers: {
      toast: 1000,
      modal: 900,
      overlay: 800,
      menu: 700,
      contextMenu: 600,
      top: 100,
      middle: 50,
      bottom: 0
    },
    lineHeights: {
      normal: 1
    },
    sizes: {
      tiny: "0.75rem",
      small: "0.875rem",
      normal: "1rem",
      medium: "1.25rem",
      large: "1.5rem"
    }
  },
  typography: {
    h1: ({ fontSizes }) => `
      font-size: ${fontSizes.h1};
    `,
    h2: ({ fontSizes }) => `
      font-size: ${fontSizes.h2};
    `,
    h3: ({ fontSizes }) => `
      font-size: ${fontSizes.h3};
    `,
    p: ({ fontSizes }) => `
      font-size: ${fontSizes.normal};
    `
  },
  custom: obj => `
    body {
      background: ${obj.colors.pureBlack};
      color: ${obj.colors.pureWhite};
    }
  `
});

const GlobalStyle = createGlobalStyle`
  ${css};
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <div className="App">
          <h1 className="margin--bottom-large">Hello CodeSandbox</h1>
          <h2 className="margin--bottom-medium">
            {" "}
            Start editing to see some magic happen!
          </h2>
          <h3 className="margin--bottom-small">Isn't it magic?</h3>
          <p className="color--pureRed">This is a naive design system!</p>
        </div>
      </ThemeProvider>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
