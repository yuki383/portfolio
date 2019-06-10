import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Reorder from "@material-ui/icons/Reorder";

import { IconButton, Toolbar, Typography, makeStyles, Theme, Grid, } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Navs from "./Navs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.primary.main,
    },
    title: {
      padding: theme.spacing(1),
    },
    icon: {
      color: theme.palette.text.secondary,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
    navs: {
      padding: theme.spacing(1, 3),
    },
  }))

const navs = [
  {
    title: "Home",
  },
  {
    title: "Works",
    query: "works"
  }
]

interface Props {

}

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative" classes={{ root: classes.root }} >
      <Toolbar >
        <div >
          <Typography variant="h4" className={classes.title} noWrap >
            <Link to="/portfolio" className={classes.link}>my portfolio</Link>
          </Typography>
        </div>
        <Grid container className={classes.navs} >
          {navs.map(nav => <Navs key={nav.title} title={nav.title} query={nav.query} />)}
        </Grid>
        <IconButton edge="end" >
          <Reorder fontSize="large" className={classes.icon} />
        </IconButton>
      </Toolbar>
    </AppBar>
  )

}

export default Header;
