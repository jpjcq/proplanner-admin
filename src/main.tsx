import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider, { ThemedGlobalStyle } from "./components/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemedGlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
