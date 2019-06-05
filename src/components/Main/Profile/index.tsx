import * as React from "react";
import ScreenTop from "../../utils/ScreenTop";
import { makeStyles, Theme, Container } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import ProfileRow from "./ProfileRow";

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: theme.palette.background.default
    },
}));

const profiles = [
  {
    title: "名前",
    content: "小久保 祐希"
  },
  {
    title: "学校",
    content: "N高等学校"
  },
  {
    title: "スキル",
    content: "JavaScript / TypeScript / React / Redux / Scala / playframework"
  }

]

const Profiles: React.FC = () => {
  const classes = useStyle();
  const rows = profiles.map(profile => <ProfileRow {...profile} />)
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