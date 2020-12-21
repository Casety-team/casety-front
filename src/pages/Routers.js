import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

//Pages 
import Home from './Home';
import Signin from './users/Signin';
import Signup from './users/Signup';


export default class Routers extends React.Component {
  render(){
    return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
          <li>
            <Link to="/signup">Sign up</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
  }
}