import React, { useEffect, useState } from "react";
import UserService from "../../../services/user.service";

const Users = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    UserService.getAdminBoard();
    UserService.getAllUser().then((e) => setAllUser(e.data));
  }, []);

  return (
    <div style={{ marginTop: 10 }} class=" w-full">
      <div class="bg-white overflow-auto">
        <table class="min-w-full bg-white">
          <thead class="bg-blue-800 text-white">
            <tr>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Id
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Prénom
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Nom
              </th>
              <th class="text-left py-3 px-4 uppercase font-semibold text-sm">
                Email
              </th>
            </tr>
          </thead>
          <tbody class="text-gray-700">
            {allUser.map((e) => (
              <tr>
                <td class="text-left py-3 px-4">{e.id}</td>
                <td class="text-left py-3 px-4">{e.firstname}</td>
                <td class=" text-left py-3 px-4">{e.lastname.toUpperCase()}</td>
                <td class="text-left py-3 px-4">
                  <a
                    class="hover:text-blue-500"
                    href={`mailto:${e.email.toLowerCase()}`}
                  >
                    {e.email.toLowerCase()}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
