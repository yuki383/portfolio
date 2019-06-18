import * as React from "react";
import { HashRouter } from "react-router-dom";
import Header from "./App/Header";
import themes from "../themes";
import HomeScreen from "./Main";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes} >
      <HashRouter>
        <CssBaseline />
        <Header />
        <HomeScreen />
      </HashRouter>
    </ThemeProvider>
  )
}

export default App;