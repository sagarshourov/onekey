import { useState } from "react";
import axios from "axios";

import { Lucide, Modal, LoadingIcon, ModalBody } from "@/base-components";
import { getBaseApi } from "../../configuration";

const StudentModal = (props) => {
  const {
    showStudentInformation,
    setShowStudentInformation,
    fdata,
    handelStudentModel,
  } = props;
  const [loading, setLoading] = useState(false);

  console.log("d", fdata);

  const updateInformation = async (e) => {
    console.log(e);

    const LOGIN_URL = getBaseApi() + "student_info";
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json",
    };

    setLoading(true);

    const data = {
      code: e.target.elements.code.value,
      package: e.target.elements.package.value,
      interview_date: e.target.elements.interview_date.value,
      interview_time: e.target.elements.interview_time.value,
      university: e.target.elements.university.value,
      visa_type: e.target.elements.visa_type.value,
      user_id: parseInt(e.target.elements.user_id.value),
      us_consultant: e.target.elements.us_consultant.value,
      ds_160_num: e.target.elements.ds_160_num.value,
      applying_for: e.target.elements.applying_for.value,
      intended: e.target.elements.intended.value,
    };
    e.preventDefault();
    //setFdata((fdata) => ({ ...fdata, user_id: userId }));

    try {
      // const response = await axios.post(LOGIN_URL, JSON.stringify(fdata), {
      //   headers,
      // });

      const response = await axios.post(LOGIN_URL, data, {
        headers,
      });

      if (response?.data?.success) {
        setShowStudentInformation(false);
        window.location.reload();
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      show={showStudentInformation}
      onHidden={() => {
        handelStudentModel(false);
      }}
    >
      <ModalBody className="p-0">
        <form method="POST" onSubmit={(e) => updateInformation(e)}>
          <div className="p-5 ">
            <h3 className="text-lg text-center py-3 mb-4">
              Student Information
            </h3>
            <div>
              <label htmlFor="vertical-form-1" className="form-label">
                SEVIS ID number
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="Code" className="w-4 h-4 mt-2" />
                </div>
                <input
                  type="text"
                  name="code"
                  className=" py-4 form-control"
                  placeholder=""
                  defaultValue={fdata.code}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Case Type
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="Award" className="w-4 h-4 mt-2" />
                </div>
                {fdata.package !== 0 ? (
                  <select
                    name="package"
                    defaultValue={fdata.package}
                    className=" py-4 form-control"
                  >
                    <option value="0">Select ... </option>
                    <option value="1">Other Package </option>
                    <option value="2">Platinum Package </option>
                    <option value="3">Gold Package </option>
                    <option value="4">Silver Package </option>
                  </select>
                ) : (
                  <select name="package" className=" py-4 form-control">
                    <option value="0">Select ... </option>
                    <option value="1">Other Package </option>
                    <option value="2">Platinum Package </option>
                    <option value="3">Gold Package </option>
                    <option value="4">Silver Package </option>
                  </select>
                )}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Interview Date
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="Calendar" className="w-4 h-4 mt-2" />
                </div>
                <input
                  type="date"
                  name="interview_date"
                  className=" py-4 form-control"
                  placeholder=""
                  defaultValue={fdata.interview_date}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Interview Time
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="Clock" className="w-4 h-4 mt-2" />
                </div>
                <input
                  type="time"
                  name="interview_time"
                  className=" py-4 form-control"
                  placeholder=""
                  defaultValue={fdata.interview_time}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                U.S. Consulate
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="UserCheck" className="w-5 h-4 mt-2" />
                </div>

                <input
                  type="text"
                  name="us_consultant"
                  className=" py-4 form-control"
                  defaultValue={fdata.us_consultant}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                University / Institution
              </label>

              <div className="input-group w-full">
                <div id="input-group-email" className="input-group-text">
                  <Lucide icon="Home" className="w-4 h-4 mt-2" />
                </div>

                <input
                  type="text"
                  name="university"
                  className=" py-4 form-control"
                  defaultValue={fdata.university}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Visa Type Status
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="Info" className="w-5 h-4 mt-2" />
                </div>

                <input
                  type="text"
                  name="visa_type"
                  className=" py-4 form-control"
                  defaultValue={fdata.visa_type}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                DS-160 Number
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="GitPullRequest" className="w-5 h-4 mt-2" />
                </div>

                <input
                  type="text"
                  name="ds_160_num"
                  className=" py-4 form-control"
                  defaultValue={fdata.ds_160_num ? fdata.ds_160_num : ""}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Applying for
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="GitPullRequest" className="w-5 h-4 mt-2" />
                </div>

                <input
                  type="text"
                  name="applying_for"
                  className=" py-4 form-control"
                  defaultValue={fdata.applying_for ? fdata.applying_for : ""}
                />
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="vertical-form-1" className="form-label">
                Intended Level
              </label>

              <div className="input-group w-full">
                <div className="input-group-text">
                  <Lucide icon="GitPullRequest" className="w-5 h-4 mt-2" />
                </div>

                {fdata.intended ? (
                  <select
                    name="intended"
                    defaultValue={fdata.intended ? fdata.intended : 0}
                    className=" py-4 form-control"
                  >
                    <option value="0">Select ... </option>
                    <option value="1"> Associate Degree </option>
                    <option value="2">Bachelor Degree </option>
                    <option value="3">Master Degree </option>
                    <option value="4">Ph.D.  </option>
                    <option value="5">Certificate</option>
                  </select>
                ) : (
                  <select name="intended" className=" py-4 form-control">
                    <option value="0">Select ... </option>
                    <option value="1"> Associate Degree </option>
                    <option value="2">Bachelor Degree </option>
                    <option value="3">Master Degree </option>
                    <option value="4">Ph.D.  </option>
                    <option value="5">Certificate</option>
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className="px-5 pb-8 text-center">
            <button
              type="button"
              onClick={() => {
                handelStudentModel(false);
              }}
              className="btn btn-outline-secondary w-24 mr-1"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary w-24">
              Update{" "}
              {loading && (
                <LoadingIcon
                  icon="three-dots"
                  color="white"
                  className="w-4 h-4 ml-2"
                />
              )}
            </button>

            <input type="hidden" name="user_id" defaultValue={fdata.user_id} />
          </div>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default StudentModal;
