import { useState, useEffect } from "react";
import {
  getSingleArticle,
  getAllArticle,
} from "../../../services/blog.service";
import moment from "moment";

import "../blog.css";

const Articles = () => {
  const [data, setData] = useState([]);
  const getURL = window.location.pathname.split("/")[3];
  useEffect(() => {
    (async () => {
      await getSingleArticle(getURL).then((item) => setData(item.data));
    })();
  }, []);

  const [dataAllArticle, setDataAllArticle] = useState([]);
  useEffect(() => {
    (async () => {
      await getAllArticle().then((item) =>
        setDataAllArticle(item.data.map((item) => item))
      );
    })();
  }, []);

  return (
    <main class="container mt-5">
      <div class="row">
        <div class="col-md-8">
          <h3 class="pb-4 mb-4 fst-italic border-bottom">Casety - Blog</h3>
          <article class="blog-post">
            <h2 class="blog-post-title">{data.title}</h2>
            <p class="blog-post-meta">
              {moment(data.createdAt).format("DD-MM-YYYY")} by{" "}
              <a href="/">Casety</a>
            </p>
            <h4 class="blog-post-meta">Introduction</h4>
            <p>{data.description}</p>
            <hr />
            <h3 class="blog-post-meta">Article</h3>
            <p>{data.text}</p>
          </article>
        </div>

        <div class="col-md-4">
          <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">A propos</h4>
            <p class="mb-0">
              Ne vous souciez plus de vos affaires pendant la journée, et
              profitez pleinement de la vie Parisienne, grâce aux casiers
              autonomes Casety ! Les Casety sont à votre disposition pour
              déposer toutes vos affaires, et sont disponibles 7/24 !
            </p>
          </div>

          <div class="p-4">
            <h4 class="fst-italic">Autres articles</h4>
            <ol class="list-unstyled mb-0">
              {dataAllArticle.map((item) => {
                return (
                  <li>
                    <a href={`${item.id}`}>{item.title}</a>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Articles;
