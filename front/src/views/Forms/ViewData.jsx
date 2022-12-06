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
import { Form, FormGrid, SubmissionGrid } from "react-formio";
import { useRecoilState, useRecoilValue, useRecoilStateLoadable } from "recoil";
import { formDataSelect } from "../../state/admin-atom";
import Pagination from "./Pagination";
import UsersTable from "./ViewTable";
import { useParams } from "react-router-dom";
import { filter } from "lodash";

import "./view_style.css";

const AllForms = (props) => {
  let { id } = useParams();
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const formData = useRecoilValue(formDataSelect(id));
  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(formData);

  const onAction = (submission, action) => {
    console.log(action);
    console.log("submission", submission);
  };
  const getSubmissions = (page, query) => {
    console.log(query);
    console.log("page", page);
  };

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">Form View</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"></div>
        {/* BEGIN: Data List */}

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {console.log("", formData.val)}
          {formData.val && (
            <>
              {/* <FormGrid
              forms={{
                forms: formData,
                limit: 5,
                pagination: { page: 5, numPages: 10, total: 20 },
              }}

              onAction={onAction}
            /> */}

              {/* <SubmissionGrid
                submissions={formData.val}
                form={formData.con}
                onAction={onAction}
                getSubmissions={getSubmissions}
              /> */}
            </>
          )}

          {/* {formData && (
            <FormGrid
              forms={{
                forms: formData,
                limit: 5,
                pagination: { page: 5, numPages: 10, total: 20 },
              }}

              onAction={onAction}
            />
          )} */}

          {formData.con && (
            <Form
              options={{
                readOnly: false,
                renderMode: "flat",
                buttonSettings: {
                  showSubmit: false,
                },
              }}
              submission={{ data: formData.val }}
              form={formData.con}
            />
          )}
        </div>
        {/* END: Data List */}
      </div>
    </>
  );
};

export default AllForms;
