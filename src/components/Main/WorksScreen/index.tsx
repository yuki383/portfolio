import * as React from "react";
import ScreenTop from "../../utils/ScreenTop";
import WorksGrid from "./WorksGrid";
import { Container, Theme, createStyles } from "@material-ui/core";
import works from "../../../informations/works";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    }
  })
)

const Works: React.FC = () => {
  const classes = useStyles();

  return(
    <>
      <ScreenTop title="Works" />
      <Container maxWidth="md" className={classes.cardGrid} >
      <WorksGrid works={works} isDemo />
      </Container>
    </>
  )
}

export default Works;