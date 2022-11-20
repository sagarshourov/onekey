import { Lucide, TomSelect, Tippy } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState } from "react";
import axios from "axios";
import { Form, FormBuilder } from "react-formio";

import "./styles.css";
import { getAdmin } from "../../configuration";
function Main() {
  const [jsonSchema, setSchema] = useState({ components: [] });
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState('wizard');
  const handleSubmitData = async (e) => {
    console.log(jsonSchema, "submitdata");
    e.preventDefault();
    setLoading(true);
    const LOGIN_URL = getAdmin() + "save_form";

    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    try {
      const response = await axios.post(
        LOGIN_URL,
        { title: "title", data: jsonSchema },
        {
          headers,
        }
      );
    } catch (err) {
      setLoading(false);
    }
  };

  const handelType = (e) => {
    console.log(e.target.value);

    setType(e.target.value);
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5">Add New Forms</h2>
        </div>
        <div className="intro-y report-box mt-12 sm:mt-4">
          <div className="box  xl:px-5 py-5 flex justify-end  gap-5 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5">
            <div>
              <select onChange={(e) => handelType(e)} className="form-select">
              <option value="wizard">Wizard</option>
                <option value="form">Form</option>
             
              </select>
            </div>
            <div>
              <input
                type="text"
                className="form-control form-control-rounded py-3"
                placeholder="Form Title"
              />
            </div>
            <div>
              <button className="btn btn-pending " onClick={handleSubmitData}>
                Save This Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mt-5">
        <FormBuilder
          form={{ display: type }}
          onChange={(schema) => setSchema(schema)}
        />
      </div>
      {/* <div>
        <Form form={jsonSchema} />
      </div> */}
    </>
  );
}

export default Main;
