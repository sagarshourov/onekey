import { Lucide, Alert, LoadingIcon } from "@/base-components";

import { useState } from "react";

import { Form } from "react-formio";
import { useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import "./styles.css";
import { getBaseApi } from "../../configuration";
import axios from "axios";
import { formDataSelect } from "../../state/admin-atom";

function Main() {
  let { id } = useParams();
  const formData = useRecoilValue(formDataSelect(id));

  const [loading, setLoading] = useState(false);

  const [dismiss, setDismiss] = useState(false);

  const handleSubmitData = async (e) => {
    ("submit form");
    let data = {};

    let last_step = false;

    if (e.submission) {
      data = e.submission.data;
    } else {
      data = e.data;
      last_step = true;
    }

    setLoading(true);
    const LOGIN_URL = getBaseApi() + "submit_form";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    try {
      const response = await axios.post(
        LOGIN_URL,
        {
          form_id: id,
          data: data,
          title: formData.title,
          last_step: last_step,
        },
        {
          headers,
        }
      );

      if (response?.data?.success) {
        if (!e.submission) {
          setDismiss(true);

          setTimeout(setDismiss(false), 5000);
        }

        setLoading(false);
      }
    } catch (error) {
      console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5">
            {formData?.title}
          </h2>
        </div>
      </div>

      <div className="relative box  border-t border-slate-200/60 dark:border-darkmode-400">
        {loading && (
          <div className="h-full w-full bg-gray-50/75 grid  absolute z-40">
            <div className="w-24 h-24 place-self-center">
              <LoadingIcon
                icon="three-dots"
                color="gray"
                className="w-4 h-4 ml-2"
              />
            </div>
          </div>
        )}

        <div className="p-2 lg:p-10">
          {dismiss && (
            <Alert className="alert-outline-success flex items-center mb-2">
              <Lucide icon="CheckCircle" className="w-6 h-6 mr-2" />
              Thank You! Your form has been submitted and will be reviewed by
              your consultants
              <button
                type="button"
                className="btn-close"
                onClick={() => setDismiss(false)}
                aria-label="Close"
              >
                <Lucide icon="X" className="w-4 h-4" />
              </button>
            </Alert>
          )}
          {formData.con && (
            <Form
              form={formData.con}
              submission={{
                data: formData.val,
              }}
              onSubmit={(e) => handleSubmitData(e)}
              onNextPage={handleSubmitData}
            />
          )}
        </div>
      </div>

      {/* <div>
        <Form form={jsonSchema} />
      </div> */}
    </>
  );
}

export default Main;
