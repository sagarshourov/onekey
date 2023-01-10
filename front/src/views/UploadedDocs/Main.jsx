import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  LoadingIcon,
  Modal,
  ModalBody,
} from "@/base-components";

import { useState } from "react";

import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { userFileListState } from "../../state/users-atom";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";
import axios from "axios";
import { filter } from "lodash";
import { getBaseApi } from "../../configuration";

import { Link } from "react-router-dom";

const token = localStorage.getItem("token");

const headers = {
  Authorization: `Bearer ${token}`,
  ContentType: "application/json",
};

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return _items.title
      ? _items.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
      : true;
  });
}

const AllDocs = (props) => {
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const [usersData, setUserState] = useRecoilStateLoadable(userFileListState);
  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectId, setSelectId] = useState(0);
  const handelPageCount = (e) => {
    e.target.value;

    setRowCount(parseInt(e.target.value));
  };

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const handelDelete = async (id) => {
    

    setLoading(true);

    try {
      const response = await axios.post(
        getBaseApi() + "delete_file",
        { id: id },
        {
          headers,
        }
      );

      setUserState(response?.data?.data);
      setLoading(false);
      console.log("response", response);
    } catch (err) {
      setLoading(false);
    }

    //setUserState();

    setDeleteConfirmationModal(false);

    //window.location.reload();
  };

  let filterData = applySortFilters(usersData.contents, search);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Uploaded Docs</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <Link to="/add_files" className="btn btn-primary shadow-md mr-2">
            Add New Documents
          </Link>

          <div className="hidden md:block mx-auto text-slate-500">
            Showing {filterData.length} out of{" "}
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
              setSelectId={setSelectId}
              setDeleteConfirmationModal={setDeleteConfirmationModal}
              rowCount={rowCount}
              users={filterData}
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
        show={deleteConfirmationModal}
        onHidden={() => {
          setDeleteConfirmationModal(false);
        }}
      >
        <ModalBody className="p-0">
          <div className="p-5 text-center">
            <Lucide
              icon="XCircle"
              className="w-16 h-16 text-danger mx-auto mt-3"
            />
            <div className="text-3xl mt-5">Are you sure?</div>
            <div className="text-slate-500 mt-2">
              Do you really want to delete these records? <br />
              This process cannot be undone.
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
              onClick={() => handelDelete(selectId)}
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
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default AllDocs;
