import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Edit from "./components/Edit";
import List from "./components/List";
import New from "./components/New";
import Preview from "./components/Preview";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/create">Create Product</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/products" exact>
            <List />
          </Route>
          <Route path="/products/:productId" exact>
            <Preview />
          </Route>
          <Route path="/create" exact>
            <New />
          </Route>
          <Route path="/products/:productId/edit" exact>
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
