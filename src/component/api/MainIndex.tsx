import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthLogin from "../auth/Login";
import ChildIndex from "./ChildIndex";

interface IIndexRouterProps {}

const IndexRouter: React.FunctionComponent<IIndexRouterProps> = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <AuthLogin />
          </Route>
          <Route path="/app">
            <ChildIndex />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
