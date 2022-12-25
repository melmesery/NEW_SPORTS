import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HashRouter } from "react-router-dom";
import App from "./App";
import ScrollTop from "./ScrollTop";
import store from "./Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollTop>
        <Provider store={store}>
          <App />
        </Provider>
      </ScrollTop>
    </HashRouter>
  </React.StrictMode>
);
