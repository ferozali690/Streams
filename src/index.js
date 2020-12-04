import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import Reducers from "./Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reduxStore = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware())
);

ReactDom.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
