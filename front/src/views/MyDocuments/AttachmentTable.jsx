import { Lucide } from "@/base-components";
import { getBaseApi } from "../../configuration";
import { Link } from "react-router-dom";



const formatDate = (dat) => {
  //const date = dat.split(" ");
  return dat ? dat.split("T")[0] : "";
};

const UsersTable = (props) => {
  const { users, rowCount , setDeleteConfirmationModal , setSelectId} = props;

  return (
    <table className="table table-report -mt-2">
      <thead>
        <tr>
          <th className="whitespace-nowrap">Sr.no</th>
          <th className="whitespace-nowrap">User</th>
          <th className=" whitespace-nowrap">Document Title</th>
          <th className="text-center whitespace-nowrap">Created At</th>
       
        </tr>
      </thead>
      <tbody>
        {users.map((user, key) => {
          let count = key + 1;
          return (
            <tr key={key} className="intro-x">
              <td className="w-40">{count}</td>
              <td>
              <Link
                  to={"/profile/" + user.id}
                  className="font-medium whitespace-nowrap"
                >
                  {user?.user?.first_name} {user?.user?.last_name}
                </Link>
                <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                  {user?.user?.email}
                </div>
              </td>

              <td>{user.title}</td>

              <td className="text-center">{formatDate(user.created_at)}</td>
              <td className="table-report__action w-56">
                <div className="flex justify-center items-center">
                  <a
                    className="flex items-center text-primary"
                    href={getBaseApi()+'dwonload/'+user.file_path}

                    target="_blank"
                   
                  >
                    <Lucide icon="Download" className="w-4 h-4 mr-1" /> Download
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
