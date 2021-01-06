import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./users/Signin";
import Register from "./users/Signup";
import Home from "./Home";
import Profile from "./users/Profile";
import BoardUser from "../components/user/BoardUser";
import BoardModerator from "../components/moderator/BoardModerator";
import BoardAdmin from "../components/admin/BoardAdmin";

const Router = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <BrowserRouter>
      <nav>
        <Link to={"/"}>
          bezKoder
        </Link>
        <div>
          <li>
            <Link to={"/home"}>
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li>
              <Link to={"/mod"}>
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li>
              <Link to={"/admin"}>
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li>
              <Link to={"/user"}>
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div>
            <li>
              <Link to={"/profile"}>
                {currentUser.username}
              </Link>
            </li>
            <li>
              <a href="/login" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to={"/login"}>
                Login
              </Link>
            </li>

            <li>
              <Link to={"/register"}>
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Router;
