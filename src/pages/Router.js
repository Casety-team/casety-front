import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./users/Signin";
import Register from "./users/Signup";
import Home from "./Home";
import Profile from "./users/Profile";
import BoardUser from "./users/BoardUser";
import BoardModerator from "./moderator/BoardModerator";
import BoardAdmin from "./admin/BoardAdmin";

const Router = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowUserBoard(user.roles.includes("ROLE_USER"));
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
          Casety
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

          {showUserBoard && (
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
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        <Route path="/user">{!showUserBoard ? <Redirect to="/" /> : <BoardUser />}</Route>
        <Route path="/mod">{!showModeratorBoard ? <Redirect to="/" /> : <BoardModerator />}</Route>
        <Route path="/admin">{!showAdminBoard ? <Redirect to="/" /> : <BoardAdmin />}</Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
