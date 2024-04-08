import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InputTextArea from "../elements/InputTextArea";

import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";
import data from "../elements/data.json";

import InlineSwitch from "../elements/InlineSwitch";
const PreviousJob = (props) => {
  // console.log("key", props?.check);
  const { isVisible, setFormData, formData } = props;

  const addPrevJob = (e) => {
    setFormData((formData) => ({
      ...formData,
      previousJobs: [
        ...(formData.previousJobs || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          number: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deletePrevJob = (e) => {
    if (formData.previousJobs && formData.previousJobs.length > 1) {
      setFormData((formData) => ({
        ...formData,
        previousJobs: formData.previousJobs.filter(
          (previousJob) => {
            // Condition to filter out values
            return previousJob.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.previousJobs &&
            formData.previousJobs.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200" key={index}>
                <h3 className="text-xl font-bold"> Previous job #{index+1} </h3>

                <div className="mt-5">
                   <InlineInputText
    required={true}
                    title={"previousJobs[0].employer"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Employer name"
                    isVisible={true}
                    disabled={false}
                    fieldVisibility={formData}
                    handleCheckboxChange={props.handleCheckboxChange}
                    formData={formData}
                  />

                   <InlineInputText
    required={true}
                    title={"jobAddress.streetAddress"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 1)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />
                   <InlineInputText
    required={true}
                    title={"jobAddress.streetAddress2"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 2)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />

                   <InlineInputText
    required={true}
                    title={"jobAddress.city"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" City"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />

                   <InlineInputText
    required={true}
                    title={"jobAddress.state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" State/Province"
                    isVisible={true}
                    disabled={formData["jobAddress.state_checkbox"]}
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    check="jobAddress.state_checkbox"
                    checkLabel="Does not apply"
                    formData={formData}
                  />
                   <InlineInputText
    required={true}
                    title={"jobAddress.zipCode"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Postal Zone/Zip Code"
                    isVisible={true}
                    disabled={formData["jobAddress.zipCode_checkbox"]}
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    check="jobAddress.zipCode_checkbox"
                    checkLabel="Does not apply"
                    formData={formData}
                    fieldVisibility={formData}
                  />
                  <InlineDrop
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"jobAddress.country"}
                    data={data.countries}
                    label="Country/Region"
                    inline={true}
                  />
                   <InlineInputText
    required={true}
                    title={"jobPhoneNumber"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Telephone number"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    fieldVisibility={formData}
                  />

                   <InlineInputText
    required={true}
                    title={"jobAddress.state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Job title"
                    isVisible={true}
                    disabled={formData["jobAddress.state_checkbox"]}
                    formData={formData}
                  />
                   <InlineInputText
    required={true}
                    title={"jobAddress.state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Supervisor's Family Name(s)"
                    isVisible={true}
                    disabled={formData["jobAddress.state_checkbox"]}
                    formData={formData}
                  />
                   <InlineInputText
    required={true}
                    title={"jobAddress.state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Supervisor's First (Given) Name(s)"
                    isVisible={true}
                    disabled={formData["jobAddress.state_checkbox"]}
                    formData={formData}
                  />

                  <InlineInputDate
                    title={"jobStartDate"}
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Employment Date From"
                    isVisible={true}
                    disabled={false}
                    inline={true}
                  />
                  <InlineInputDate
                    title={"jobStartDate"}
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Employment Date To"
                    isVisible={true}
                    inline={true}
                    disabled={false}
                  />

                  <InputTextArea
                    title="jobDescribe"
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Briefly describe your duties"
                    isVisible={true}
                    disabled={false}
                  />
                </div>
                <div className="flex gap-5">
                  {formData.previousJobs.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPrevJob}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add additional job details
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deletePrevJob(data.id)}
                      className="btn bg-gray-300 btn-rounded px-5 text-white"
                    >
                      Remove
                    </button>
                  )}
                </div>
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default PreviousJob;
