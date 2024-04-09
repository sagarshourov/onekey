import { useState, useEffect } from "react";

import classnames from "classnames";

const InlineInputChildText = (props) => {
  // console.log("key", props?.check);
  const { formData, parent, index, updateNationality } = props;

  console.log("errors", props.errors);
  return (
    <>
      {props.isVisible && (
        <div className="mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label basis-12/12 lg:basis-4/12 sa-label"
          >
            {props.label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div
            className={
              props.condition
                ? "basis-12/12 lg:basis-6/12"
                : " basis-12/12 lg:basis-8/12"
            }
          >
            <input
              {...props.register(`${parent}.${index}.${props.title}`)}
              type='text'
              placeholder={props.label}
              name={`${parent}.${index}.${props.title}`}
              defaultValue={formData[parent][index][props.title]}
              className={classnames({
                "form-control": true,
                "border-danger":
                  props.errors[parent] &&
                  props.errors[parent][index] &&
                  props.errors[parent][index][props.title],
              })}
              disabled={props.disabled}
            />
            {props.errors[parent] &&
              props.errors[parent][index] &&
              props.errors[parent][index][props.title] && (
                <div className="text-danger mt-2">
                  {props.errors[parent][index][props.title].message}
                </div>
              )}
            <div className="form-help">{props.helpText}</div>
          </div>

          {props.condition && (
            <div className=" pl-1 pt-2 basis-12/12  lg:basis-2/12">
              <input
                {...props.register(props.check)}
                className="form-check-input"
                type="checkbox"
                value=""
                onChange={(e) =>
                  updateNationality(formData[parent][index].id, {
                    [props.title]: e.target.value,
                  })
                }
                name={props.check}
              />
              <label className="form-check-label" htmlFor="checkbox-switch-3">
                {props.checkLabel ? props.checkLabel : "Does not apply"}
              </label>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default InlineInputChildText;
