import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Reorder from "@material-ui/icons/Reorder";

import "./Header.css";
import { IconButton, Icon } from "@material-ui/core";

interface Props {
  
}


export default class Header extends React.Component<Props> {
  render() {
    return(
      <header>
          <AppBar color="primary" >
            <div className="header-bar">
              <span className="header-title" >Yuki Kokubo</span>
              <div className="header-icon">
                <IconButton >
                  <Reorder fontSize="large" />
                </IconButton>
              </div>
            </div>
          </AppBar>
      </header>
    )
  }

}