import { Lucide } from "@/base-components";
import * as $_ from "lodash";
import classnames from "classnames";
import { getBaseApi } from "../../configuration";

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
          <th className="whitespace-nowrap">Document Title</th>
          <th className=" whitespace-nowrap">Document Type</th>
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
                <a href="" className="font-medium whitespace-nowrap">
                  {user.title}
                </a>
              </td>

              <td>{user?.doc_types?.title}</td>

              <td className="text-center">{formatDate(user.created_at)}</td>
              <td className="table-report__action w-56">
                <div className="flex justify-center items-center">
                  <a
                    className="flex items-center text-primary"
                    href={getBaseApi()+'dwonload/'+user.file_path}

                    target="_blank"
                   
                  >
                    <Lucide icon="Download" className="w-4 h-4 mr-1" /> Dwonload
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
