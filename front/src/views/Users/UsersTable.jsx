import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";
import { useState } from "react";
import { getAdmin, getBaseApi } from "../../configuration";
import axios from "axios";

const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};
const UsersTable = (props) => {
  const { users, rowCount } = props;

  const [loading, setLoading] = useState(false);

  const handelStatus = async (e, type, user_id) => {
    e.preventDefault();
    setLoading(true);
    console.log(user_id + " " + type);
    const LOGIN_URL = getAdmin() + "update_user_status";

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    try {
      const response = await axios.post(
        LOGIN_URL,
        { type, user_id },
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
          <th className="whitespace-nowrap">Full Name</th>
          <th className="text-center whitespace-nowrap">Email</th>
          <th className="text-center whitespace-nowrap">Approval Status</th>
          <th className="text-center whitespace-nowrap">Created At</th>
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
                  {user.first_name}
                </a>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {user.last_name}
                </div>
              </td>
              <td className="text-center">{user.email}</td>
              <td className="text-center">
                {user.status === "approved" && (
                  <span className="text-xs whitespace-nowrap text-success bg-success border border-success/20 rounded-full px-2 py-1">
                    Approved
                  </span>
                )}
                {user.status === "pending" && (
                  <span className="text-xs whitespace-nowrap text-warning bg-warning border border-warning/20 rounded-full px-2 py-1">
                    Pending
                  </span>
                )}
                 {user.status === "rejected" && (
                  <span className="text-xs whitespace-nowrap text-white bg-danger border border-danger/20 rounded-full px-2 py-1">
                    Rejected
                  </span>
                )}
              </td>
              <td className="text-center">{formatDate(user.created_at)}</td>
              <td className="table-report__action w-64">
                <div className="flex justify-center items-center">
                  {user.status == "pending" && (
                    <>
                      <a
                        className="flex items-center text-success px-2"
                        href="#"
                        onClick={(e) => {
                          handelStatus(e, "approved", user.id);
                        }}
                      >
                        <Lucide icon="Trash2" className="w-4 h-4 mr-1" />{" "}
                        Approve
                      </a>
                      <a
                        className="flex items-center text-warning px-2"
                        href="#"
                        onClick={(e) => {
                          handelStatus(e, "rejected", user.id);
                        }}
                      >
                        <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Reject
                      </a>
                    </>
                  )}

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

export default UsersTable;
