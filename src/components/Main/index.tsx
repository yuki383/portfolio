import * as React from "react";
import { Route } from "react-router-dom";
import Profiles from "./Profile";

interface Props {

}

const HomeScreen: React.FC = () => {

  return (
    <main>
      <Route exact path="/" component={Profiles} />
    </main>
  )

}

export default HomeScreen;
