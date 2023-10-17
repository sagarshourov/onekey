import { useState } from "react";
//import { Form } from "react-formio";

import { Form } from "@formio/react";

import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { formDataUserSelect } from "../../state/admin-atom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./view_style.css";

import { Lucide, LoadingIcon } from "@/base-components";
import { getAdmin , getBaseApi } from "../../configuration";
const ViewUserDataForm = (props) => {
  const [loading, setLoading] = useState(false);

  const [complete, setComplete] = useState(true);

  let { id, u_id } = useParams();

  const formData = useRecoilValueLoadable(formDataUserSelect({ id, u_id }));


  //console.log('formData',formData);

  let clientData = [];

  let clientCon = [];
  if (parseInt(id) === 6) {
    clientData = useRecoilValueLoadable(formDataUserSelect({ id: 1, u_id }));

    if (clientData.state == "hasValue") {
      clientCon = {
        display: "wizard",
        components: [
          clientData.contents.con.components[1],
          clientData.contents.con.components[2],
        ],
      };
        console.log("client data", clientData);
    }
  }

  const resetList = useRecoilRefresher_UNSTABLE(
    formDataUserSelect({ id, u_id })
  );

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
        { id: formData?.contents?.id, complete: complete },
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

  return (
    <>
      {/* <h2 className="intro-y text-lg font-medium mt-10">{formData?.title}</h2> */}
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
          <div>
            <h2 className="intro-y text-lg font-medium mt-0">
              {formData?.contents?.title}
            </h2>
          </div>
          <div className="hidden md:block mx-auto text-slate-500">
            {formData?.contents?.id !==0 && 
            <a
              className="flex items-center btn btn-success-soft"
              href={getBaseApi() + "pdf/"+formData?.contents?.id }
              target="_blank"
            >
              <Lucide icon="Download" className="w-4 h-4 mr-1" /> Download As
              PDF
            </a>
            }
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            {formData?.contents?.complete === 0 ? (
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

          {formData.state == "hasValue" ? (
            <Form
              options={{
                readOnly: false,
                renderMode: "flat",
                buttonSettings: {
                  showSubmit: false,
                },
              }}
              submission={{ data: formData.contents.val }}
              form={formData.contents.con}
            />
          ) : (
            <h1 className="m-5">Loading...</h1>
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
              submission={{ data: clientData.contents.val }}
              form={clientCon}
            />
          )}
        </div>
        {/* {formData?.contents?.complete === 0 && (
          <div className="intro-y col-span-12 flex flex-wrap sm:flex-nowrap items-center mt-2">
            <div>
              <h2 className="intro-y text-lg font-medium mt-0"></h2>
            </div>
            <div className="hidden md:block mx-auto text-slate-500"></div>

            <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
              <button
                onClick={markCompleted}
                className="btn btn-success text-white mr-2 mb-2"
              >
                <Lucide icon="Check" className="w-4 h-4 mr-2" /> Mark as
                Completed
              </button>
            </div>
          </div>
        )} */}

        {/* END: Data List */}
      </div>
    </>
  );
};

export default ViewUserDataForm;
