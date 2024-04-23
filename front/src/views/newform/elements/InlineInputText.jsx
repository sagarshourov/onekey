import { useState, useEffect } from "react";

import classnames from "classnames";

const InlineInputText = (props) => {
  // console.log("key", props?.check);
  const {
    formData,
    required,
    title,
    check,
    label,
    condition,
    disabled,
    helpText,
    checkLabel,
    register,
    errors,
    isVisible,
    handleCheckboxChange,
    setFormData
  } = props;


  const handelCheck = (chkName, fieldName) => {
    handleCheckboxChange(fieldName);
    setFormData(chkName, !formData[chkName], { shouldValidate: true });

    // clear errors
  };
  return (
    <>
      {isVisible && (
        <div className="mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label basis-12/12 lg:basis-4/12 sa-label"
          >
            {label}
            {required && <span className="text-danger pl-1">*</span>}
          </label>
          <div
            className={
              condition
                ? "basis-12/12 lg:basis-6/12"
                : " basis-12/12 lg:basis-8/12"
            }
          >
            <input
              {...register(title)}
              type="text"
              placeholder={label}
              name={title}
              className={classnames({
                "form-control": true,
                "border-danger": errors[title],
              })}
              disabled={disabled}
              required={required}
            />
            {errors[title] && (
              <div className="text-danger mt-2">{errors[title].message}</div>
            )}
            <div className="form-help">{helpText}</div>
          </div>

          {condition && (
            <div className=" pl-1 pt-2 basis-12/12  lg:basis-2/12">
              <input
                {...register(check)}
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={() => handelCheck(check)}
                name={check}
                checked={formData[check] && formData[check] ? true : false}
              />
              <label className="form-check-label" htmlFor="checkbox-switch-3">
                {checkLabel ? checkLabel : "Does not apply"}
              </label>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InlineInputText;
