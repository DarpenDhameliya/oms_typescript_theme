import * as React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../pages/home/Home";
import SidebarPage from '../header&sidebar/SidebarPage';
import AddProduct from "../pages/product/AddProduct";

interface IChildIndexProps {}

const ChildIndex: React.FunctionComponent<IChildIndexProps> = (props) => {
  return (
    <>
      <SidebarPage />
        <Switch>
          <Route path="/app/home">
            <HomePage />
          </Route>
          <Route path="/app/product">
            <AddProduct />
          </Route>
        </Switch>
    </>
  );
};

export default ChildIndex;
