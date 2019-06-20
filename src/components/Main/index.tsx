import * as React from "react";
import { Route } from "react-router-dom";
import Profiles from "./Profile";
import Works from "./WorksScreen";
import Contact from "./Contacts";

interface Props {

}

const HomeScreen: React.FC<Props> = ( props ) => {
  return(
    <main>
      <Route exact path="/" component={Profiles} />
      <Route path="/works" component={Works} />
      <Route path="/contact" component={Contact} />
    </main>

  )
}

export default HomeScreen;
