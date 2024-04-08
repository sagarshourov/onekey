import { useState, useEffect } from "react";

import classnames from "classnames";

import InputText from "../elements/InputText";

const InlineTwoInputText = (props) => {
  // console.log("key", props?.check);
  const {
    label,
    isVisible,
    handleCheckboxChange,
    errors,
    firstFieldLbl,
    secFieldLbl,
    register,
    formData
  } = props;
  return (
    <>
      {isVisible && (
        <div className="mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label  basis-4/12 sa-label"
          >
            {label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
            <div className="basis-6/12 ">
              <InputText
                title={"fatherInfo.firstName"}
                helpText="  "
                register={register}
                type="text"
                errors={errors}
                label={firstFieldLbl}
                isVisible={true}
                disabled={false}
                checkLabel="Does not apply"
                condition={true}
                handleCheckboxChange={handleCheckboxChange}
                formData={formData}
                check="firstname_checkbox"
              />
            </div>
            <div className="basis-6/12">
              <InputText
                title={"fatherInfo.lastName"}
                helpText="  "
                register={register}
                type="text"
                errors={errors}
                label={secFieldLbl}
                isVisible={true}
                disabled={false}
                checkLabel="Does not apply"
                condition={true}
                handleCheckboxChange={handleCheckboxChange}
                formData={formData}
                check="lastname_checkbox"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineTwoInputText;
