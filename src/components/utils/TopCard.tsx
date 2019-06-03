import * as React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

interface Props {
  title: string;
}

export default class TopCard extends React.Component<Props> {
  render() {
    const { title, } = this.props;
    return(
      <Card>
        <CardContent>
          <Typography>{title}</Typography>
        </CardContent>
      </Card>
    )
  }
}