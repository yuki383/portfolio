import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Reorder from "@material-ui/icons/Reorder";
import ListDrawer from "./Drawer";

import { IconButton, Toolbar, Typography, Theme, Grid, Drawer, } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import Navs from "./Navs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: theme.palette.primary.main,
    },
    title: {
      padding: theme.spacing(1, 3),
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

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = (boolean: boolean) => (event: React.KeyboardEvent | React.MouseEvent,) => {
      if(
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift") 
      ) return;
      setIsOpen(boolean);
    }
  

  return (
    <AppBar position="relative" classes={{ root: classes.root }} >
      <Toolbar >
        <IconButton edge="start" onClick={toggleDrawer(true)} >
          <Reorder className={classes.icon} />
        </IconButton>
        <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)} >
          <ListDrawer navs={navs} toggleDrawer={toggleDrawer} />
        </Drawer>
        <div >
          <Typography variant="h4" className={classes.title} noWrap >
            <Link to="/portfolio" className={classes.link}>my portfolio</Link>
          </Typography>
        </div>
        <Grid container className={classes.navs} >
          {navs.map(nav => <Navs key={nav.title} title={nav.title} query={nav.query} />)}
        </Grid>
      </Toolbar>
    </AppBar>
  )

}

export default Header;
