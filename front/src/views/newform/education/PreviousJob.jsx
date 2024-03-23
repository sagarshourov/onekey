import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";
import data from "../elements/data.json";
const PreviousJob = (props) => {
  // console.log("key", props?.check);
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
              fieldVisibility={props.fieldVisibility}
              handleCheckboxChange={props.handleCheckboxChange}
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
            />

            <InlineInputText
              title={"jobAddress.state"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" State/Province"
              isVisible={true}
              disabled={fieldVisibility["jobAddress.state_checkbox"]}
              condition={true}
              handleCheckboxChange={props.handleCheckboxChange}
              check="jobAddress.state_checkbox"
              checkLabel="Does not apply"
            />
            <InlineInputText
              title={"jobAddress.zipCode"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Postal Zone/Zip Code"
              isVisible={true}
              disabled={fieldVisibility["jobAddress.zipCode_checkbox"]}
              condition={true}
              handleCheckboxChange={props.handleCheckboxChange}
              check="jobAddress.zipCode_checkbox"
              checkLabel="Does not apply"
            />
            <InlineDrop
              isVisible={true}
              register={props.register}
              errors={props.errors}
              title={"jobAddress.country"}
              data={data.countries}
              label="Country/Region"
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
            />

            <InlineInputText
              title={"jobAddress.state"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label=" Job title"
              isVisible={true}
              disabled={fieldVisibility["jobAddress.state_checkbox"]}
            />
            <InlineInputText
              title={"jobAddress.state"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Supervisor's Family Name(s)"
              isVisible={true}
              disabled={fieldVisibility["jobAddress.state_checkbox"]}
            />
            <InlineInputText
              title={"jobAddress.state"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Supervisor's First (Given) Name(s)"
              isVisible={true}
              disabled={fieldVisibility["jobAddress.state_checkbox"]}
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
