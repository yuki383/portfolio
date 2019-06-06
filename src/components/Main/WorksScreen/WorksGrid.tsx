import * as React from "react";
import { Grid, Card, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Work } from "../../../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: {
      paddingTop: "56.25%"
    },
    description: {
      whiteSpace: "pre-line"
    }
  })
)

interface Props {
  works: Work[];
}

const WorksGrid: React.FC<Props> = ( props ) => {
  const { works, } = props;
  const classes = useStyles();

  return(
    <div>
      <Grid container spacing={2} justify="center" >
        {works.map(work => (
          <Grid item key={work.id} xs={12} sm={6} >
            <Card >
              <CardMedia
                className={classes.cardMedia}
                image={work.path}
                title={work.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  {work.title}
                </Typography>
                <Typography className={classes.description} >
                  {work.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default WorksGrid;
