import { useState, useEffect } from "react";

import classnames from "classnames";
import data from "./data.json";
const InlineInputChildDate = (props) => {
  // console.log("key", props?.check);

  const {
    register,
    title,
    isVisible,
    condition,
    disabled,
    label,
    inline,
    helpText,
    errors,
    parent,
    index,
  } = props;

  const generateYearList = (startYear) => {
    var endYear = new Date().getFullYear();

    const years = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  };
  return (
    <>
      {isVisible && (
        <div
          className={`mt-5 flex-none${
            inline ? " lg:flex gap-5 lg:flex-row" : ""
          }`}
        >
          <label
            htmlFor="regular-form-3"
            className="form-label basis-4/12  sa-label"
          >
            {label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className={condition ? "basis-6/12" : "basis-8/12"}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <select
                {...register(`${parent}.${index}.${props.title}.dayIndex`)}
                className="form-select w-full "
                aria-label=".form-select example"
                name={`${parent}.${index}.${props.title}.dayIndex`}
                disabled={disabled}
              >
                {data.days.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
              </select>
              <select
                className="form-select  w-full "
                aria-label=".form-select-lg example"
                disabled={disabled}
                {...register(`${parent}.${index}.${props.title}.monthIndex`)}
                name={`${parent}.${index}.${props.title}.monthIndex`}
              >
                {data.months.map((data, index) => (
                  <option key={index} value={data.value}>
                    {data.label}
                  </option>
                ))}
              </select>

              <select
                {...register(`${parent}.${index}.${props.title}.yearIndex`)}
                className="form-select  w-full "
                aria-label=".form-select-lg example"
                disabled={disabled}
                name={`${parent}.${index}.${props.title}.yearIndex`}
              >
                {generateYearList(1970).map((data, index) => (
                  <option key={index} value={data}>
                    {data}
                  </option>
                ))}
              </select>
            </div>
            {errors[title] && (
              <div className="text-danger mt-2">{errors[title].message}</div>
            )}
            <div className="form-help">{helpText}</div>
          </div>

          {props.condition && (
            <div className=" pl-1 pt-2  basis-2/12">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={() => props.handleCheckboxChange(props.check)}
                name={props.check}
              />
              <label className="form-check-label" htmlFor="checkbox-switch-3">
                {props.chkLbl}
              </label>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InlineInputChildDate;
