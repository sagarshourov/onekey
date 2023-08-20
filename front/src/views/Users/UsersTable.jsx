import {
  Lucide,
  Modal,
  Dropdown,
  DropdownContent,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ModalBody,
} from "@/base-components";

import { useState } from "react";
import { getAdmin } from "../../configuration";
import axios from "axios";

import { useRecoilValueLoadable, useRecoilValue } from "recoil";
import { allFormListSelect } from "../../state/admin-atom";

import { Link } from "react-router-dom";
import { LoadingIcon } from "@/base-components";
import { helper } from "@/utils/helper";
import { loginState } from "../../state/login-atom";
const formatDate = (dat) => {
  //const date = dat.split(" ");
  return helper.formatDate(dat.split("T")[0], "ddd, MMMM D, YYYY");
};
const birth = (dat) => {
  //const date = dat.split(" ");

  var data = JSON.parse(dat);
  return formatDate(data.dateOfBirth);
};

const isAdmin = localStorage.isAdmin
  ? parseInt(localStorage.getItem("isAdmin"))
  : 1;

const UsersTable = (props) => {
  const { users, setUserState, handelStudentModel, rowCount } = props;
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);
  const [approveConfirmationModal, setApproveConfirmationModal] =
    useState(false);

  const [rejectConfirmationModal, setRejectConfirmationModal] = useState(false);

  const [archiveConfirmationModal, setArchiveConfirmationModal] =
    useState(false);
  const [messageShow, setMessageShow] = useState(false);
  const loginData = useRecoilValue(loginState);

  const allForm = useRecoilValueLoadable(allFormListSelect);

  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [user_id, setUserId] = useState(0);
  const handelStatus = async () => {
    setLoading(true);

    const LOGIN_URL = getAdmin() + "update_user_status";

    const token = localStorage.getItem("token");
  
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    // { id: user_id, status: "archive" },
    try {
      const response = await axios.post(
        LOGIN_URL,
        { type, user_id },
        {
          headers,
        }
      );

      if (response?.data?.success) {
        setMessageShow(true);
        setTimeout(function () {
          
          setUserState(response?.data?.data);
          if (type == "approved") {
            setApproveConfirmationModal(false);
          }
          if (type == "remove") {
            setDeleteConfirmationModal(false);
          }
          if (type == "rejected") {
            setRejectConfirmationModal(false);
          }
          if (type == "archive") {
            setArchiveConfirmationModal(false);
          }
        }, 1000);

        setTimeout(function () {
          setMessageShow(false);
        }, 2000);

        setType("");
        setUserId(0);
        setLoading(false);
      } else {
        alert("Error ! Please try again later.");
        setLoading(false);
      }
      //window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  const handelDeleteConfrim = async (e, type, user_id) => {
    e.preventDefault();

    if (type == "approved") {
      setApproveConfirmationModal(true);
    }
    if (type == "remove") {
      setDeleteConfirmationModal(true);
    }
    if (type == "rejected") {
      setRejectConfirmationModal(true);
    }
    if (type == "archive") {
      setArchiveConfirmationModal(true);
    }

    setUserId(user_id);
    setType(type);
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
            <th className="text-center whitespace-nowrap">Approval Status</th>
            <th className="text-center whitespace-nowrap">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.slice(0, rowCount).map((user, key) => {
            //console.log("user", user);

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
                <td>{count}</td>
                <td>
                  <Link
                    to={"/profile/" + user.id}
                    className="font-medium whitespace-nowrap"
                  >
                    {user.first_name} {user.last_name}
                  </Link>
                </td>
                <td className="text-center">{date}</td>
                <td className="text-center">{user.email}</td>
                <td className="text-center">
                  {user.status === "approved" && (
                    <span className="text-xs whitespace-nowrap text-white bg-success border border-success/20 rounded-full px-2 py-1">
                      Approved
                    </span>
                  )}
                  {user.status === "pending" && (
                    <span className="text-xs whitespace-nowrap text-white bg-warning border border-warning/20 rounded-full px-2 py-1">
                      Pending
                    </span>
                  )}
                  {user.status === "rejected" && (
                    <span className="text-xs whitespace-nowrap text-white bg-danger border border-danger/20 rounded-full px-2 py-1">
                      Rejected
                    </span>
                  )}
                </td>
                <td className="text-center">
                  {helper.formatDate(user?.created_at, "ddd, MMMM D, YYYY")}
                </td>
                <td className="table-report__action w-auto">
                  <div className="flex justify-center items-center">
                    {allForm.state == "hasValue" && (
                      <Dropdown>
                        <DropdownToggle className="w-5 h-5 text-slate-500">
                          <Lucide icon="ChevronDown" className="w-4 h-4" />
                        </DropdownToggle>
                        <DropdownMenu className="w-40">
                          <DropdownContent>
                            {allForm.contents.map((val, index) => {
                              return (
                                <DropdownItem tag="div" key={index}>
                                  <Link
                                    to={"/form_view/" + val.id + "/" + user.id}
                                  >
                                    {val.title}
                                  </Link>
                                </DropdownItem>
                              );
                            })}
                          </DropdownContent>
                        </DropdownMenu>
                      </Dropdown>
                    )}

                    {user.status == "pending" ? (
                      <>
                        <a
                          className="flex items-center text-info px-2"
                          href="#"
                          onClick={(e) => {
                            handelDeleteConfrim(e, "approved", user.id);
                          }}
                        >
                          <Lucide icon="CheckCircle" className="w-4 h-4 mr-1" />{" "}
                          Approve
                        </a>
                        <a
                          className="flex items-center text-warning px-2"
                          href="#"
                          onClick={(e) => {
                            handelDeleteConfrim(e, "rejected", user.id);
                          }}
                        >
                          <Lucide icon="XCircle" className="w-4 h-4 mr-1" />{" "}
                          Reject
                        </a>
                      </>
                    ) : (
                      <>
                        <Link
                          className="flex items-center text-success px-2"
                          to={"/profile/" + user.id}
                        >
                          {" "}
                          <Lucide icon="User" className="w-4 h-4 mr-1" /> View
                          Profile
                        </Link>
                        <a
                          className="flex items-center text-warning   px-2"
                          href="#"
                          onClick={(e) => {
                            handelDeleteConfrim(e, "archive", user.id);
                          }}
                        >
                          <Lucide icon="Archive" className="w-4 h-4 mr-1" />{" "}
                          Archive
                        </a>
                        {/* <Link
                          className="flex items-center text-warning   px-2"
                          to={"/board/" + user.id}
                        >
                          {" "}
                          <Lucide icon="Clipboard" className="w-4 h-4 mr-1" />
                          Task Board
                        </Link> */}
                        {isAdmin === 1 && (
                          <Link
                            className="flex items-center text-info   px-2"
                            to={"/app_status/" + user.id}
                          >
                            {" "}
                            <Lucide icon="Clipboard" className="w-4 h-4 mr-1" />
                            Status
                          </Link>
                        )}
                      </>
                    )}

                    <a
                      className="flex items-center text-violet-600"
                      href="#"
                      onClick={() => {
                        handelStudentModel(true, user);
                      }}
                    >
                      <Lucide icon="Edit" className="w-4 h-4 mr-1" /> Student
                      Info
                    </a>

                    {loginData.isAdmin !== 2 && (
                      <a
                        className="flex items-center text-danger px-2"
                        href="#"
                        onClick={(e) => {
                          handelDeleteConfrim(e, "remove", user.id);
                        }}
                      >
                        <Lucide icon="Trash2" className="w-4 h-4 mr-1" /> Remove
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal
        show={archiveConfirmationModal}
        onHidden={() => {
          setArchiveConfirmationModal(false);
        }}
      >
        {messageShow ? (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Check"
                className="w-16 h-16 text-success mx-auto mt-3"
              />
              <div className="text-3xl mt-5 mb-5">Success !</div>
            </div>
          </ModalBody>
        ) : (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Archive"
                className="w-16 h-16 text-warning mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to archive these records? <br />
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setArchiveConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                onClick={handelStatus}
                type="button"
                className="btn btn-warning w-24"
              >
                Archive
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
        )}
      </Modal>

      <Modal
        show={rejectConfirmationModal}
        onHidden={() => {
          setRejectConfirmationModal(false);
        }}
      >
        {messageShow ? (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Check"
                className="w-16 h-16 text-success mx-auto mt-3"
              />
              <div className="text-3xl mt-5 mb-5">Success !</div>
            </div>
          </ModalBody>
        ) : (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="XCircle"
                className="w-16 h-16 text-warning mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to reject these records? <br />
                This process cannot be undone.
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setRejectConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                onClick={handelStatus}
                type="button"
                className="btn btn-warning w-24"
              >
                Reject
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
        )}
      </Modal>

      <Modal
        show={approveConfirmationModal}
        onHidden={() => {
          setApproveConfirmationModal(false);
        }}
      >
        {messageShow ? (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Check"
                className="w-16 h-16 text-success mx-auto mt-3"
              />
              <div className="text-3xl mt-5 mb-5">Success !</div>
            </div>
          </ModalBody>
        ) : (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="CheckCircle"
                className="w-16 h-16 text-info mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to approve these records? <br />
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setApproveConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                onClick={handelStatus}
                type="button"
                className="btn btn-twitter w-24"
              >
                Approve
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
        )}
      </Modal>

      <Modal
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        {messageShow ? (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Check"
                className="w-16 h-16 text-success mx-auto mt-3"
              />
              <div className="text-3xl mt-5 mb-5">Success !</div>
            </div>
          </ModalBody>
        ) : (
          <ModalBody className="p-0">
            <div className="p-5 text-center">
              <Lucide
                icon="Trash2"
                className="w-16 h-16 text-danger mx-auto mt-3"
              />
              <div className="text-3xl mt-5">Are you sure?</div>
              <div className="text-slate-500 mt-2">
                Do you really want to delete these records? <br />
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  setDeleteConfirmationModal(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button
                onClick={handelStatus}
                type="button"
                className="btn btn-danger w-24"
              >
                Delete
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
        )}
      </Modal>
    </>
  );
};

export default UsersTable;
