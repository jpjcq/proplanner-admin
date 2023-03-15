import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider, { ThemedGlobalStyle } from "./theme";
import ParametersProvider from "./contexts/parameters/ParametersProvider";
import App from "./App";
import AgendaProvider from "./contexts/agenda/AgendaProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AgendaProvider>
      <ParametersProvider>
        <ThemeProvider>
          <ThemedGlobalStyle />
          <App />
        </ThemeProvider>
      </ParametersProvider>
    </AgendaProvider>
  </React.StrictMode>
);
