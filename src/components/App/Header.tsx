import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Reorder from "@material-ui/icons/Reorder";

import "./Header.css";
import { IconButton, Toolbar, Typography, makeStyles, Theme, } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => 
createStyles({
  root: {
    flexGrow: 1,
    background: theme.palette.primary.main,
  },
  title: {
    flexGrow: 1,
  },
  icon: {
    color: "white"
  }
}))

interface Props {

}

const Header: React.FC = () => {
  const classes = useStyles();

  return (
      <AppBar position="fixed" classes={{ root: classes.root }} >
        <Toolbar >
          <Typography variant="h4" className={classes.title} >my portfolio</Typography>
          <IconButton edge="end" >
            <Reorder fontSize="large" className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
  )

}

export default Header;
