import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./users/Signin";
import Register from "./users/Signup";

import Home from "./Home";
import Blog from "./blog";
import Article from "./blog/articles/index.js";
import Shop from "./Shop";
import Success from "./stripe/success";
import Error from "./stripe/error";

import Profile from "./users/Profile";

import BoardAdmin from "./admin/BoardAdmin";
import Location from "./admin/Location";
import Locker from "./admin/Locker";
import Blogs from "./admin/Blog";

const Router = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [showUserBoard, setShowUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowUserBoard(user.roles.includes("ROLE_USER"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <BrowserRouter>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to={"/"}>
            Casety
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav me-auto mb-2 mb-lg-0">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to={"/home"}>
                    Accueil
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/shop"}>
                    Boutique
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/blog"}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div class="d-flex">
              <ul class="navbar-nav">
                {showAdminBoard && (
                  <li class="nav-item">
                    <Link class="nav-link" to={"/admin"}>
                      Dashboard
                    </Link>
                  </li>
                )}
                {showUserBoard && (
                  <li class="nav-item">
                    <Link class="nav-link" to={"/profile"}>
                      Profil
                    </Link>
                  </li>
                )}
                {currentUser ? (
                  <>
                    <li class="nav-item">
                      <a href="/login" class="nav-link" onClick={logOut}>
                        Déconnexion
                      </a>
                    </li>
                  </>
                ) : (
                  <>
                    <li class="nav-item">
                      <Link class="nav-link" to={"/login"}>
                        Connexion
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link class="nav-link" to={"/register"}>
                        Inscription
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path={["/", "/home"]} component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/article/:id" component={Article} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/shop" component={Shop} />
        <Route
          path="stripe/charge/success/:token/?sc_checkout=success"
          component={Success}
        />
        <Route
          exact
          path="stripe/charge/error/?sc_checkout=cancel"
          component={Error}
        />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/admin" component={BoardAdmin} />
        <Route exact path="/admin/location" component={Location} />
        <Route exact path="/admin/locker" component={Locker} />
        <Route exact path="/admin/blog" component={Blogs} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
