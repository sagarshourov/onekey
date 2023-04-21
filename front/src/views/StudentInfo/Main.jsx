import { Lucide, Modal, ModalBody, LoadingIcon } from "@/base-components";

import { useState } from "react";
import axios from "axios";
import { useRecoilState, useRecoilStateLoadable } from "recoil";
import {
  allstudentListState,
  allUniverstyState,
  visaTypeState,
} from "../../state/admin-atom";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";

import { filter } from "lodash";

import { getAdmin, getBaseApi } from "../../configuration";
import "./styles.css";
function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return (
      _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      _items.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  });
}

const AdminUsers = (props) => {
  const [showStudentInfrmation, setShowStudentInfrmation] = useState(false);

  const [students, setStudents] = useRecoilStateLoadable(allstudentListState);

  // const [universities, setUniversity] =
  //   useRecoilStateLoadable(allUniverstyState);

  // const [visaType, setVisaTypes] = useRecoilStateLoadable(visaTypeState);

  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const [userId, setUserId] = useState(0);

  const [loading, setLoading] = useState(false);

  const [fdata, setFdata] = useState({});

  const handelPageCount = (e) => {
    setRowCount(parseInt(e.target.value));
  };

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const handelModel = (val, user = {}) => {
    setShowStudentInfrmation(val);
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

    console.log(user);
  };

  const updateInformation = async (e) => {
    const LOGIN_URL = getBaseApi() + "student_info";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    setLoading(true);

    e.preventDefault();
    const data = {
      code: e.target.elements.code.value,
      package: e.target.elements.package.value,
      interview_date: e.target.elements.interview_date.value,
      interview_time: e.target.elements.interview_time.value,
      university: e.target.elements.university.value,
      visa_type: e.target.elements.visa_type.value,
      user_id: parseInt(e.target.elements.user_id.value),
      us_consultant: e.target.elements.us_consultant.value,
      ds_160_num: e.target.elements.ds_160_num.value,
    };

    //setFdata((fdata) => ({ ...fdata, user_id: userId }));

    try {
      // const response = await axios.post(LOGIN_URL, JSON.stringify(fdata), {
      //   headers,
      // });

      const response = await axios.post(LOGIN_URL, data, {
        headers,
      });

      if (response?.data?.success) {
        setShowStudentInfrmation(false);
        window.location.reload();
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handelChange = (e) => {
    let val = e.target.value !== "" ? e.target.value : "";
    let names = e.target.name;

    setFdata({ ...fdata, [names]: val });
  };

  let filterData = applySortFilters(students.contents, search);

  return (
    <>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div>
            <h2 className="intro-y text-lg font-medium mt-0">
              Student Information
            </h2>
          </div>
          <div className="hidden md:block mx-auto text-slate-500">
            Showing {rowCount} out of{" "}
            {students.state === "hasValue" && students.contents["length"]}
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
                type="password"
                name="password"
                className="hidden"
                placeholder="secret"
              />
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
          {students.state === "hasValue" ? (
            <UsersTable
              rowCount={rowCount}
              setFdata={setFdata}
              users={filterData}
              setUserId={setUserId}
              handelModel={handelModel}
            />
          ) : (
            <div className="h-full w-full bg-gray-50/75 grid  absolute z-40">
              <div className="w-8 h-8 place-self-center">
                <LoadingIcon
                  icon="ball-triangle"
                  color="gray"
                  className="w-4 h-4 ml-2"
                />
              </div>
            </div>
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
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={showStudentInfrmation}
        onHidden={() => {
          handelModel(false);
        }}
      >
        <ModalBody className="p-0">
          <form onSubmit={(e) => updateInformation(e)}>
            <div className="p-5 ">
              <h3 className="text-lg text-center py-3 mb-4">
                Student Information
              </h3>
              <div>
                <label htmlFor="vertical-form-1" className="form-label">
                  SEVIS ID number
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="Code" className="w-4 h-4 mt-2" />
                  </div>
                  <input
                    type="text"
                    name="code"
                    className=" py-4 form-control"
                    placeholder=""
                    defaultValue={fdata.code}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  Case Type
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="Award" className="w-4 h-4 mt-2" />
                  </div>

                  {fdata.package && (
                    <select
                      name="package"
                      defaultValue={fdata.package}
                      className=" py-4 form-control"
                    >
                      <option>Select ... </option>
                      <option value="1">Other Package </option>
                      <option value="2">Platinum Package </option>
                      <option value="3">Gold Package </option>
                      <option value="4">Silver Package </option>
                    </select>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  Interview Date
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="Calendar" className="w-4 h-4 mt-2" />
                  </div>
                  <input
                    type="date"
                    name="interview_date"
                    className=" py-4 form-control"
                    placeholder=""
                    defaultValue={fdata.interview_date}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  Interview Time
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="Clock" className="w-4 h-4 mt-2" />
                  </div>
                  <input
                    type="time"
                    name="interview_time"
                    className=" py-4 form-control"
                    placeholder=""
                    defaultValue={fdata.interview_time}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  U.S. Consulate
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="UserCheck" className="w-5 h-4 mt-2" />
                  </div>

                  <input
                    type="text"
                    name="us_consultant"
                    className=" py-4 form-control"
                    defaultValue={fdata.us_consultant}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  University / Institution
                </label>

                <div className="input-group w-full">
                  <div id="input-group-email" className="input-group-text">
                    <Lucide icon="Home" className="w-4 h-4 mt-2" />
                  </div>

                  <input
                    type="text"
                    name="university"
                    className=" py-4 form-control"
                    defaultValue={fdata.university}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  Visa Type Status
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="Info" className="w-5 h-4 mt-2" />
                  </div>

                  <input
                    type="text"
                    name="visa_type"
                    className=" py-4 form-control"
                    defaultValue={fdata.visa_type}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="vertical-form-1" className="form-label">
                  DS-160 Number
                </label>

                <div className="input-group w-full">
                  <div className="input-group-text">
                    <Lucide icon="GitPullRequest" className="w-5 h-4 mt-2" />
                  </div>

                  <input
                    type="text"
                    name="ds_160_num"
                    className=" py-4 form-control"
                    defaultValue={fdata.ds_160_num}
                  />
                </div>
              </div>
            </div>
            <div className="px-5 pb-8 text-center">
              <button
                type="button"
                onClick={() => {
                  handelModel(false);
                }}
                className="btn btn-outline-secondary w-24 mr-1"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary w-24">
                Update{" "}
                {loading && (
                  <LoadingIcon
                    icon="three-dots"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                )}
              </button>

              <input
                type="hidden"
                name="user_id"
                defaultValue={fdata.user_id}
              />
            </div>
          </form>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default AdminUsers;
