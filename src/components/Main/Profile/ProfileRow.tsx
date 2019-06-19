import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, createStyles, Typography, Divider } from "@material-ui/core";

const useStyle = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      background: theme.palette.background.default,
    },
    profileTitle: {
      marginTop: theme.spacing(4),
      marginLeft: theme.spacing(2),
    },
    profileContent: {
      margin: theme.spacing(2, 4, 0)
    }
  })
)

interface Props {
  title: string;
  content: string;
}

const ProfileRow: React.FC<Props> = ( props ) => {
  const classes = useStyle();
  const { title, content } = props;

  return(
    <>
      <Typography className={classes.profileTitle} variant="h4">{title}</Typography>
      <Divider />
      <Typography className={classes.profileContent} variant="h5" gutterBottom >{content}</Typography>
    </>
  )
}

export default ProfileRow;
