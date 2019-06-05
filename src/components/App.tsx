import * as React from "react";
import Header from "./App/Header";
import { MuiThemeProvider } from "@material-ui/core/styles";
import themes from "../themes";
import HomeScreen from "./HomeScreen";
import { Container } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <HomeScreen />
    </>
  )
}

export default App;