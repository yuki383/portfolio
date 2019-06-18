import * as React from "react";
import { ListItem, ListItemText, Divider, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: theme.palette.text.primary
    },
    link: {
      textDecoration: "none"
    }
  })
)

interface Props {
  title: string;
  path: string;
}

const ListItemButton: React.FC<Props> = (props) => {
  const classes = useStyles({});
  const { title, path, } = props;

  return(
    <>
      <ListItem button>
        <Link to={path} className={classes.link} >
          <ListItemText primary={title} className={classes.text} />
        </Link>
      </ListItem>
      <Divider />
    </>
  )
}

export default ListItemButton;
