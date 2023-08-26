import { Lucide, Modal, ModalBody, LoadingIcon } from "@/base-components";

import { useState, useEffect } from "react";
import { getAdmin } from "../../configuration";
import {
  useRecoilStateLoadable,
  useRecoilRefresher_UNSTABLE,
  useRecoilValueLoadable,
} from "recoil";
import { trashListState } from "../../state/admin-atom";
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
  const usersData = useRecoilValueLoadable(trashListState);

  const [showStudentInformation, setShowStudentInformation] = useState(false);

  const [fdata, setFdata] = useState({});

  const [rowCount, setRowCount] = useState(10);
  const [newUserModal, setNewUserModal] = useState(false);
  const [formdata, setFormdata] = useState([]);
  const [search, setSearch] = useState("");
  const [birth, setBirth] = useState(-1);
  const [loading, setLoading] = useState(false);
  const resetList = useRecoilRefresher_UNSTABLE(trashListState);

  useEffect(() => {
    return () => {
      resetList();
     // console.log("reset.... trash");
      //setUserState([]);
    };
  }, []);
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
        ds_160_num: user.student_info?.ds_160_num,
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
   /// console.log(e.target.value);

    setBirth(parseInt(e.target.value));
  };

  let filterData = applySortFilters(usersData.contents, search, birth);
  const handelChange = (e) => {
    var value = e.target.value;

    let val = { [e.target.name]: value };
    setFormdata({ ...formdata, ...val });
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
          {usersData.state === "hasValue" ? (
            <TrashTable
              rowCount={rowCount}
              users={filterData}
              setUserState={resetList}
              handelStudentModel={handelStudentModel}
            />
          ) : (
            <h1 className="m-5">Loading...</h1>
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
    </>
  );
};

export default Users;
