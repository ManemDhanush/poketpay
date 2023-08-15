import ReactDOM from "react-dom";
import { App } from "./App";
import "./index.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.DOMAIN!}
    clientId={process.env.CLIENTID!}
    authorizationParams={{
      redirect_uri: "https://bc81fe.bootcamp64.tk/landing-page"
    }}
  >
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
