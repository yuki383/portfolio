import * as React from "react";
import ScreenTop from "../../utils/ScreenTop";
import WorksGrid from "./WorksGrid";
import imageOne from "../../../images/hirameki_man.png";
import imageTwo from "../../../images/pose_atama_kakaeru_man_money.png";
import imageThree from "../../../images/pose_atama_kakaeru_woman_money.png";
import { Container, Theme, createStyles } from "@material-ui/core";
import { Work } from "../../../types";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8)
    }
  })
)

const works: Work[] = [
  {
    id: 0,
    title: "calclator",
    description: "React＋Redux+TypeScriptの学習で作成した電卓です。\n少ない横幅でも桁数を多く表示するためにディスプレイを2段にするなどの工夫をしました。",
    path: imageOne
  },
  {
    id: 1,
    title: "two",
    description: "two work",
    path: imageTwo
  },
  {
    id: 2,
    title: "three",
    description: "three work",
    path: imageThree
  }
]

const Works: React.FC = () => {
  const classes = useStyles();

  return(
    <>
      <ScreenTop title="Works" />
      <Container maxWidth="md" className={classes.cardGrid} >
      <WorksGrid works={works} />
      </Container>
    </>
  )
}

export default Works;