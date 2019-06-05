import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./App/Header";
import themes from "../themes";
import HomeScreen from "./Main";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={themes} >
      <Router>
        <CssBaseline />
        <Header />
        <HomeScreen />
      </Router>
    </ThemeProvider>
  )
}

export default App;