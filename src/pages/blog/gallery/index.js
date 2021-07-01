import { useState, useEffect } from "react";
import { getAllArticle } from "../../../services/blog.service";

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
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        {data.map((item, i) => {
          return (
            <div className="col-span-6 sm:col-span-3">
              <div
                key={i}
                className="bg-white p-2 w-80 max-w-3xl sm:w-full sm:p-4 h-auto sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none mt-5"
              >
                <img
                  className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-100 bg-center bg-cover"
                  src={`/pictures/${item.picture_url}`}
                  alt={"location"}
                />
                <div className="flex sm:flex-1 flex-col gap-2 p-1">
                  <h1 className="text-lg sm:text-xl font-semibold  text-gray-600">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-sm sm:text-base line-clamp-3">
                    {item.description.substr(0, 150)}...
                  </p>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={`/blog/article/${item.id}`}
                      className="ml-auto flex items-center gap-1 sm:text-lg border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-50 transition-colors focus:bg-gray-100 focus:outline-none focus-visible:border-gray-500"
                    >
                      <span>Lire la suite</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
