import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, About, Users, Dashboard } from './components/pages/'
import "./App.css";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
