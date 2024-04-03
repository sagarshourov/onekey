import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InputTextArea from "../elements/InputTextArea";

import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";
import data from "../elements/data.json";

import InlineSwitch  from "../elements/InlineSwitch";
const PreviousJob = (props) => {
  // console.log("key", props?.check);
  const { formData } = props;
  return (
    <>
      {props.isVisible && (
        <div className="mt-5 border p-5  border-blue-200">
          <h3 className="text-xl font-bold"> Previous job #1 </h3>

          <div className="mt-5">
            <InlineInputText
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

            <InlineSwitch
              isVisible={true}
              title="hasBeenPreviouslyEmployed"
              label=" Briefly describe your duties"
              handleCheckboxChange={props.handleCheckboxChange}
            />
          </div>
          <button type="button" className="btn">
            + Add immediate relative
          </button>
        </div>
      )}
    </>
  );
};

export default PreviousJob;
