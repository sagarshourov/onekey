import { Lucide } from "@/base-components";
import { useRecoilValue } from "recoil";

import { useState, useRef } from "react";
import { getBaseApi } from "../../configuration";
import { userSelect } from "../../state/users-atom";
import { useParams } from "react-router-dom";
const token = localStorage.getItem("token");


const UserMain = () => {
  let { id } = useParams();
  const dropzoneSingleRef = useRef();
  const userData = useRecoilValue(userSelect(id));

  const [val, setValue] = useState(userData);
  // const [edit, setEdit] = useState(true);
  // const [editProfile, handelEditProfileClick] = useState(false);
  // const [loading, setLoading] = useState(false);
 
 
  return (
    <div className="grid grid-cols-12 gap-6">
      <div className="col-span-12 md:col-span-9 xl:col-span-9">
        <div className="grid grid-cols-12 gap-6">
          {/* BEGIN: General Report */}
          <div className="col-span-12 mt-6">
            <div className="intro-y  block sm:flex items-center h-20">
              <h2 className="text-lg font-medium truncate mr-5">Tasks Name</h2>
            </div>
            <div className="bg-slate-200 rounded intro-y p-5">
              <div className="flex justify-between border-b border-slate-200/60 dark:border-darkmode-400 pb-5">
                <div className="font-medium truncate ">Tasks</div>
              </div>
            </div>

            {/* pleaseCheckTheEnglishTestScoresIfYouHaveAny */}
          </div>
          {/* END: General Report */}
        </div>
      </div>
      <div className="col-span-12 md:col-span-3 xl:col-span-3">
        <div className="border-l border-slate-300/50 h-full pt-6 pb-6">
          <div className="pl-6 grid grid-cols-12 gap-x-6 gap-y-8">
            {/* BEGIN: Attachments */}
            <div className="col-span-12 md:col-span-12 xl:col-span-12 col-span-12">
              <div className="mt-4">
                <div className="intro-x box h-screen">
                  <div className="flex justify-end">
                    {/* <button
                      className="ml-auto mt-2 mr-2"
                      onClick={() => {
                        handelEditProfileClick(true);
                        setEdit(true);
                      }}
                    >
                      <Lucide icon="Edit" className="w-4 h-4 text-slate-500 " />
                    </button> */}
                  </div>

                  <div className="col-span-12 my-5 flex items-center">
                    <div className="image-fit w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden m-auto">
                      <img
                        alt="Profile Image"
                        src={
                          getBaseApi() + "file/" + val?.profile_image?.file_path
                        }
                      />
                    </div>
                  </div>

          
                  <div className="col-span-12 my-5 flex items-center">
                    <h1 className=" m-auto text-2xl font-medium">
                      {val.first_name + " " + val.last_name}
                    </h1>
                    <div className="text-slate-500 text-xs mt-1"></div>
                  </div>
                  {val?.package && (
                    <div className="col-span-12 my-5 flex items-center">
                      <h4 className=" m-auto  font-medium">
                        <small> Case Type : </small> {val?.package}
                      </h4>
                    </div>
                  )}
                  {val?.student_info?.visa_type && (
                    <div className="col-span-12 my-5 flex items-center">
                      <h4 className=" m-auto  font-medium">
                        <small> Visa Type : </small>{" "}
                        {val?.student_info?.visa_type}
                      </h4>
                    </div>
                  )}

                  <div className="col-span-12 h-20"></div>
                  {val.user_phone !== null && (
                    <div className="col-span-12 pt-5  border-t flex items-center justify-center ">
                      <Lucide icon="Phone" className="w-6 h-6 mr-2" />+{" "}
                      {val?.user_phone}
                    </div>
                  )}
                  <div className="col-span-12 mt-4 mb-5 flex items-center justify-center ">
                    <Lucide icon="Mail" className="w-6 h-6 mr-2" />
                    {val?.email}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMain;
