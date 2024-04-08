import { useState, useEffect } from "react";

import classnames from "classnames";
import InputText from "../elements/InputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InlineInputDate from "../elements/InlineInputDate";

import reasonsForTravelData from "./reasonsForTravel.json";
import InlineInputText from "../elements/InlineInputText";
import InlineDropChid from "../elements/InlineDropChid";

const USDriverLicenses = (props) => {
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
  const addLicenses = (e) => {
    setFormData((formData) => ({
      ...formData,
      USDriverLicenses: [
        ...(formData.USDriverLicenses || []), // Ensure previous nationalities are included if they exist
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

  const deleteLicenses = (e) => {
    if (formData.USDriverLicenses && formData.USDriverLicenses.length > 1) {
      setFormData((formData) => ({
        ...formData,
        USDriverLicenses: formData.USDriverLicenses.filter(
          (USDriverLicense) => {
            // Condition to filter out values
            return USDriverLicense.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };
  const updateNationality = (id, newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      USDriverLicenses: prevFormData.USDriverLicenses.map((state) =>
        state.id === id ? { ...state, ...newData } : state
      ),
    }));
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.USDriverLicenses &&
            formData.USDriverLicenses.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Previous US licence #{index + 1}
                </h3>

                <InlineInputText
                  required={true}
                  title={"USDriverLicenses.licenseId"}
                  helpText="  "
                  register={register}
                  type="text"
                  errors={errors}
                  isVisible={true}
                  disabled={formData.licenseId_checkbox}
                  handleCheckboxChange={handleCheckboxChange}
                  formData={formData}
                  condition={true}
                  label="Driver's Licence Number"
                  checkLabel="Does not apply"
                  check="licenseId_checkbox"
                />
                <InlineDropChid
                  title={`USDriverLicenses.${index}.country`}
                  helpText=""
                  register={register}
                  errors={errors}
                  label="Other Country/Region of Origin (Nationality)"
                  isVisible={true}
                  disabled={false}
                  data={dat.statesOptions}
                  inline={true}
                  updateNationality={updateNationality}
                  formData={formData}
                  parent={"USDriverLicenses"}
                  index={index}
                />

                <div className="flex gap-5">
                  {formData.USDriverLicenses.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addLicenses}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add previous US licence
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deleteLicenses(data.id)}
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

export default USDriverLicenses;
