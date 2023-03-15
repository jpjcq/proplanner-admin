import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider, { ThemedGlobalStyle } from "./theme";
import ParametersProvider from "./contexts/parameters/ParametersProvider";
import App from "./App";
import AgendaProvider from "./contexts/agenda/AgendaProvider";
import SliderProvider from "./contexts/slider/SliderProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AgendaProvider>
      <ParametersProvider>
        <SliderProvider>
          <ThemeProvider>
            <ThemedGlobalStyle />
            <App />
          </ThemeProvider>
        </SliderProvider>
      </ParametersProvider>
    </AgendaProvider>
  </React.StrictMode>
);
