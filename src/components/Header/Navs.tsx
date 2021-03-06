import * as React from "react";
import { Grid, Typography, Button, makeStyles, Theme, } from "@material-ui/core";
import { Link, } from "react-router-dom"
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: theme.palette.text.secondary,
      fontSize: "large"
    },
    link: {
      textDecoration: "none",
    }
  })
)

interface Props {
  title: string;
  path: string;
}

const Navs: React.FC<Props> = ( props ) => {
  const { title, path } = props;
  const classes = useStyles({});

  return(
    <Grid item >
        <Link to={path} className={classes.link} >
          <Button size="large" >
            <Typography variant="button" className={classes.title} >
              {title}
            </Typography>
          </Button>
        </Link>
    </Grid>
  )
}

export default Navs;
