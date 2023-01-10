import {
  Lucide

} from "@/base-components";

import { useState } from "react";

import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { allUserListState } from "../../state/admin-atom";

import UsersTable from "./UsersTable";

import { filter } from "lodash";

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return (
      _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      _items.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  });
}

const AdminUsers = (props) => {


  const [usersData, setUserState] = useRecoilStateLoadable(allUserListState);
  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const handelPageCount = (e) => {
    (e.target.value);

    setRowCount(parseInt(e.target.value));
  };

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  let filterData = applySortFilters(usersData.contents, search);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">All Users List</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
         

          <div className="hidden md:block mx-auto text-slate-500">
           Showing  {rowCount} out of {usersData.state === "hasValue" && usersData.contents["length"]}
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
              setUserState = {setUserState}
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
      
      {/* END: Delete Confirmation Modal */}
    </>
  );
};

export default AdminUsers;
