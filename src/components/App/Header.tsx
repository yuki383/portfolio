import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Reorder from "@material-ui/icons/Reorder";

import "./Header.css";
import { IconButton, Icon } from "@material-ui/core";

interface Props {
  
}

interface State {
  value: number;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0
    };
  }

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

  _handleOnClick(value: number) {
    this.setState({ value });
  }
}