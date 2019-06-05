import * as React from "react";
import { Route } from "react-router-dom";
import ScreenTop from "../utils/ScreenTop";
import Profiles from "./Profile";
import { makeStyles, Theme, createStyles, Toolbar, Container } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    toolbar: theme.mixins.toolbar
  })
)

interface Props {

}

const HomeScreen: React.FC = () => {
  const classes = useStyles();

  return (
    <main>
      <Route exact path="/" component={Profiles} />
    </main>
  )

}

export default HomeScreen;
