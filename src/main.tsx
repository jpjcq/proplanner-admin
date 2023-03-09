import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider, { ThemedGlobalStyle } from "./components/theme";
import ParametersProvider from "./contexts/parameters/ParametersProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ParametersProvider>
      <ThemeProvider>
        <ThemedGlobalStyle />
        <App />
      </ThemeProvider>
    </ParametersProvider>
  </React.StrictMode>
);
