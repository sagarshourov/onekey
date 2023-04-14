import { useState } from "react";
import axios from "axios";

import { Lucide, Modal,LoadingIcon , ModalBody } from "@/base-components";
import { getBaseApi } from "../../configuration";

const StudentModal = (props) => {
  const {
    showStudentInformation,
    setShowStudentInformation,
    fdata,
    handelStudentModel,
  } = props;
  const [loading, setLoading] = useState(false);

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

                {fdata.package && (
                  <select
                    name="package"
                    defaultValue={fdata.package}
                    className=" py-4 form-control"
                  >
                    <option>Select ... </option>
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
