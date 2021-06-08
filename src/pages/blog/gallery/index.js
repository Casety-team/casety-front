import react, { useState, useEffect } from "react";
import { getAllArticle } from "../../../services/blog.service";
import moment from "moment";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await getAllArticle().then((item) =>
      setData(item.data.map((item) => item))
    );
  }, []);

  return (
    <div class="row mb-2">
      {data.map((item) => {
        return (
          <div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <h3 class="mb-0">{item.title}</h3>
                <div class="mb-1 text-muted">
                  poster le {moment(item.createdAt).format("MM-DD-YYYY")}
                </div>
                <p class="card-text mb-auto">{item.description}</p>
                <a href={`/blog/article/${item.id}`} class="stretched-link">
                  Continue reading
                </a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img
                  src={`/pictures/${item.picture_url}`}
                  class="bd-placeholder-img"
                  style={{ objectFit: "cover" }}
                  width="200"
                  height="250"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gallery;
