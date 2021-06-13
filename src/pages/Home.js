import React from "react";

import mobile from "../assets/pictures/mobile.png";

const Home = () => {
  return (
    <div className="container">
      <div className="px-4 pt-5 my-5 text-center">
        <div className="row mt-5">
          <div className="col align-middle" style={{ marginTop: 200 }}>
            <h1>Casety sur web</h1>
            <p className="lead mb-4">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
          </div>
          <div className="col">
            <div className="container px-5">
              <img
                src={mobile}
                className="img-fluid rounded-3 shadow mb-4"
                alt="web picture"
                width="500"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
