import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Reorder from "@material-ui/icons/Reorder";

import "./Header.css";
import { IconButton, Toolbar, Typography, makeStyles, Theme, } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";

interface Props {

}

const Header: React.FC = () => {

  return (
    <div >
      <AppBar position="static" className="header-bar" >
        <Toolbar >
          <Typography variant="h4" className="header-title" >小久保祐希のポートフォリオ</Typography>
          <IconButton edge="end" >
            <Reorder fontSize="large" className="reorder-icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )

}

export default Header;
