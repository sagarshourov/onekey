import { Lucide } from "@/base-components";

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
          <th className="text-center whitespace-nowrap">Document</th>
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
                  {user.title}
                </a>
              </td>

              <td>{user?.doc_types?.title}</td>

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
