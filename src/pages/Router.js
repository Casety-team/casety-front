import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import AuthService from "../services/auth.service";

import Login from "./users/Signin";
import Register from "./users/Signup";

import Home from "./Home";
import Blog from "./blog";
import Article from "./blog/articles/index.js";
import Shop from "./Shop";
import ShopView from "./ShopView";
import Terms from "./Terms";
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            Casety
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav me-auto mb-2 mb-lg-0">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" to={"/home"}>
                    Accueil
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/shopview"}>
                    Nos casiers
                  </Link>
                </li>
                {showUserBoard && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/shop"}>
                      Boutique
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link className="nav-link" to={"/blog"}>
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="d-flex">
              <ul className="navbar-nav">
                {showAdminBoard && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/admin"}>
                      Dashboard
                    </Link>
                  </li>
                )}
                {showUserBoard && (
                  <li className="nav-item">
                    <Link className="nav-link" to={"/profile"}>
                      Profil
                    </Link>
                  </li>
                )}
                {currentUser ? (
                    <li className="nav-item">
                      <a href="/login" className="nav-link" onClick={logOut}>
                        Déconnexion
                      </a>
                    </li>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/login"}>
                        Connexion
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/register"}>
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
      <Route exact path="/shopview" component={ShopView} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/blog/article/:id" component={Article} />
        <Route exact path="/terms" component={Terms} />
        <Route
          path="stripe/charge/success/:token/?sc_checkout=success"
          component={Success}
        />
        <Route
          exact
          path="stripe/charge/error/?sc_checkout=cancel"
          component={Error}
        />
        {currentUser ? showAdminBoard ? (
          <>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path={"/admin"} component={BoardAdmin} />
            <Route exact path="/admin/location" component={Location} />
            <Route exact path="/admin/locker" component={Locker} />
            <Route exact path="/admin/blog" component={Blogs} />
          </>
        ) : (        
            <>
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/shop" component={Shop} />
            </>
          ) : (
            <>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
