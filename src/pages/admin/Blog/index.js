import React, { useState, useEffect } from "react";

import UserService from "../../../services/user.service";
import { add_new_categorie } from "../../../services/blog.service";

import Navbar from "../Navbar";
import TableauBlog from "./tableau";
import CreateBlog from "./create";
import UpdateBlog from "./update";
import DeleteBlog from "./delete";

const Blog = () => {
  const [nameCat, setNameCat] = useState();
  const [openTab, setOpenTab] = React.useState(1);
  const color = "blue";

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
    <div style={{ marginTop: 80 }} className="bg-grey-500">
      <div class="font-family-karla flex">
        <Navbar value="blog" />
        <div class="w-full overflow-x-hidden border-t flex flex-col">
          <>
            <div className="flex flex-wrap">
              <div className="w-full">
                <ul
                  className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                  role="tablist"
                >
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 1
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(1);
                      }}
                      data-toggle="tab"
                      href="#link1"
                      role="tablist"
                    >
                      Tableau
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 2
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(2);
                      }}
                      data-toggle="tab"
                      href="#link2"
                      role="tablist"
                    >
                      Créer
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 3
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(3);
                      }}
                      data-toggle="tab"
                      href="#link3"
                      role="tablist"
                    >
                      Modifier
                    </a>
                  </li>
                  <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                      className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                        (openTab === 4
                          ? "text-white bg-" + color + "-600"
                          : "text-" + color + "-600 bg-white")
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenTab(4);
                      }}
                      data-toggle="tab"
                      href="#link4"
                      role="tablist"
                    >
                      Supprimer
                    </a>
                  </li>
                </ul>
                <div className="relative flex flex-col min-w-0 break-words bg-grey w-full mb-6 shadow-lg rounded">
                  <div className="px-4 py-5 flex-auto">
                    <div className="tab-content tab-space">
                      <div
                        className={openTab === 1 ? "block" : "hidden"}
                        id="link1"
                      >
                        <TableauBlog />
                      </div>
                      <div
                        className={openTab === 2 ? "block" : "hidden"}
                        id="link2"
                      >
                        <CreateBlog />
                      </div>
                      <div
                        className={openTab === 3 ? "block" : "hidden"}
                        id="link3"
                      >
                        <UpdateBlog />
                      </div>
                      <div
                        className={openTab === 4 ? "block" : "hidden"}
                        id="link4"
                      >
                        <DeleteBlog />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Blog;
