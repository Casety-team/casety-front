import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useParams,
} from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./users/Signin";
import Register from "./users/Signup";

import Home from "./Home";
import Blog from "./blog/";
import Article from "./blog/articles/index.js";
import Shop from "./Shop";
import StripeContainer from "../Stripe/StripeContainer";
import StripeSuccess from "../Stripe/StripeSuccess";

import Profile from "./users/Profile";
import BoardUser from "./users/BoardUser";
import BoardModerator from "./moderator/BoardModerator";

import BoardAdmin from "./admin/BoardAdmin";
import Location from "./admin/Location";
import Locker from "./admin/Locker";
import Blogs from "./admin/Blog";

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
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Casety
          </Link>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to={"/home"}>
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/blog"}>
                  Blog
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={"/shop"}>
                  Shop
                </Link>
              </li>
              {showAdminBoard && (
                <li class="nav-item">
                  <Link class="nav-link" to={"/admin"}>
                    Admin Board
                  </Link>
                </li>
              )}
              {showModeratorBoard && (
                <li class="nav-item">
                  <Link class="nav-link" to={"/mod"}>
                    Moderator Board
                  </Link>
                </li>
              )}
              {showUserBoard && (
                <li class="nav-item">
                  <Link class="nav-link" to={"/user"}>
                    User
                  </Link>
                </li>
              )}
              {currentUser ? (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/profile"}>
                      {currentUser.username}
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a href="/login" class="nav-link" onClick={logOut}>
                      LogOut
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/login"}>
                      Login
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to={"/register"}>
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/article/:id" component={Article} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/buy/:productId" component={StripeContainer} />
        <Route
          exact
          path="/stripe/charge/success/:token"
          component={StripeSuccess}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/admin" component={BoardAdmin} />
        <Route exact path="/admin/location" component={Location} />
        <Route exact path="/admin/locker" component={Locker} />
        <Route exact path="/admin/blog" component={Blogs} />
        {/*
        {showUserBoard && (
          <>
            {console.log("showUserBoard")}
            <Route exact path="/user" component={BoardUser} />
            <Route exact path="/user/profile" component={Profile} />
          </>
        )}

        {showModeratorBoard ? (
          <>a
            <Route exact path="/mod" component={BoardModerator} />
          </>
        ) : (
          <Redirect to="/" />
        )}

        {showAdminBoard ? (
          <>
            <Route exact path="/admin" component={BoardAdmin} />
            <Route exact path="/admin/location" component={Location} />
          </>
        ) : (
          <Redirect to="/" />
        )} */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
