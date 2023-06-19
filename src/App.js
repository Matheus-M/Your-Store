import { useState, useEffect } from "react";
import axios from "axios";

import {  BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Store from "./components/Store";
import Product from "./components/Product";


function App() {

return (
      <Router>
        <Switch>
          <Route  path="/" exact component={(props) => <Store/>} />         
          <Route path="/product/:id" 
          component= { props => <Product {...props}/>}
          />
          <Route>404 page</Route>
        </Switch>
    </Router>
);

}

export default App;
