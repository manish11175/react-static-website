import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";

import "./"

import App from "./App";
import "./assets/css/style.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';




ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>

,
  document.getElementById('root')
);
