import * as React from "react";
import { Typography, makeStyles, createStyles, Theme, Container } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    }
  })
)

interface Props {
  title: string;

}

const ScreenTop: React.FC<Props> = ( props ) => {
    const { title, } = props;
    const classes = useStyle();
    return (
      <div className={classes.root}>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
          {title}
          </Typography>
        </Container>
      </div>
    )
}

export default ScreenTop;