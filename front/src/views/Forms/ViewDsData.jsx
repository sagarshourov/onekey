import { useState } from "react";
//import { Form } from "react-formio";
import { Lucide, LoadingIcon } from "@/base-components";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { formDataSelect } from "../../state/admin-atom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./view_style.css";
import DsViewData from "./DsViewData/DsViewData";
import { getAdmin, getBaseApi } from "../../configuration";
const ViewDsData = () => {
  let { id } = useParams();

  const formData = useRecoilValueLoadable(formDataSelect(id));

  const [loading, setLoading] = useState(false);

  const resetList = useRecoilRefresher_UNSTABLE(formDataSelect(id));

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

      console.log('e',err);
    }
  };
  //console.log("form data", JSON.parse(formData.contents));
  formData.contents && console.log("form data",  formData);
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
            {id !== 0 && (
              <a
                className="flex items-center btn btn-success-soft"
                href={getBaseApi() + "dspdf/" + id}
                target="_blank"
              >
                <Lucide icon="Download" className="w-4 h-4 mr-1" /> Download As
                PDF
              </a>
            )}
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

        <div
          id="pdf"
          className="intro-y col-span-12 overflow-auto lg:overflow-visible"
        >
          {formData.state == "hasValue" && (
            <DsViewData data={JSON.parse(formData.contents.content)} />
          )}
        </div>
        {/* END: Data List */}
      </div>
    </>
  );
};

export default ViewDsData;
