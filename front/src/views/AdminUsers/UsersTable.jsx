import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";
const UsersTable = (props) => {
  const { users } = props;
  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">No</th>
          <th className="whitespace-nowrap">Full Name</th>
          <th className="text-center whitespace-nowrap">Email</th>
          <th className="text-center whitespace-nowrap">Created At</th>
        </tr>
      </thead>
      <tbody>
        {$_.take(users, 20).map((user, fakerKey) => (
          <tr key={fakerKey} className="intro-x">
            <td className="w-40">{fakerKey}</td>
            <td>
              <a href="" className="font-medium whitespace-nowrap">
                {user.first_name}
              </a>
              <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                {user.first_name}
              </div>
            </td>
            <td className="text-center">{user.first_name}</td>
            <td className="w-40">
              <div
                className={classnames({
                  "flex items-center justify-center": true,
                  "text-success": users.first_name,
                  "text-danger": !users.first_name,
                })}
              >
                <Lucide icon="CheckSquare" className="w-4 h-4 mr-2" />
                {users.first_name ? "Active" : "Inactive"}
              </div>
            </td>
            <td className="table-report__action w-56">
              <div className="flex justify-center items-center">
                <a className="flex items-center mr-3" href="#">
                  <Lucide icon="CheckSquare" className="w-4 h-4 mr-1" /> Edit
                </a>
                <a
                  className="flex items-center text-danger"
                  href="#"
                  onClick={() => {
                    //setDeleteConfirmationModal(true);
                  }}
                >
                  <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
                </a>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
