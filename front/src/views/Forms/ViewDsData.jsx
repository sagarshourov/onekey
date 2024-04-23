import { useState } from "react";
//import { Form } from "react-formio";
import { Lucide, LoadingIcon } from "@/base-components";
import { useRecoilRefresher_UNSTABLE, useRecoilValueLoadable } from "recoil";
import { formDataSelect } from "../../state/admin-atom";
import { useParams } from "react-router-dom";
import { getBaseApi } from "../../configuration";
import "./view_style.css";
import DsViewData from "./DsViewData/DsViewData";

const ViewDsData = () => {
  let { id } = useParams();

  const formData = useRecoilValueLoadable(formDataSelect(id));

  const [loading, setLoading] = useState(false);

  const resetList = useRecoilRefresher_UNSTABLE(formDataSelect(id));

  const markCompleted = async () => {
    setLoading(true);

    try {
      //console.log(response);
      resetList();
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  console.log("form data", formData);

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
                href=""
                target="_blank"
              >
                <Lucide icon="Download" className="w-4 h-4 mr-1" /> Download As
                PDF
              </a>
            )}
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0 sm:ml-auto md:ml-0">
            
          </div>
        </div>
        {/* BEGIN: Data List */}

        <div
          id="pdf"
          className="intro-y col-span-12 overflow-auto lg:overflow-visible"
        >
          {formData.state == "hasValue" && (
            <DsViewData data={JSON.parse(formData.contents)} />
          )}
        </div>
        {/* END: Data List */}
      </div>
    </>
  );
};

export default ViewDsData;
