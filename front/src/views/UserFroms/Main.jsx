import { Lucide, TomSelect, Tippy } from "@/base-components";

import * as $_ from "lodash";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form } from "react-formio";
import { useRecoilState, useRecoilValue, useRecoilStateLoadable } from "recoil";
import { useParams } from "react-router-dom";
import "./styles.css";
import { getAdmin, getBaseApi } from "../../configuration";

import {
  editFormState,
  formIdAtom,
  getFormSelect,
  formDataSelect,
} from "../../state/admin-atom";

function Main() {
  let { id } = useParams();
  const formData = useRecoilValue(formDataSelect(id));

  const [loading, setLoading] = useState(true);

  const handleSubmitData = (e) => {
    let data = e.submission ? e.submission.data : e.data;

    setLoading(true);
    const LOGIN_URL = getBaseApi() + "submit_form";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    try {
      const response = axios.post(
        LOGIN_URL,
        { form_id: id, data: data },
        {
          headers,
        }
      );
      console.log(response);
      // window.location.reload();
    } catch (error) {
      console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
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

      <div className=" box px-5 pb-5 sm:px-20 mt-5 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
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

      {/* <div>
        <Form form={jsonSchema} />
      </div> */}
    </>
  );
}

export default Main;
