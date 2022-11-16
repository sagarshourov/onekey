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

import { useRecoilState, useRecoilStateLoadable } from "recoil";
import { adminUserListState } from "../../state/admin-atom";
import Pagination from "./Pagination";
import UsersTable from "./UsersTable";

import { filter } from "lodash";

function applySortFilters(array, searchValue) {
  return filter(array, (_items) => {
    return (
      _items.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1 ||
      _items.first_name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
    );
  });
  console.log("sagar");
}

const AddFiles = (props) => {
  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Add New Documents</h2>

      <div className="intro-y report-box mt-12 sm:mt-4">
        <div className="box py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5">
          <div className="report-box__item py-5 xl:py-0 px-5 col-span-12 ">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFiles;



