
import { useState, useEffect } from "react";

//import { FormBuilder } from "react-formio";

import {FormBuilder} from '@formio/react';

//Formio.setBaseUrl('/');


import { useRecoilStateLoadable } from "recoil";
import { useParams } from "react-router-dom";

import "./styles.css";
import axios from "axios";
import { getAdmin } from "../../configuration";

import { editFormState } from "../../state/admin-atom";


import "formiojs/dist/formio.full.min.css";


function Main() {
  let { id } = useParams();

  const [jsonSchema, setSchema] = useState({ components: [] });
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("wizard");

  const [post, setPost] = useRecoilStateLoadable(editFormState(id));
  const [formVal, setFormVal] = useState({});

  const [title, setTitle] = useState("");
  //("post", post);

  useEffect(() => {
    if (post.state === "hasValue" && loading) {
      post.contents && setFormVal(JSON.parse(post.contents.data.content));
      setTitle(post.contents.data.title)
      //setLoading(false);
      setLoading(false);
    }
  });

  const handleSubmitData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const LOGIN_URL = getAdmin() + "update_form";
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };
    try {
      const response = await axios.post(
        LOGIN_URL,
        { id: id, title: title, data: jsonSchema },
        {
          headers,
        }
      );
     // window.location.reload()
    } catch (err) {
      setLoading(false);
    }
  };

  const handelType = (e) => {


    setType(e.target.value);
  };
  const handelTitle = (e) => {
    setTitle(e.target.value);
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
              {post.state === "hasValue" && (
                <input
                  type="text"
                  onChange={(e) => handelTitle(e)}
                  className="form-control form-control-rounded py-3"
                  placeholder="Form Title"
                  defaultValue={title}
                />
              )}
            </div>
            <div>
              <button className="btn btn-pending " onClick={handleSubmitData}>
                Update This Form
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-5 mt-5">
        {!loading && (
          <FormBuilder
            form={formVal}
            onChange={(schema) => setSchema(schema)}
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
