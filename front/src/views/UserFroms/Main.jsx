import { Lucide, Alert, LoadingIcon } from "@/base-components";

import { useState, useEffect } from "react";

//import { Form } from "react-formio";
import { Form } from "@formio/react";

import {
  useRecoilStateLoadable,
  useSetRecoilState,
  useRecoilRefresher_UNSTABLE,
} from "recoil";
import { useParams } from "react-router-dom";
import "./styles.css";
import "formiojs/dist/formio.full.min.css";
import { getBaseApi } from "../../configuration";
import axios from "axios";
import { singleDataState, userIdState } from "../../state/admin-atom";

//Formio.setBaseUrl('/');

function Main() {
  let { id } = useParams();
  const [formData, setFormData] = useRecoilStateLoadable(singleDataState);

  //  const [singleCall, setSingleCallState] =
  //  useRecoilStateLoadable(singleCallState);
  const setUserId = useSetRecoilState(userIdState);

  const resetSingleCall = useRecoilRefresher_UNSTABLE(singleDataState);
  //const resetcallIdState = useResetRecoilState(callIdState);
  useEffect(() => {
    //console.log("set state");
    setUserId(id);
    return () => {
      resetSingleCall();
      localStorage.removeItem("success");
      //resetcallIdState();
      //console.log("cleaned up");
    };
  }, [id]);

  //console.log("formData", formData);

  const [loading, setLoading] = useState(false);

  const [dismiss, setDismiss] = useState(false);

  const [file, setFile] = useState([]);

  const [page, setPage] = useState(1);

  const [data, setData] = useState([]);

  // const onFocus = (e) => {
  //   console.log("on focus", e);
  // };

  // useEffect(() => {
  //   window.addEventListener("focus", onFocus);

  //   onFocus();
  //   // Specify how to clean up after this effect:
  //   return () => {
  //     window.removeEventListener("focus", onFocus);
  //   };
  // }, []);

  const clickEvent = (ind) => {
    //document.getElementsByTagName('button')[].click();

    setTimeout(function () {
      console.log("click event", ind);
      const ul = document.querySelector(".pagination");

      const childern = ul.childNodes;

      let counter = 0;

      // iterate over all child nodes
      childern.forEach((li, index) => {
        //console.log('li',li);

        if (li.innerText) {
          //li.click();

          counter++;
        }
        if (counter === ind) {
          li.firstElementChild && li.firstElementChild.click();

          setLoading(false);

          return;
        }
      });
    }, 500);

    // console.log('click event');
  };

  const handleSubmitData = async (e) => {
    // console.log("submit form", e);
    let data = {};

    let last_step = false;

    // console.log('submission',e.submission);

    if (e.submission) {
      data = e.submission.data;

      data.file && setFile(data.file);

      //console.log('data',data);
    } else {
      data = e.data;
      last_step = true;
      setLoading(true);
      // data.file = file;

      // console.log('not data',data);
    }
    //  setPage(page + 1);
    //  setLoading(true);
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
        //setTimeout(clickEvent(8), 5000);
        //setLoading(false);
        //  console.log("page count", page);

        if (last_step) {
          localStorage.setItem("success", true);
          // clickEvent(page);
          // setDismiss(true);
          // setLoading(false);
          //  setTimeout(function () {
          // setDismiss(false);

          window.location.reload();
          // setLoading(false);
          // setFormData(response.data.data);
          // clickEvent(1);
          // setPage(1);
          //  }, 1000);
        } else {
          //  setFormData(response.data.data);
          setLoading(false);
        }
      }
    } catch (error) {
      console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
      setLoading(false);
    }
  };

  // const onChange = async (e) => {
  //   console.log("on change", e);
  //   //return;
  //   // if (
  //   //   e.changed &&
  //   //   e.changed.value !== "no" &&
  //   //   e.changed.component.key === "file"
  //   // ) {
  //   //   console.log("onchange", e);
  //   //   setLoading(true);
  //   //   const LOGIN_URL = getBaseApi() + "submit_form";
  //   //   const token = localStorage.getItem("token");
  //   //   const headers = {
  //   //     Authorization: `Bearer ${token}`,
  //   //     ContentType: "application/json",
  //   //   };
  //   //   try {
  //   //     if (e.data.file.length === 0) {
  //   //       return;
  //   //     }
  //   //     const response = await axios.post(
  //   //       LOGIN_URL,
  //   //       {
  //   //         form_id: id,
  //   //         data: e.data,
  //   //         title: formData.title,
  //   //         last_step: false,
  //   //       },
  //   //       {
  //   //         headers,
  //   //       }
  //   //     );
  //   //     if (response?.data?.success) {
  //   //       setPage(page);
  //   //       clickEvent(page);
  //   //       setLoading(false);
  //   //     }
  //   //   } catch (error) {
  //   //     console.error(`getEditfrom -> getUsers() ERROR: \n${error}`);
  //   //     setLoading(false);
  //   //   }
  //   // }
  //   //e.data &&  setData(e.data);
  //   // e.data.file && setFile(e.data.file);
  //   //console.log(e);
  // };

  const PrevPage = (e) => {
    // clickEvent(page - 1);
    // setPage(page - 1);
  };
  const FormReady = () => {
    console.log("form ready");

    //clickEvent(page);
  };

  return (
    <>
      <div className="col-span-12 mt-6">
        <div className="intro-y block sm:flex items-center h-10">
          <h2 className="text-lg font-medium truncate mr-5">
            {formData.state == "hasValue" ? formData?.contents?.title : ""}
          </h2>
        </div>
      </div>

      <div className="relative box  border-t border-slate-200/60 dark:border-darkmode-400">
        {loading && (
          <div className="h-full w-full bg-gray-50  grid  absolute z-40">
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
          {localStorage.success && (
            <Alert className="alert-outline-success flex items-center mb-2">
              <Lucide icon="CheckCircle" className="w-6 h-6 mr-2" />
              Thank You! Your form has been submitted and will be reviewed by
              your consultants
            </Alert>
          )}
          {formData.state == "hasValue" && formData.contents.con ? (
            <Form
              form={{
                display: "wizard",
                components: formData.contents.con.components,
              }}
              submission={{
                data: formData.contents.val,
              }}
              onSubmit={handleSubmitData}
              onNextPage={handleSubmitData}
              // onChange={onChange}
              onPrevPage={(e) => PrevPage(e)}
              formReady={FormReady}
            />
          ) : (
            <h3> Loading.... </h3>
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
