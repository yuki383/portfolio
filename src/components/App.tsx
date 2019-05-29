import * as React from "react";
import Header from "./App/Header";
import { MuiThemeProvider } from "@material-ui/core/styles";
import themes from "../themes";

export default class App extends React.Component {

  render() {
    return(
      <MuiThemeProvider theme={themes} >
        <Header />
      </MuiThemeProvider>
    )
  }
}