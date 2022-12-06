import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";

const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat.split("T")[0];
};
const UsersTable = (props) => {
  const { users, rowCount, setDeleteConfirmationModal , setSelectId } = props;

  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">No</th>
          <th className="whitespace-nowrap">Title</th>
          <th className=" whitespace-nowrap">User</th>
          <th className=" whitespace-nowrap">Notifications</th>
          <th className=" whitespace-nowrap">Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.slice(0, rowCount).map((user, key) => {
          let count = key + 1;
          return (
            <tr key={key} className="intro-x">
              <td className="w-40">{count}</td>
              <td className="w-40">{user.title}</td>
              <td>
                <a href="" className="font-medium whitespace-nowrap">
                  {user?.user?.first_name} {user?.user?.last_name}
                </a>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {user?.user?.email}
                </div>
              </td>

              <td className="text-center">{user.notification}</td>

              <td className="text-center">{formatDate(user.created_at)}</td>
              <td className="table-report__action w-56">
                <div className="flex justify-center items-center">
                  <a
                    className="flex items-center text-danger"
                    href="#"
                    onClick={() => {
                      setDeleteConfirmationModal(true);
                      setSelectId(user.id)
                    }}
                  >
                    <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Delete
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
