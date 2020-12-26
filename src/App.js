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
      <Route path="/serverList">
        <ServerList />
      </Route>
      <Route path="/createServer">
        <CreateServer />
      </Route>
      <Route path="/updateServer">
        <UpdateServer />
      </Route>
      <Route path="/deleteServer">
        <DeleteServer />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
