import { useState, useEffect } from "react";

import classnames from "classnames";
import InputText from "../elements/InputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InlineInputDate from "../elements/InlineInputDate";

import reasonsForTravelData from "./reasonsForTravel.json";
const PreviousVisit = (props) => {
  const {
    isVisible,
    label,
    register,
    formData,
    handleCheckboxChange,
    setFormData,
    errors,
  } = props;
  // console.log("key", props?.check);
  const addPreviousVisit = (e) => {
    setFormData((formData) => ({
      ...formData,
      previousVisit: [
        ...(formData.previousVisit || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          arrivalDate: "",
          stayLengthValue: "",
          stayLengthType: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deletePreviousVisit = (e) => {
    if (formData.previousVisit && formData.previousVisit.length > 1) {
      setFormData((formData) => ({
        ...formData,
        previousVisit: formData.previousVisit.filter((previousVisit) => {
          // Condition to filter out values
          return previousVisit.id !== e; // Replace idToDelete with the ID you want to delete
        }),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.previousVisit &&
            formData.previousVisit.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Previous visit #{index + 1}
                </h3>
                <InlineInputDate
                  title={"arrivalDate"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Date Arrived"
                  isVisible={true}
                  disabled={false}
                  inline={true}
                />
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
                        isVisible={true}
                        disabled={false}
                        condition={false}
                        handleCheckboxChange={handleCheckboxChange}
                        formData={formData}
                      />
                    </div>
                    <div className="basis-6/12">
                      <select className="form-control">
                        <option>Years</option>
                        <option>Months</option>
                        <option>Weeks</option>
                        <option>Days</option>
                        <option>Less than 24 hours</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  {formData.previousVisit.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPreviousVisit}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                     + Add previous visit
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deletePreviousVisit(data.id)}
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

export default PreviousVisit;
