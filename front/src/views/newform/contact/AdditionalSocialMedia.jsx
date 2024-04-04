import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const AdditionalSocialMedia = (props) => {
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
              <div className="flex flex-row" key={index}>
                <div className="basis-10/12">
                  <InlineDrop
                    title={"platform"}
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Social media provider/Platform"
                    isVisible={true}
                    disabled={false}
                    data={dat.countries}
                    inline={true}
                    formData={formData}
                  />
                  <InlineInputText
                    title={"username"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Social Media Identifier"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />
                </div>

                <div className="basis-2/12  mt-5">
                  <button
                    type="button"
                    onClick={() => deleteSocial(data.id)}
                    className="btn bg-gray-300 btn-rounded p-1"
                  >
                    <Lucide icon="X" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            ))}
          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={addSocial}
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

export default AdditionalSocialMedia;
