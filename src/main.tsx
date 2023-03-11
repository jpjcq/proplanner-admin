import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import ThemeProvider, { ThemedGlobalStyle } from "./theme";
import ParametersProvider from "./contexts/parameters/ParametersProvider";
import App from "./App";
import AgendaProvider from "./contexts/agenda/AgendaProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterLuxon}>
      <AgendaProvider>
        <ParametersProvider>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </ParametersProvider>
      </AgendaProvider>
    </LocalizationProvider>
  </React.StrictMode>
);
