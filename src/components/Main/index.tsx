import * as React from "react";
import { Route } from "react-router-dom";
import Profiles from "./Profile";
import Works from "./WorksScreen";

interface Props {

}

const HomeScreen: React.FC = () => {

  return (
    <main>
      <Route exact path="/" component={Profiles} />
      <Route path="/works" component={Works} />
    </main>
  )

}

export default HomeScreen;
