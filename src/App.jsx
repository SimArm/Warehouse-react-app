import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import "./App.scss";
import Edit from "./components/Edit";
import List from "./components/List";
import New from "./components/New";
import View from "./components/View";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <nav className="nav">
          <div className="navWrapper">
            <ul>
              <li>
                <NavLink to="/products" activeClassName="activeNav">Products</NavLink>
              </li>
              <li>
                <NavLink to="/create" activeClassName="activeNav">Create Product</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="contentWrapper">
          <Switch>
            <Route path="/products" exact strict>
              <List />
            </Route>
            <Route path="/products/:productId" exact strict>
              <View />
            </Route>
            <Route path="/create" exact strict>
              <New />
            </Route>
            <Route path="/products/:productId/edit" exact strict>
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
