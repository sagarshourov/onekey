import { useState, useEffect } from "react";

import classnames from "classnames";

import InputText from "../elements/InputText";

const InlineTwoInputText = (props) => {
  // console.log("key", props?.check);
  return (
    <>
      {props.isVisible && (
        <div className="mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label  basis-4/12 sa-label"
          >
            {props.label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
            <div className="basis-6/12 ">
              <InputText
                title={"fatherInfo.firstName"}
                helpText="  "
                register={props.register}
                type="text"
                errors={props.errors}
                label="Father's First (Given) Name(s)"
                isVisible={true}
                disabled={false}
                checkLabel="Does not apply"
                condition={true}
                fieldVisibility={props.fieldVisibility}
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
            <div className="basis-6/12">
              <InputText
                title={"fatherInfo.lastName"}
                helpText="  "
                register={props.register}
                type="text"
                errors={props.errors}
                label="Father's Family Name(s)"
                isVisible={true}
                disabled={false}
                checkLabel="Does not apply"
                condition={true}
                fieldVisibility={props.fieldVisibility}
                handleCheckboxChange={props.handleCheckboxChange}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineTwoInputText;
