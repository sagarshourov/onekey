import { useState } from "react";
//import { Form } from "react-formio";

import {Form} from '@formio/react';


import { useRecoilValue } from "recoil";
import { formDataUserSelect } from "../../state/admin-atom";
import { useParams } from "react-router-dom";

import "./view_style.css";

const ViewUserDataForm = (props) => {
  let { id, u_id } = useParams();

  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const formData = useRecoilValue(formDataUserSelect({ id, u_id }));
  let clientData = [];

  let clientCon = [];
  if (parseInt(id) === 6) {
    clientData = useRecoilValue(formDataUserSelect({ id: 1, u_id }));

    if (clientData.con) {
      clientCon = {
        display: "wizard",
        components: [
          clientData.con.components[1],
          clientData.con.components[2],
        ],
      };
      console.log("client data", clientCon);
    }
  }

  const [rowCount, setRowCount] = useState(10);

  const [search, setSearch] = useState("");

  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  //  console.log("formdata", formData);

  return (
    <>
      <h2 className="intro-y text-lg font-medium mt-10">{formData?.title}</h2>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2"></div>
        {/* BEGIN: Data List */}

        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
          {
            //formData.val && (
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
            // )
          }

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

          {Object.keys(clientCon).length > 0 && (
            <Form
              options={{
                readOnly: false,
                renderMode: "flat",
                buttonSettings: {
                  showSubmit: false,
                },
              }}
              submission={{ data: clientData.val }}
              form={clientCon}
            />
          )}
        </div>
        {/* END: Data List */}
      </div>
    </>
  );
};

export default ViewUserDataForm;
