import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const AddPhone = (props) => {
  const { formData, isVisible, register, errors, setFormData } = props;
  // console.log("key", props?.check);

  const addPhone = (e) => {
    setFormData((formData) => ({
      ...formData,
      additionalPhones: [
        ...(formData.additionalPhones || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          number: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deletePhone = (e) => {
    if (formData.additionalPhones && formData.additionalPhones.length > 1) {
      setFormData((formData) => ({
        ...formData,
        additionalPhones: formData.additionalPhones.filter(
          (additionalPhone) => {
            // Condition to filter out values
            return additionalPhone.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalPhones &&
            formData.additionalPhones.map((data, index) => (
              <div key={index}>
                <InlineInputText
                  title={`additionalPhones.${index}`}
                  helpText=""
                  register={register}
                  type="text"
                  errors={errors}
                  label={index + 1 + ". Additional Phone Number"}
                  isVisible={true}
                  disabled={false}
                />

                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deletePhone(data.id)}
                    className="btn bg-gray-300 btn-rounded p-1"
                  >
                    <Lucide icon="Minus" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            ))}
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={addPhone}
              className="btn bg-gray-300 btn-rounded p-2"
            >
              <Lucide icon="Plus" className="w-10 h-10" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default AddPhone;
