import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState } from "react";
import { getAdmin, getBaseApi } from "../../configuration";
import axios from "axios";
import { Link } from "react-router-dom";
const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};
const ViewTable = (props) => {
  const { users, rowCount } = props;

  const [loading, setLoading] = useState(false);

  const handelStatus = async (e, type, form_id) => {
    e.preventDefault();
    setLoading(true);

    const LOGIN_URL = getAdmin() + "update_form_status";

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    try {
      const response = await axios.post(
        LOGIN_URL,
        { type, form_id },
        {
          headers,
        }
      );

      window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">No</th>
          <th className="whitespace-nowrap">User</th>

          <th className="text-center whitespace-nowrap"></th>
          <th className="text-center whitespace-nowrap"></th>
        </tr>
      </thead>
      <tbody>
        {users.slice(0, rowCount).map((user, key) => {
          let count = key + 1;
          return (
            <tr key={key} className="intro-x">
              <td className="w-40">{count}</td>
              <td>
                <a href="" className="font-medium whitespace-nowrap">
                  {user?.user?.first_name + " " + user?.user?.last_name}
                </a>
              </td>

              <td></td>

              <td className="table-report__action w-64">
                <div className="flex justify-center items-center">
                  <Link
                    className="flex items-center text-info  px-2"
                    to={"/forms/viewdata/" + user?.id}
                  >
                    <Lucide icon="Eye" className="w-4 h-4 mr-1" /> View Data
                  </Link>
                  <a
                    className="flex items-center text-danger px-2"
                    href="#"
                    onClick={(e) => {
                      handelStatus(e, "remove", user.id);
                    }}
                  >
                    <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Remove
                  </a>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ViewTable;
