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
      <div class="text-gray-600 body-font">
        <div class="flex">
          <div class="md:w-1/5 mb-10 md:mb-0 border-b border-gray-200">
            <Navbar value="dashboard" />
          </div>
          <div class="md:w-full pr-12 container justily-center items-center">
            <Line data={data} options={options} />
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardAdmin;
