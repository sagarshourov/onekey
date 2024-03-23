import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";
import data from "../elements/data.json";
const Institution = (props) => {
  // console.log("key", props?.check);

  return (
    <>
      {props.isVisible && (
        <div className="mt-5">
        

          <div className="mt-5">
            <InlineInputText
              title={"previousJobs[0].employer"}
              helpText=""
              register={props.register}
              type="text"
              errors={props.errors}
              label="Name of the Institution"
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

              disabled={props.fieldVisibility["jobAddress.state_checkbox"]}
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
              disabled={props.fieldVisibility["jobAddress.zipCode_checkbox"]}
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
              label=" Course of Study"
              isVisible={true}
              disabled={false}
            />

            <InlineInputDate
              title={"jobStartDate"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label="Date of Attendance From"
              isVisible={true}
              disabled={false}
              inline={true}
            />
            <InlineInputDate
              title={"jobStartDate"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label="Date of Attendance To"
              isVisible={true}
              disabled={false}
              inline={true}
            />
          </div>
         
        </div>
      )}
    </>
  );
};

export default Institution;
