import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import NewRegister from "./pages/Register/NewRegister";
import EditForm from "./pages/Register/EditForm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={NewRegister} />
      <Route path="/edit/:id" component={EditForm} />
    </Switch>
  );
}
