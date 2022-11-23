import { Lucide, TomSelect, Tippy } from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useState, useEffect } from "react";
import axios from "axios";
import { Form, FormBuilder } from "react-formio";
import { useRecoilState, useRecoilValue, useRecoilStateLoadable } from "recoil";
import { useParams } from "react-router-dom";
import "./styles.css";
import { getAdmin } from "../../configuration";

import {
  editFormState,
  formIdAtom,
  getFormSelect,
} from "../../state/admin-atom";

function Main() {
  let { id } = useParams();

  const [jsonSchema, setSchema] = useState({ components: [] });
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("wizard");

  const [formVal, setFormVal] = useState({});

  const [title, setTitle] = useState("");

  // useEffect(() => {
  //   if (post.state === "hasValue" && loading) {
  //  setFormVal(JSON.parse(post.contents.data.content));
  //    // setTitle(post?.contents?.data?.title)
  //     //setLoading(false);

  //     console.log("loading", loading);
  //     setLoading(false);
  //   }

  //   setPost(id);
  // });

  const [currentId, setCurrentId] = useRecoilState(formIdAtom(parseInt(id)));
  const formsVal = useRecoilValue(getFormSelect(currentId));

  console.log(formsVal);

  console.log("User ID", currentId);

  useEffect(() => {
    setCurrentId(parseInt(id));
  }, [id, setCurrentId]);

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
      window.location.reload();
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5">
            {formsVal?.title}
          </h2>
        </div>
      </div>

      <div className=" box px-5 pb-5 sm:px-20 mt-5 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
        {formsVal.con && (
          <Form
            form={formsVal.con}
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
