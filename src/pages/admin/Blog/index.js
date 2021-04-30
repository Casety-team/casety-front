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
        console.log("Fail connect Admin");
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
      <ul className="nav nav-tabs">
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
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="tableau">
              <button
                class="nav-link active"
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
            <li class="nav-item" role="create">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="tableau"
              role="tabpanel"
              aria-labelledby="tableau-tab"
            >
              <TableauBlog />
            </div>
            <div
              class="tab-pane fade"
              id="create"
              role="tabpanel"
              aria-labelledby="create-tab"
            >
              <CreateBlog />
            </div>
            <div
              class="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <UpdateBlog />
            </div>
            <div
              class="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <DeleteBlog />
            </div>
          </div>
        </div>
        <div className="col-sm-4 container mt-5">
          <div class="text-center mb-5">
            <img src={logo} alt="casety logo" />
          </div>
          <div className="card mb-3">
            <div class="card-header">Créer une catégorie</div>
            <div class="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Nom de la catégorie"
                value={nameCat}
                onChange={(item) => setNameCat(item.target.value)}
              />
              <button
                class="btn btn-success"
                type="button"
                id="inputGroupFileAddon04"
                onClick={() => handleAddFormCat()}
              >
                Créer
              </button>
            </div>
          </div>
          <div className="card ">
            <div class="card-header">Raccourcis</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="/admin/">DashBoard</a>
              </li>
              <li className="list-group-item active">
                <a href="/admin/location" className="link-light">
                  Location
                </a>
              </li>
              <li className="list-group-item">
                <a href="/admin/locker">Locker</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
