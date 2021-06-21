import React, { useEffect, useState } from "react";
import UserService from "../../services/user.service";
import moment from "moment";

import Navbar from "./Navbar/";
import Users from "./Users/";
import { Line } from "react-chartjs-2";

const BoardAdmin = () => {
  const [allUser, setAllUser] = useState([]);
  const [date, setDate] = useState([]);
  const [nbUser, setNbUser] = useState([]);

  useEffect(() => {
    UserService.getAdminBoard();
    UserService.getAllUser().then((e) => {
      setAllUser(e.data);
    });
  }, []);

  useEffect(() => {
    var test = [];

    allUser.map((e, i) => {
      return test.push(moment(e.createdAt).format("DD-MM-YYYY"));
    });

    setDate(Array.from(new Set(test)));

    test.sort();
    var current = null;
    var cnt = 0;
    var nb = [];

    for (var i = 0; i < test.length; i++) {
      if (test[i] !== current) {
        if (cnt > 0) {
          nb.push(cnt);
        }
        current = test[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      nb.push(cnt);
    }

    setNbUser(nb);
  }, [allUser]);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Nombres d'inscriptions par jours",
        data: nbUser,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div style={{ marginTop: 80 }} className="bg-white">
      <div class="font-family-karla flex">
        <Navbar value="dashboard" />
        <div class="w-full overflow-x-hidden border-t flex flex-col">
          <main class="w-full flex-grow p-6">
            <h1 class="text-3xl text-black pb-6">Dashboard</h1>
            <div className="header"></div>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <Users />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <Line data={data} options={options} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default BoardAdmin;
