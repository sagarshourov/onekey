import { Lucide, Modal, ModalBody } from "@/base-components";

import { useState } from "react";
import { getAdmin } from "../../configuration";
import axios from "axios";

import { Link } from "react-router-dom";
import { LoadingIcon } from "@/base-components";
import { helper } from "@/utils/helper";
const formatDate = (dat) => {
  //const date = dat.split(" ");
  return helper.formatDate(dat.split("T")[0], "ddd, MMMM D, YYYY");
};
const birth = (dat) => {
  //const date = dat.split(" ");

  var data = JSON.parse(dat);
  return formatDate(data.dateOfBirth);
};

const TrashTable = (props) => {
  const { users, setUserState, rowCount } = props;
  const [restoreConfirmationModal, setRestoreConfirmationModal] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [user_id, setUserId] = useState(0);

  const handelRestore = async () => {
    setLoading(true);
    const LOGIN_URL = getAdmin() + "restore";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    try {
      const response = await axios.post(
        LOGIN_URL,
        { id: user_id },
        {
          headers,
        }
      );
      if (response?.data?.success) {
        setUserState(response?.data?.data);
        setType("");
        setUserId(0);
        setLoading(false);

        alert("Restore Success !");

        setRestoreConfirmationModal(false);
      } else {
        alert("Error ! Please try again later.");
        setLoading(false);
      }
      //window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <table className="table table-report -mt-2">
        <thead>
          <tr>
            <th className="whitespace-nowrap">No</th>
            <th className="whitespace-nowrap">Full Name</th>
            <th className="whitespace-nowrap text-center">Date Of Birth</th>
            <th className="text-center whitespace-nowrap">Email</th>
            <th className="text-center whitespace-nowrap"> Status</th>
            <th className="text-center whitespace-nowrap">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, rowCount).map((user, key) => {
            var date = "";
            if (user.data) {
              // date = helper.formatDate(
              //   birth(user.data.content),
              //   "ddd, MMMM D, YYYY"
              // );
              date = birth(user.data.content);
              //console.log("content",  birth(user.data.content));
            }

            //console.log(user);

            let count = key + 1;
            return (
              <tr key={key} className="intro-x">
                <td className="w-40">{count}</td>
                <td>
                  {user.first_name} {user.last_name}
                </td>
                <td className="text-center">{date}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  <span className="text-xs whitespace-nowrap text-white bg-danger border border-warning/20 rounded-full px-2 py-1">
                    Deleted
                  </span>
                </td>
                <td className="text-center">
                  {helper.formatDate(user?.created_at, "ddd, MMMM D, YYYY")}
                </td>
                <td className="table-report__action w-auto">
                  <button
                    type="button"
                    onClick={() => {
                      setRestoreConfirmationModal(true);
                      setUserId(user.id);
                    }}
                    className="btn btn-warning w-24 mr-1"
                  >
                    Restore
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        show={restoreConfirmationModal}
        onHidden={() => {
          setRestoreConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-warning mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to restore these records? <br />
              This process cannot be undone.
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setRestoreConfirmationModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Close
            </button>
            <button
              onClick={handelRestore}
              type="button"
              className="btn btn-warning w-24"
            >
              Restore
              {loading && (
                <LoadingIcon
                  icon="three-dots"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
};

export default TrashTable;
