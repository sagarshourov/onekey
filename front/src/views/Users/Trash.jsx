import { Lucide, Modal, ModalBody, LoadingIcon } from "@/base-components";

import { useState } from "react";
import { getAdmin } from "../../configuration";
import { useRecoilValueLoadable, useRecoilStateLoadable } from "recoil";
import {
  trashListState
} from "../../state/admin-atom";
import axios from "axios";
import TrashTable from "./TrashTable";

import { filter } from "lodash";

import StudentModal from "./StudentInfo";

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
  const [usersData, setUserState] = useRecoilStateLoadable(trashListState);

  const [showStudentInformation, setShowStudentInformation] = useState(false);

  const [fdata, setFdata] = useState({});

  const [rowCount, setRowCount] = useState(10);
  const [newUserModal, setNewUserModal] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const [search, setSearch] = useState("");
  const [birth, setBirth] = useState(-1);
  const [loading, setLoading] = useState(false);
  const handelPageCount = (e) => {
    setRowCount(parseInt(e.target.value));
  };

  //const handelStudentModel = () => {};

  const handelStudentModel = (val, user = {}) => {
    setShowStudentInformation(val);
    if (val === true) {
      setFdata({
        user_id: user.id,
        code: user.student_info?.code,
        interview_date: user.student_info?.interview_date,
        university: user.student_info?.university,
        package: user.package,
        interview_time: user.student_info?.interview_time,
        visa_type: user.student_info?.visa_type,
        us_consultant: user.student_info?.us_consultant,
        ds_160_num: user.student_info?.ds_160_num
      });
    } else {
      setFdata({});
    }
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
      <h2 className="intro-y text-lg font-medium mt-10">Trash List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div></div>
          
          <div className="hidden md:block mx-auto text-slate-500">
            Showing {rowCount} out of{" "}
            {usersData.state === "hasValue" && usersData.contents["length"]}
          </div>
         

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            <div className="w-56 relative text-slate-500">
              <input
                type="password"
                name="password"
                className="hidden"
                placeholder="secret"
              />

              <input
                onChange={(e) => handelSearch(e)}
                id="search"
                type="text"
                name="search_new"
                className="form-control w-56 box pr-10"
                placeholder="Search.."
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
            <TrashTable
              rowCount={rowCount}
              users={filterData}
              setUserState={setUserState}
              handelStudentModel={handelStudentModel}
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

      <StudentModal
        handelStudentModel={handelStudentModel}
        fdata={fdata}
        showStudentInformation={showStudentInformation}
        setShowStudentInformation={setShowStudentInformation}
      />

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
