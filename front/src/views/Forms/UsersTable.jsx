import { Lucide } from "@/base-components";
import { useState } from "react";
import { getAdmin } from "../../configuration";
import axios from "axios";
import { Link } from "react-router-dom";
const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};
const UsersTable = (props) => {
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
          <th className="whitespace-nowrap">Title</th>

          {/* <th className="text-center whitespace-nowrap">Allow Edit</th> */}
          <th className="text-center whitespace-nowrap">Visibility</th>
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
                  {user.title}
                </a>
              </td>

              {/* <td className="text-center">
                {user.allows_edit === 1 ? (
                  <span className="text-xs whitespace-nowrap text-white bg-success border border-success/20 rounded-full px-2 py-1">
                    Allowed
                  </span>
                ) : (
                  <span className="text-xs whitespace-nowrap text-white bg-warning border border-warning/20 rounded-full px-2 py-1">
                    Disallowed
                  </span>
                )}
              </td> */}

              <td className="text-center">
                <div className="flex justify-center items-center">
                  {user.visibility === 1 ? (
                    <a
                      className="flex items-center text-success px-2"
                      href="#"
                      onClick={(e) => {
                        handelStatus(e, "public", user.id);
                      }}
                    >
                      <Lucide icon="Unlock" className="w-4 h-4 mr-1" /> Public
                    </a>
                  ) : (
                    <a
                      className="flex items-center text-danger px-2"
                      href="#"
                      onClick={(e) => {
                        handelStatus(e, "private", user.id);
                      }}
                    >
                      <Lucide icon="Lock" className="w-4 h-4 mr-1" /> Private
                    </a>
                  )}
                </div>
              </td>

              <td className="table-report__action w-64">
                <div className="flex justify-center items-center">
                  <Link
                    className="flex items-center text-primary  px-2"
                    to={"/forms/edit/" + user.id}
                  >
                    <Lucide icon="Edit" className="w-4 h-4 mr-1" /> Edit
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

                  <Link
                    className="flex items-center text-info px-2"
                    to={"/forms/view/" + user.id}
                  >
                    <Lucide icon="Eye" className="w-4 h-4 mr-1" /> View
                  </Link>
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
