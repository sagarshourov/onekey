import { Lucide, Modal, ModalBody, LoadingIcon } from "@/base-components";

import { useState } from "react";
import { getAdmin } from "../../configuration";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { allUserListState } from "../../state/admin-atom";
import axios from "axios";
import UsersTable from "./UsersTable";

import { filter } from "lodash";
const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};
function applySortFilters(array, searchValue, birth) {
  return filter(array, (_items) => {
    var monNum = -1;

    if (birth !== -1) {
      if (_items.data) {
        var data = JSON.parse(_items.data.content);
        var dt = new Date(data.dateOfBirth);
        monNum = dt.getMonth();

        if (searchValue !== "") {
          return (
            monNum === birth &&
            _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          );
        } else {
          return monNum === birth;
        }
      }
    } else {
      return (
        _items.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !==
          -1 ||
        _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      );
    }
  });
}

const Users = (props) => {
  const [usersData, setUserState] = useRecoilStateLoadable(allUserListState);
  const [rowCount, setRowCount] = useState(10);
  const [newUserModal, setNewUserModal] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const [search, setSearch] = useState("");
  const [birth, setBirth] = useState(-1);
  const [loading, setLoading] = useState(false);
  const handelPageCount = (e) => {
    setRowCount(parseInt(e.target.value));
  };

  const handelLoad = () => {
    let count = rowCount + 50;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const handelMonth = (e) => {
    console.log(e.target.value);

    setBirth(parseInt(e.target.value));
  };

  let filterData = applySortFilters(usersData.contents, search, birth);
  const handelChange = (e) => {
    var value = e.target.value;

    let val = { [e.target.name]: value };
    setFormdata({ ...formdata, ...val });
  };

  const createUser = async () => {
    const URL = getAdmin() + "create_admin_users";

    if (formdata.first_name == "") {
      alert("First Name Not matching !");
      return false;
    }

    if (formdata.last_name == "") {
      alert("Last Name Not matching !");
      return false;
    }

    if (formdata.email == "") {
      alert("E-mail required !");
      return false;
    }

    if (formdata.password == "") {
      alert("Password required !");
      return false;
    }

    if (formdata.password !== formdata.cpassword) {
      alert("Password Not matching !");

      return false;
    }
    //formdata.append("admin_id", 0);

    var data = { ...formdata, ...{ is_admin: 0 } };

    setLoading(true);

    try {
      const response = await axios.post(URL, data, {
        headers,
      });

      if (response?.data?.success) {
        setUserState(response?.data?.data);

        setLoading(false);

        setNewUserModal(false);
      } else {
        alert("Something is wrong please try again later!");
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Task Board</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
      
        {/* BEGIN: Data List */}

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {/* {usersData.state === "hasValue" && (
            <UsersTable
              rowCount={rowCount}
              users={filterData}
              setUserState={setUserState}
            />
          )} */}
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        {/* <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <button onClick={handelLoad} className="btn">
            Load more..
          </button>
        </div> */}
        {/* END: Pagination */}
      </div>
      {/* BEGIN: New User Modal */}
      <Modal
        show={newUserModal}
        onHidden={() => {
          setNewUserModal(false);
        }}
      >
        <ModalBody className="p-0">
          <h3 className="text-3xl p-5 text-center">Create New User</h3>

          <div className="p-5">
            <div className="form-inline">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                First name
              </label>
              <input
                onChange={(e) => handelChange(e)}
                name="first_name"
                type="text"
                className="form-control"
                placeholder="Jon"
              />
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                Last name
              </label>
              <input
                onChange={(e) => handelChange(e)}
                name="last_name"
                type="text"
                className="form-control"
                placeholder="Doe"
              />
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-1" className="form-label sm:w-20">
                Email
              </label>
              <input
                name="email"
                onChange={(e) => handelChange(e)}
                type="text"
                className="form-control"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-2" className="form-label sm:w-20">
                Password
              </label>
              <input
                onChange={(e) => handelChange(e)}
                name="password"
                type="password"
                className="form-control"
                placeholder="secret"
              />
            </div>
            <div className="form-inline mt-5">
              <label htmlFor="horizontal-form-2" className="form-label sm:w-20">
                Confirm Password
              </label>
              <input
                onChange={(e) => handelChange(e)}
                name="cpassword"
                type="password"
                className="form-control"
                placeholder="secret"
              />
            </div>
          </div>

          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setNewUserModal(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button
              onClick={createUser}
              type="button"
              className="btn btn-primary w-24"
            >
              Save
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
      {/* END: New User Modal */}
    </>
  );
};

export default Users;
