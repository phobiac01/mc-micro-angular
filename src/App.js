import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import ServerList from "./pages/serverList";
import CreateServer from "./pages/createServer";
import UpdateServer from "./pages/updateServer";
import DeleteServer from "./pages/deleteServer";

export default function App() {
  return (
    <Switch>
      <Route path="/serverList" component={ServerList} />
      <Route path="/createServer" component={CreateServer} />
      <Route path="/updateServer" component={UpdateServer} />
      <Route path="/deleteServer" component={DeleteServer} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
}
