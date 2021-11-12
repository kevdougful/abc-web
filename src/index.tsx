import * as React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import store from "./store";
import App from "./containers/App";

const AppWrapper: React.FC = () => {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  );
};

ReactDOM.render(<AppWrapper />, document.getElementById("app-root"));
