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
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                  <InlineInputText
                    required={true}
                    title={`additionalEmails.${index}`}
                    helpText=""
                    register={register}
                    type="text"
                    errors={errors}
                    label={index + 1 + ". Additional Email "}
                    isVisible={true}
                    disabled={false}
                  />
                </div>
                {formData.additionalEmails.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addEmail}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteEmail(data.id)}
                      className="btn bg-gray-300 btn-rounded p-2 hover:bg-danger hover:text-white"
                    >
                      <Lucide icon="X" className="w-7 h-7" />
                    </button>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default AddEmail;
