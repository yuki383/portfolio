import * as React from "react";
import Header from "./App/Header";
import { MuiThemeProvider } from "@material-ui/core/styles";
import themes from "../themes";
import HomeScreen from "./HomeScreen";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes} >
      <Header />
      <HomeScreen />
    </ThemeProvider>
  )
}

export default App;