import * as React from "react";
import ScreenTop from "../../utils/ScreenTop";
import { makeStyles, Theme, Container } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import ProfileRow from "./ProfileRow";
import profiles from "../../../informations/profiles";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default
    },
}));

const Profiles: React.FC = () => {
  const classes = useStyle({});
  const rows = profiles.map(profile => <ProfileRow key={profile.title} {...profile} />)
  return(
    <div className={classes.root} >
      <ScreenTop title="Profile" />
      <Container maxWidth="md">
        {rows}
      </Container>
    </div>
  )
}

export default Profiles;