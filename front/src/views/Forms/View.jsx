import {
  Lucide,
  Tippy,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  Modal,
  ModalBody,
} from "@/base-components";

import { useState } from "react";

import { useRecoilState, useRecoilValue, useRecoilStateLoadable } from "recoil";
import { formByIdSelect } from "../../state/admin-atom";
import Pagination from "./Pagination";
import UsersTable from "./ViewTable";
import { useParams } from "react-router-dom";
import { filter } from "lodash";

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return _items.user.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });
  console.log("sagar");
}

const AllForms = (props) => {
  let { id } = useParams();
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const formData = useRecoilValue(formByIdSelect(id));
  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };



   let filterData = applySortFilters(formData, search);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">List of {formData[0]?.form?.title}</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
        

          <div className="hidden md:block mx-auto text-slate-500">
            Showng {rowCount} out of
          </div>

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
          <UsersTable
              rowCount={rowCount}
              users={filterData}
            />
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
            <button type="button" className="btn btn-danger w-24">
              Delete
            </button>
          </div>
        </ModalBody>
      </Modal>
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default AllForms;
