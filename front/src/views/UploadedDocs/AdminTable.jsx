import { Lucide } from "@/base-components";

import { Link } from "react-router-dom";

const formatDate = (dat) => {


  //const date = dat.split(" ");
   return dat.split("T")[0];
};
const UsersTable = (props) => {
  const { users, rowCount, setDeleteConfirmationModal, setSelectId } = props;

  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">Sr.no</th>
          <th className="whitespace-nowrap">Name</th>
          <th className="whitespace-nowrap">email</th>
          <th className=" whitespace-nowrap">Attachment</th>
          <th className=" whitespace-nowrap">Created At</th>
        </tr>
      </thead>
      <tbody>
        {users.slice(0, rowCount).map((userobj, key) => {
          //(user[0].user);

        

          let user = userobj[0] && userobj[0].user;

          let count = key + 1;
          return (
            <tr key={key} className="intro-x">
              <td className="w-40">{count}</td>
              <td>
                <a href="" className="font-medium whitespace-nowrap">
                  {user?.first_name}
                </a>
              </td>

              <td> {user?.email}</td>
              <td><Link className="btn" to={"/view_attchment/"+user?.id} params={{ testvalue: "hello" }} >View Attachment</Link></td>
              <td className="text-center">{userobj[0] && formatDate(userobj[0].created_at)}</td>
             
              <td className="table-report__action w-56">
                <div className="flex justify-center items-center">
                  <a
                    className="flex items-center text-danger"
                    href="#"
                    onClick={() => {
                      setDeleteConfirmationModal(true);
                      setSelectId(user.id);
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
