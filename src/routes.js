import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import RegisterForm from "./pages/Register/RegisterForm";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/register" component={RegisterForm} />
    </Switch>
  );
}
