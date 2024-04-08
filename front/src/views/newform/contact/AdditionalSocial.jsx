import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const AdditionalSocial = (props) => {
  const { formData, isVisible, register, errors, setFormData } = props;
  // console.log("key", props?.check);

  const addSocial = (e) => {
    setFormData((formData) => ({
      ...formData,
      additionalSocials: [
        ...(formData.additionalSocials || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          number: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deleteSocial = (e) => {
    if (formData.additionalSocials && formData.additionalSocials.length > 1) {
      setFormData((formData) => ({
        ...formData,
        additionalSocials: formData.additionalSocials.filter(
          (additionalSocial) => {
            // Condition to filter out values
            return additionalSocial.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalSocials &&
            formData.additionalSocials.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 ">
                   <InlineInputText
    required={true}
                    title={"platform"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Additional Social Media Platform"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />

                   <InlineInputText
    required={true}
                    title={"username"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Additional Social Media Handle"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />
                </div>
                {formData.additionalSocials.length === index + 1 ? (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addSocial}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteSocial(data.id)}
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

export default AdditionalSocial;
