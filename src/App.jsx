import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        <div className="contentWrapper">
          <Switch>
            <Route path="/products" exact>
              <List />
            </Route>
            <Route path="/products/:productId" exact>
              <View />
            </Route>
            <Route path="/create" exact>
              <New />
            </Route>
            <Route path="/products/:productId/edit" exact>
              <Edit />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
