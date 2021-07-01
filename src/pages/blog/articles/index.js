import { useState, useEffect } from "react";
import { getSingleArticle } from "../../../services/blog.service";
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

  return (
    <div>
      <div class="text-center pt-16 md:pt-32">
        <p class="text-sm md:text-base text-green-500 font-bold">
          {moment(data.createdAt).format("DD-MM-YYYY")}
        </p>
        <h1 class="font-bold break-normal text-3xl md:text-5xl">
          {data.title}
        </h1>
      </div>
      <div
        class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded"
        style={{
          backgroundImage: `url(/pictures/${data.picture_url})`,
          height: "75vh",
        }}
      ></div>

      <div class="container max-w-5xl mx-auto -mt-32">
        <div class="mx-0 sm:mx-6">
          <div
            class="bg-white w-full p-8 md:p-24 text-xl text-gray-800 leading-normal"
            style={{ fontFamily: "Georgia,serif" }}
          >
            <p class="mb-5" dangerouslySetInnerHTML={{ __html: data.text }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
