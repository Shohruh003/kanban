import { FC } from "react";
import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import { getTheme } from "/core/theme";
import { StoreContextProvider } from "/core/StoreContext";
import { RootStore } from "/stores/RootStore";
import RequestFactory from "/core/request/RequestFactory";
import { IRoutes } from "/core/types/types";
import { CoreContextProvider } from "/core/CoreContext";
import { NoSsr, useMediaQuery } from "@mui/material";
import RequestList from "/core/request/RequestList";
import Root from "/core/Root";
import { BrowserRouter as Router } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import Paths from "/core/paths";

const store = new RootStore();
const language = localStorage.getItem("lang") || "ru";

const requestFactory = new RequestFactory({
  requestConfigList: RequestList,
  // onError,
});
const createRequest = requestFactory.createRequest.bind(requestFactory);
const createSimpleRequest = requestFactory.createSimpleRequest.bind(requestFactory);
const createLoginRequest = requestFactory.createLoginRequest.bind(requestFactory);
const createLoginByVideoRequest = requestFactory.createLoginByVideoRequest.bind(requestFactory);

store.setCreateRequest(createRequest);
store.setCreateLoginRequest(createLoginRequest);
store.setCreateSimpleRequest(createSimpleRequest);
store.setCreateLoginByVideoRequest(createLoginByVideoRequest);

interface AppProps {
  locale?: any;
  config?: any;
  routes?: IRoutes;
}

const App: FC<AppProps> = ({ locale, routes, config }) => {
  const theme = getTheme(store.userStore.currentTheme);
  const isMobile = useMediaQuery(theme?.breakpoints.down("sm"));

  return (
    <NoSsr>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StoreContextProvider value={store}>
              <CoreContextProvider
                value={{
                  store,
                  createRequest,
                  locale,
                  routes,
                  language,
                  config,
                  isMobile,
                  paths: Paths,
                }}
              >
                  <Router
                    basename={import.meta.env.DEV ? `/${config.productName}` : undefined}
                  >
                    <Root />
                  </Router>
              </CoreContextProvider>
            </StoreContextProvider>
          </LocalizationProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </NoSsr>
  );
};

export default App;
