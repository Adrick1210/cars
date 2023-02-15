import React from "react";
import 'bulma/css/bulma.css';
import './styles.css'
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import App from "./App.js";

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
