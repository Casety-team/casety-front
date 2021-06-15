import { useState, useEffect } from "react";
import { getAllArticle } from "../../../services/blog.service";
import moment from "moment";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      await getAllArticle().then((item) =>
        setData(item.data.map((item) => item))
      );
    })();
  }, []);

  return (
    <div className="row mb-2" style={{ marginTop: 100 }}>
      {data.map((item, i) => {
        return (
          <div key={i} className="col-md-6">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <h3 className="mb-0">{item.title}</h3>
                <div className="mb-1 text-muted">
                  posté le {moment(item.createdAt).format("DD-MM-YYYY")}
                </div>
                <p className="card-text mb-auto">{item.description}</p>
                <a href={`/blog/article/${item.id}`} className="stretched-link">
                  Continue reading
                </a>
              </div>
              <div className="col-auto d-none d-lg-block">
                <img
                  src={`/pictures/${item.picture_url}`}
                  alt={"location"}
                  className="bd-placeholder-img"
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
