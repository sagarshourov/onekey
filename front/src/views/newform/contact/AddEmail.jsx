import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const AddEmail = (props) => {
  const { formData, isVisible, register, errors, setFormData } = props;
  // console.log("key", props?.check);

  const addEmail = (e) => {
    setFormData((formData) => ({
      ...formData,
      additionalEmails: [
        ...(formData.additionalEmails || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          number: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deleteEmail = (e) => {
    if (formData.additionalEmails && formData.additionalEmails.length > 1) {
      setFormData((formData) => ({
        ...formData,
        additionalEmails: formData.additionalEmails.filter(
          (additionalEmail) => {
            // Condition to filter out values
            return additionalEmail.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalEmails &&
            formData.additionalEmails.map((data, index) => (
              <div key={index}>
                <InlineInputText
                  title={`additionalEmails.${index}`}
                  helpText=""
                  register={register}
                  type="text"
                  errors={errors}
                  label={index + 1 + ". Additional Email "}
                  isVisible={true}
                  disabled={false}
                />

                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deleteEmail(data.id)}
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
              onClick={addEmail}
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

export default AddEmail;
