
import { useState } from "react";
//import { Form } from "react-formio";
import { Lucide, LoadingIcon } from "@/base-components";
import {Form} from '@formio/react';
import axios from "axios";
import {useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { formDataSelect } from "../../state/admin-atom";
import { useParams } from "react-router-dom";
import {getAdmin , getBaseApi } from "../../configuration";
import "./view_style.css";

const AllForms = (props) => {
  let { id } = useParams();
  const [deleteConfirmationModal, setDeleteConfirmationModal] = useState(false);

  const formData = useRecoilValue(formDataSelect(id));
  const [rowCount, setRowCount] = useState(10);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const resetList = useRecoilRefresher_UNSTABLE(
    formDataSelect(id)
  );
  const handelLoad = () => {
    let count = rowCount + 20;

    setRowCount(count);
  };

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  const markCompleted = async (complete) => {
    setLoading(true);
    const LOGIN_URL = getAdmin() + "completed";

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    try {
      const response = await axios.post(
        LOGIN_URL,
        { id: parseInt(id), complete: complete },
        {
          headers,
        }
      );

      //console.log(response);
      resetList();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };


  console.log('form data',formData);




  return (
    <>
      {/* <h2 className="intro-y text-lg font-medium mt-10">Form View</h2> */}
      <div className="grid grid-cols-12 gap-6 mt-5">
      <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div>
            <h2 className="intro-y text-lg font-medium mt-0">
              {formData?.contents?.title}
            </h2>
          </div>
          <div className="hidden md:block mx-auto text-slate-500">
            {id !==0 && 
            <a
              className="flex items-center btn btn-success-soft"
              href={getBaseApi() + "pdf/"+id }
              target="_blank"
            >
              <Lucide icon="Download" className="w-4 h-4 mr-1" /> Download As
              PDF
            </a>
            }
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            {formData?.complete === 0 ? (
              <button
                onClick={() => markCompleted(1)}
                className="btn btn-success text-white mr-2 mb-2"
              >
                <Lucide icon="CheckCircle" className="w-4 h-4 mr-2" /> Mark as
                Completed
                {loading && (
                  <LoadingIcon
                    icon="three-dots"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                )}
              </button>
            ) : (
              <button
                onClick={() => markCompleted(0)}
                className="btn btn-warning text-white mr-2 mb-2"
              >
                <Lucide icon="ShieldOff" className="w-4 h-4 mr-2" />
                Mark as Not Completed
                {loading && (
                  <LoadingIcon
                    icon="three-dots"
                    color="white"
                    className="w-4 h-4 ml-2"
                  />
                )}
              </button>
            )}
          </div>
        </div>
        {/* BEGIN: Data List */}

        <div id="pdf" className="intro-y col-span-12 overflow-auto lg:overflow-visible">
       
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
