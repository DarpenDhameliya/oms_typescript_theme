import React from "react";
import logo from "./logo.svg";
import { ThemeProvider } from "@material-ui/styles";
import {theme} from './component/commmom/theme'
import "./App.css";
import AuthLogin from "./component/auth/Login";
import { Router } from "react-router-dom";
import IndexRouter from "./component/api/MainIndex";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <IndexRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
