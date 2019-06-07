import * as React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, CardActions, Button } from "@material-ui/core";
import { Work } from "../../../types";

declare let window: any;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: {
      paddingTop: "56.25%",
      backgroundSize: "contain"
    },
    description: {
      whiteSpace: "pre-line"
    },
    cardContent: {
      flexGrow: 1
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  })
)

interface Props {
  works: Work[];
  isDemo: boolean;
}

const WorksGrid: React.FC<Props> = ( props ) => {
  const { works,  } = props;
  const classes = useStyles();

  return(
    <div>
      <Grid container spacing={2} justify="center" >
        {works.map(work => (
          <Grid item key={work.id} xs={12} sm={6} >
            <Card className={classes.card} >
              <CardMedia
                className={classes.cardMedia}
                image={work.image}
                title={work.title}
              />
              <CardContent className={classes.cardContent} >
                  <Typography gutterBottom variant="h5" component="h2">
                    {work.title}
                  </Typography>
                  <Typography className={classes.description} >
                    {work.description}
                  </Typography>

              </CardContent>
              <CardActions>
                <Button color="primary" onClick={() => redirect(work.more)} >
                  More
                </Button>
                {demoButton(work)}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

const redirect = (url: string) => {
  window.open(url);
}

const demoButton = (work: Work) => {
  if(work.demo) {
    return <Button color="primary" onClick={() => redirect(work.demo as string)} >Demo</Button>
  } else {
    return <></>
  }
}

export default WorksGrid;
