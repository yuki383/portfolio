import * as React from "react";
import { List, makeStyles, Theme, createStyles } from "@material-ui/core";
import ListItemButton from "../utils/ListItemButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "auto"
    },
    list: {
      width: 250
    }
  })
)

interface Props {
  navs: {
    title: string;
    path: string;
  }[];
  toggleDrawer: (boolean: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void | undefined;
}

const Drawer: React.FC<Props> = ( props ) => {
  const { navs, toggleDrawer } = props;
  const classes = useStyles();

  return(
    <div
      className={classes.list}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        <List>
          {navs.map(nav => <ListItemButton key={nav.title} {...nav} />)}
        </List>
    </div>
  )
}

export default Drawer;