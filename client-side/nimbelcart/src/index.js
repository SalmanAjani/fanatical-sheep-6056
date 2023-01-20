import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";


import { Provider as ReduxProvider } from "react-redux";


import { store } from "./redux/store";
import { theme } from "./Client/pages/cart/themeconfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(


  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </ChakraProvider>
 
 
);
