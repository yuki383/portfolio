import * as React from "react";
import { ListItem, ListItemText, Divider, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles } from "@material-ui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTasks, faSquare } from "@fortawesome/free-solid-svg-icons"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      color: theme.palette.grey[800]
    },
    link: {
      textDecoration: "none",
      color:"unset"
    },
    icon: {
      color: theme.palette.grey[600],
      marginRight: theme.spacing(1.5)
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

  return (
    <>
      <Link to={path} className={classes.link} >
        <ListItem button >
          <FontAwesomeIcon className={classes.icon} icon={kindOfIcon(title)} size="lg" /> 
          <ListItemText primary={title} className={classes.text} />
        </ListItem>
      </Link>
      <Divider />
    </>
  )
}

const kindOfIcon = (title: string) => {
  switch(title) {
    case "Home":
      return faHome;
    case "Works":
      return faTasks;
    default:
      return faSquare;

  }
}

export default ListItemButton;
