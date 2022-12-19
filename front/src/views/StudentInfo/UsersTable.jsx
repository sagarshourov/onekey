import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";

import { Link } from "react-router-dom";

const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};
const UsersTable = (props) => {
  const { users, setFdata, rowCount, setUserId, handelModel } = props;

  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap"></th>
          <th className="whitespace-nowrap">User</th>
          <th className="whitespace-nowrap">Code</th>
          <th className="text-center whitespace-nowrap">Interview</th>
          <th className="text-center whitespace-nowrap">Universty</th>
          <th className="text-center whitespace-nowrap">Visa Type</th>
        </tr>
      </thead>
      <tbody>
        {users.slice(0, rowCount).map((user, key) => {
          let count = key + 1;
          return (
            <tr key={key} className="intro-x">
              <td className="w-40">{count}</td>
              <td>
                <Link
                  to={"/profile/" + user.id}
                  className="font-medium whitespace-nowrap"
                >
                  {user.first_name} {user.last_name}
                </Link>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {user.email}
                </div>
              </td>
              <td className="text-center"> {user?.student_info?.code} </td>

              <td className="text-center">
                <a href="" className="font-medium whitespace-nowrap">
                  {user?.student_info?.interview_date}
                </a>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {user?.student_info?.interview_time}
                </div>
              </td>
              <td> {user?.student_info?.university}</td>
              <td> {user?.student_info?.visa_type}</td>
              <td className="table-report__action w-56">
                <div className="flex justify-center items-center">
                  <a
                    className="flex items-center text-info"
                    href="#"
                    onClick={() => {
                      handelModel(true,user);
                    }}
                  >
                    <Lucide icon="Edit" className="w-4 h-4 mr-1" /> Update
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
