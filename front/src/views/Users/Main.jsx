import { Lucide, Modal, ModalBody } from "@/base-components";

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
        return monNum === birth;
      }
    } else {
      return (
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

    console.log(data);
    
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
      <h2 className="intro-y text-lg font-medium mt-10">All Users List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <button
            className="btn btn-primary shadow-md mr-2"
            onClick={() => setNewUserModal(true)}
          >
            New User
          </button>
          <select
            onChange={(e) => handelMonth(e)}
            className="w-56 form-select box mt-3 sm:mt-0"
          >
            <option value="-1"> Select Month...</option>
            <option value="0"> January </option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing {rowCount} out of{" "}
            {usersData.state === "hasValue" && usersData.contents["length"]}
          </div>
          <select
            onChange={handelPageCount.bind(this)}
            className="w-20 form-select box mt-3 sm:mt-0"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="35">35</option>
            <option value="50">50</option>
          </select>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                onChange={handelSearch.bind(this)}
                type="text"
                className="form-control w-56 box pr-10"
                placeholder="Search..."
              />
              <Lucide
                icon="Search"
                className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"
              />
            </div>
          </div>
        </div>
        {/* BEGIN: Data List */}

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {usersData.state === "hasValue" && (
            <UsersTable
              rowCount={rowCount}
              users={filterData}
              setUserState={setUserState}
            />
          )}
        </div>
        {/* END: Data List */}
        {/* BEGIN: Pagination */}
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
          <button onClick={handelLoad} className="btn">
            Load more..
          </button>
        </div>
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
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: New User Modal */}
    </>
  );
};

export default Users;
