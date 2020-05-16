import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Edit from "./components/Edit";
import List from "./components/List";
import New from "./components/New";
import Preview from "./components/Preview";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/products" exact>
          <List />
        </Route>
        <Route path="/products/:productId" exact>
          <Preview />
        </Route>
        <Route path="/products/create" exact>
          <New />
        </Route>
        <Route path="/products/:productId/edit" exact>
          <Edit />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
