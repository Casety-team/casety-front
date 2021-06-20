import { useState, useEffect } from "react";
import {
  getSingleArticle,
  // getAllArticle,
} from "../../../services/blog.service";
import moment from "moment";
import arrow from "../../home/pictures/arrow-back.svg";

const Articles = () => {
  const [data, setData] = useState([]);
  const getURL = window.location.pathname.split("/")[3];
  useEffect(() => {
    (async () => {
      await getSingleArticle(getURL).then((item) => setData(item.data));
    })();
  }, [getURL]);

  // const [dataAllArticle, setDataAllArticle] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     await getAllArticle().then((item) =>
  //       setDataAllArticle(item.data.map((item) => item))
  //     );
  //   })();
  // }, []);

  return (
    <div style={{ marginTop: 80 }}>
      <section class="flex flex-col md:flex-row">
        <div class="hidden fixed h-full bg-white lg:block md:w-1/3 lg:w-1/1 ">
          <img
            src={"/pictures/" + data.picture_url}
            alt=""
            class="object-cover h-full"
          />
        </div>
        <div class="bg-white">
          <div style={{ marginLeft: 600, marginTop: 50 }}>
            <div class="container mx-auto px-32">
              <a
                href="/blog"
                className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1"
              >
                <div className="flex">
                  <div>
                    <img src={arrow} alt="arrow" />
                  </div>
                  <div className="ml-3">Retour vers les articles</div>
                </div>
              </a>
              <div class="flex flex-col mx-12 mb-2 lg:w-3/4 ">
                <p class="my-4 text-lg leading-snug tracking-tight text-blue-400 lg:w-2/3">
                  {moment(data.createdAt).format("DD-MM-YYYY")}
                </p>
                <h1 class="mb-2 text-3xl font-black tracking-tighter text-black lg:text-5xl md:text-4xl">
                  {data.title}
                </h1>
                <p class="mt-4 text-lg leading-snug tracking-tight text-blueGray-400">
                  {data.description}
                </p>
              </div>
            </div>
            <div class="container px-5 mx-auto">
              <div class="flex flex-col lg:flex-row">
                <div class="w-full px-4 mx-auto mt-12 text-lg leading-snug tracking-tight text-blueGray-400 lg:px-0 lg:w-3/4">
                  <p
                    class="pb-6"
                    dangerouslySetInnerHTML={{ __html: data.text }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
