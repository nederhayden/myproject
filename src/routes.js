import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegisterForm from "./pages/Register/RegisterForm";
import EditForm from "./pages/Register/EditForm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={RegisterForm} />
      <Route path="/edit/:id" component={EditForm} />
    </Switch>
  );
}
