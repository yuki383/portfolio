import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import queryString from "query-string";
import Profiles from "./Profile";
import Works from "./WorksScreen";

interface Props extends RouteComponentProps<{}> {

}

const HomeScreen: React.FC<Props> = ( props ) => {
  const { location } = props;
  const kind = queryString.parse(location.search).kind;
  const display = () => {
    switch(kind) {
      case "works":
        return <Works />
      default:
        return <Profiles />
    }
  }
  
  return (
    <main>
      {display()}
    </main>
  )

}

export default HomeScreen;
