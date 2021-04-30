import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";

import logo from "../../assets/pictures/dark_logo.png";

const BoardAdmin = () => {
  const [content, setContent] = useState("");
  // /* globals Chart:false, feather:false */
  // feather.replace();

  // // Graphs
  // var ctx = document.getElementById("myChart");
  // // eslint-disable-next-line no-unused-vars
  // var myChart = new Chart(ctx, {
  //   type: "line",
  //   data: {
  //     labels: [
  //       "Sunday",
  //       "Monday",
  //       "Tuesday",
  //       "Wednesday",
  //       "Thursday",
  //       "Friday",
  //       "Saturday",
  //     ],
  //     datasets: [
  //       {
  //         data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
  //         lineTension: 0,
  //         backgroundColor: "transparent",
  //         borderColor: "#007bff",
  //         borderWidth: 4,
  //         pointBackgroundColor: "#007bff",
  //       },
  //     ],
  //   },
  //   options: {
  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: false,
  //           },
  //         },
  //       ],
  //     },
  //     legend: {
  //       display: false,
  //     },
  //   },
  // });

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
  return (
    <div className="mt-5 container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" href="/admin/">
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
          <a className="nav-link" aria-current="page" href="/admin/blog">
            Blog
          </a>
        </li>
      </ul>
      <main class="container">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
        </div>
        <canvas
          class="my-4 w-100"
          id="myChart"
          width="900"
          height="380"
        ></canvas>
        <div className="row container mt-5">
          <div className="col-sm-8">
            <h2>Section title</h2>
            <div class="table-responsive">
              <table class="table table-striped table-sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                    <th>Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-sm-4 container mt-5">
            <div class="text-center mb-5">
              <img src={logo} alt="casety logo" />
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
      </main>
    </div>
  );
};

export default BoardAdmin;
