import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { GlobalStyle } from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
