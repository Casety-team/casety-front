import React, { useEffect } from "react";
import UserService from "../../services/user.service";

import logo from "../../assets/pictures/dark_logo.png";

const BoardAdmin = () => {
  useEffect(() => {
    UserService.getAdminBoard();
  }, []);
  return (
    <div className="mt-5 container">
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
      </div>
      <ul className="nav nav-tabs" style={{ marginTop: 100 }}>
        <li className="nav-item">
          <a className="nav-link active" href="/admin/">
            DashBoard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/admin/location">
            Location
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/admin/locker">
            Locker
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/admin/blog">
            Blog
          </a>
        </li>
      </ul>
      <main className="container">
        <div className="row container mt-5">
          <div className="col-sm-8"></div>
          <div className="col-sm-4 container mt-5">
            <div class="text-center mb-5">
              <img src={logo} alt="casety logo" />
            </div>
            <div className="card ">
              <div class="card-header">Raccourcis</div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item active">
                  <a href="/admin/" className="link-light">
                    DashBoard
                  </a>
                </li>
                <li className="list-group-item ">
                  <a href="/admin/location">Location</a>
                </li>
                <li className="list-group-item">
                  <a href="/admin/locker">Locker</a>
                </li>
                <li className="list-group-item">
                  <a href="/admin/blog">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoardAdmin;
