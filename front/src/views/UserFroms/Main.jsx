import { Lucide, Alert, LoadingIcon } from "@/base-components";

import { useState } from "react";

import { Form } from "react-formio";
import { useRecoilStateLoadable } from "recoil";
import { useParams } from "react-router-dom";
import "./styles.css";
import { getBaseApi } from "../../configuration";
import axios from "axios";
import { formDatas } from "../../state/admin-atom";

function clickEvent(ind) {
  //document.getElementsByTagName('button')[].click();

  setTimeout(function () {
    // console.log('click event');
    const ul = document.querySelector(".pagination");

    const childern = ul.childNodes;

    let counter = 0;

    // iterate over all child nodes
    childern.forEach((li, index) => {
      //console.log('li',li);
      console.log("counter", counter);
      if (li.innerText) {
        //li.click();

        console.log("in counter", counter);

        counter++;
      }
      if (counter == ind) {
        li.firstElementChild.click();
      }
    });
  }, 500);

  // console.log('click event');
}

function Main() {
  let { id } = useParams();
  const [formData, setFormData] = useRecoilStateLoadable(formDatas(id));

  //console.log("formData", formData);

  const [loading, setLoading] = useState(false);

  const [dismiss, setDismiss] = useState(false);

  const [page, setPage] = useState(1);

  const handleSubmitData = async (e) => {
    console.log("submit form", e);
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
        setFormData(response.data.data);
        //setTimeout(clickEvent(8), 5000);
        clickEvent(page + 1);
        setPage(page + 1);
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

  const onChange = (e) => {

    
  };

  const PrevPage = (e) => {
    clickEvent(page - 1);
    setPage(page - 1);


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
          {formData.state == "hasValue" && formData.contents.con && (
            <Form
              form={{
                display: "wizard",
                components: formData.contents.con.components,
              }}
              submission={{
                data: formData.contents.val,
              }}
              onSubmit={(e) => handleSubmitData(e)}
              onNextPage={handleSubmitData}
              onChange={(e) => onChange(e)}
              onPrevPage={(e) => PrevPage(e)}
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
