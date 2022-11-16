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

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return (
      _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      _items.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  });
  console.log("sagar");
}

const AdminUsers = (props) => {
  const [showStudentInfrmation, setShowStudentInfrmation] = useState(false);

  const [students, setStudents] = useRecoilStateLoadable(allstudentListState);

  const [universities, setUniversity] =
    useRecoilStateLoadable(allUniverstyState);

  const [visaType, setVisaTypes] = useRecoilStateLoadable(visaTypeState);

  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const [userId, setUserId] = useState(0);

  const [loading, setLoading] = useState(false);

  const [fdata, setFdata] = useState({
    user_id: userId,
    code: "",
    date: "",
    university: "",
  });

  const handelPageCount = (e) => {
    console.log(e.target.value);

    setRowCount(parseInt(e.target.value));
  };

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const updateInformation = async (e) => {
    e.preventDefault();

    const LOGIN_URL = getBaseApi() + "student_info";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    setLoading(true);

    try {
      // const response = await axios.post(LOGIN_URL, JSON.stringify(fdata), {
      //   headers,
      // });
      fdata.user_id = userId;

      const response = await axios.post(LOGIN_URL, fdata, {
        headers,
      });

      setLoading(false);
      setShowStudentInfrmation(false);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
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
            Showng {rowCount} out of{" "}
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
          {students.state === "hasValue" && (
            <UsersTable
              rowCount={rowCount}
              users={filterData}
              setUserId={setUserId}
              studentInformation={setShowStudentInfrmation}
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
      {/* BEGIN: Delete Confirmation Modal */}
      <Modal
        show={showStudentInfrmation}
        onHidden={() => {
          setShowStudentInfrmation(false);
        }}
      >
        <ModalBody className="p-0">
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
                  className=" py-4 form-control"
                  placeholder=""
                  onChange={(e) =>
                    setFdata((fdata) => ({ ...fdata, code: e.target.value }))
                  }
                />
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
                  className=" py-4 form-control"
                  placeholder=""
                  onChange={(e) =>
                    setFdata((fdata) => ({ ...fdata, date: e.target.value }))
                  }
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
                  className=" py-4 form-control"
                  placeholder=""
                  onChange={(e) =>
                    setFdata((fdata) => ({ ...fdata, time: e.target.value }))
                  }
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
                <select
                  className="form-control py-4"
                  onChange={(e) =>
                    setFdata((fdata) => ({
                      ...fdata,
                      university: e.target.value,
                    }))
                  }
                >
                  <option value="">Select </option>

                  {universities.state === "hasValue" &&
                    universities.contents.map((university, key) => (
                      <option key={key} value={university.id}>
                        {university.title}
                      </option>
                    ))}
                </select>
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
                <select
                  className="form-control py-4"
                  onChange={(e) =>
                    setFdata((fdata) => ({ ...fdata, type: e.target.value }))
                  }
                >
                  <option value="">Select </option>
                  {visaType.state === "hasValue" &&
                    visaType.contents.map((visaTyp, key) => (
                      <option key={key} value={visaTyp.id}>
                        {visaTyp.title}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                setShowStudentInfrmation(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={updateInformation}
              className="btn btn-primary w-24"
            >
              Update{" "}
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
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default AdminUsers;
