import React, { useState, useEffect } from "react";
import UserService from "../../../services/user.service";
import { add_new_categorie } from "../../../services/blog.service";

import TableauBlog from "./tableau";
import CreateBlog from "./create";
import UpdateBlog from "./update";
import DeleteBlog from "./delete";

import logo from "../../../assets/pictures/dark_logo.png";

const Blog = () => {
  const [nameCat, setNameCat] = useState();

  useEffect(() => {
    UserService.getAdminBoard().then(
      () => {
        console.log("Success Admin connect");
      },
      (error) => {
        console.log("Fail connect Admin", error);
      }
    );
  }, []);

  const handleAddFormCat = () => {
    add_new_categorie(nameCat).then(() => {
      setNameCat("");
      console.log("Create success categorie");
    });
  };

  return (
    <div className="mt-5 container">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
        crossorigin="anonymous"
      />
      <ul className="nav nav-tabs" style={{ marginTop: 100 }}>
        <li className="nav-item">
          <a className="nav-link" href="/admin/">
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
          <a className="nav-link active" aria-current="page" href="/admin/blog">
            Blog
          </a>
        </li>
      </ul>

      <div className="row mt-5">
        <div className="col-sm-8">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <button
                className="nav-link active"
                id="tableau-tab"
                data-bs-toggle="tab"
                data-bs-target="#tableau"
                type="button"
                role="tab"
                aria-controls="tableau"
                aria-selected="true"
              >
                Tableau
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                id="create-tab"
                data-bs-toggle="tab"
                data-bs-target="#create"
                type="button"
                role="tab"
                aria-controls="create"
                aria-selected="false"
              >
                Créer
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Mettre à jour
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Supprimer
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tableau"
              role="tabpanel"
              aria-labelledby="tableau-tab"
            >
              <TableauBlog />
            </div>
            <div
              className="tab-pane fade"
              id="create"
              role="tabpanel"
              aria-labelledby="create-tab"
            >
              <CreateBlog />
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <UpdateBlog />
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <DeleteBlog />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
