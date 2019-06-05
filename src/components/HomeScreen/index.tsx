import * as React from "react";
import TopCard from "../utils/TopCard";
import { makeStyles, Theme, createStyles, Toolbar } from "@material-ui/core";

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
    <div className={classes.toolbar}>
      <Toolbar />
      <TopCard title="top" />
    </div>
  )

}

export default HomeScreen;
