import { useState, useEffect } from "react";

import classnames from "classnames";
import data from "./data.json";

const InlineInputDate = (props) => {
  // console.log("key", props?.check);

  const {
    endYear,
    chkLbl,
    formData,
    register,
    setFormData,
    handleCheckboxChange,
    parent,
  } = props;

  const handelCheck = (chkName, fieldName) => {
    handleCheckboxChange(fieldName);
    setFormData(chkName, !formData[chkName], { shouldValidate: true });

    // clear errors
  };
  const generateYearList = (startYear, endYear) => {
    var endYear = endYear != "current" ? endYear : new Date().getFullYear();

    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };

  return (
    <>
      {props.isVisible && (
        <div
          className={`mt-5 flex-none${
            props.inline ? " lg:flex gap-5 lg:flex-row" : ""
          }`}
        >
          <label
            htmlFor="regular-form-3"
            className="form-label basis-4/12  sa-label"
          >
            {props.label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className={props.condition ? "basis-6/12" : "basis-8/12"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <select
                {...register(`${props.title}.dayIndex`)}
                className="form-select   w-full "
                aria-label=".form-select-lg example"
                disabled={props.disabled}
                name={props.title + ".0.dayIndex"}
              >
                <option>Select...</option>
                {data.days.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
              </select>
              <select
                {...register(`${props.title}.monthIndex`)}
                className="form-select  w-full "
                aria-label=".form-select-lg example"
                disabled={props.disabled}
                name={props.title + ".0.monthIndex"}
              >
                <option>Select...</option>
                {data.months.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
              </select>
              {/* <input
                {...register(`${props.title}.yearIndex`)}
                type="text"
                name={props.title + ".yearIndex"}
                className="form-control"
                disabled={props.disabled}
              /> */}
              <select
                {...register(`${props.title}.yearIndex`)}
                className="form-select  w-full "
                aria-label=".form-select-lg example"
                disabled={props.disabled}
                name={props.title + ".0.yearIndex"}
              >
                <option>Select...</option>
                {generateYearList(1950, endYear).map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
            {props.errors[props.title] && (
              <div className="text-danger mt-2">
                {props.errors[props.title].message}
              </div>
            )}
            <div className="form-help">{props.helpText}</div>
          </div>

          {props.condition && (
            <div className=" pl-1 pt-2  basis-2/12">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={() => handelCheck(props.check, props.title)}
                name={props.check}
              />
              <label className="form-check-label" htmlFor="checkbox-switch-3">
                {chkLbl}
              </label>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InlineInputDate;
