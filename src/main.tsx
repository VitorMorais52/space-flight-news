import * as ReactDOMClient from "react-dom/client";
import App from "./App";

import { QueryClientProvider } from "react-query";
import { queryClient } from "./services/queryClient";
import { GlobalStyle } from "./styles/global";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLDivElement
);

root.render(
  <QueryClientProvider client={queryClient}>
    <App /> <GlobalStyle />
  </QueryClientProvider>
);
