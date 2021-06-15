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
  }, [getURL]);

  const [dataAllArticle, setDataAllArticle] = useState([]);
  useEffect(() => {
    (async () => {
      await getAllArticle().then((item) =>
        setDataAllArticle(item.data.map((item) => item))
      );
    })();
  }, []);

  return (
    <main className="container" style={{ marginTop: 100 }}>
      <div className="row">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Casety - Blog</h3>
          <article className="blog-post">
            <h2 className="blog-post-title">{data.title}</h2>
            <p className="blog-post-meta">
              {moment(data.createdAt).format("DD-MM-YYYY")} by{" "}
              <span className="font-weight-bold">Casety</span>
            </p>
            <h4 className="blog-post-meta">Introduction</h4>
            <p>{data.description}</p>
            <hr />
            <img
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "21px 21px 0 0",
              }}
              src={"/pictures/" + data.picture_url}
              alt="location"
            />
            <h3 className="blog-post-meta mt-5">Article</h3>
            <hr />
            <p>{data.text}</p>
          </article>
        </div>

        <div className="col-md-4">
          <div className="p-4 mb-3 bg-light rounded">
            <h4 className="fst-italic">A propos</h4>
            <p className="mb-0">
              Ne vous souciez plus de vos affaires pendant la journée, et
              profitez pleinement de la vie Parisienne, grâce aux casiers
              autonomes Casety ! Les Casety sont à votre disposition pour
              déposer toutes vos affaires, et sont disponibles 7/24 !
            </p>
          </div>

          <div className="p-4">
            <h4 className="fst-italic">Autres articles</h4>
            <ol className="list-unstyled mb-0">
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
