import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const LostPassports = (props) => {
  const { formData, setFormData } = props;
  // console.log("key", props?.check);
  const addLostPassport = (e) => {
    setFormData((formData) => ({
      ...formData,
      lostpassports: [
        ...(formData.lostpassports || []), // Ensure previous nationalities are included if they exist
        { id: Date.now(), value: "" }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deletePassportss = (e) => {
    if (formData.lostpassports && formData.lostpassports.length > 1) {
      setFormData((formData) => ({
        ...formData,
        lostpassports: formData.lostpassports.filter((lostpassports) => {
          // Condition to filter out values
          return lostpassports.id !== e; // Replace idToDelete with the ID you want to delete
        }),
      }));
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.lostpassports &&
            formData.lostpassports.map((data, index) => (
              <div key={index}>
                 <InlineInputText
    required={true}
                  title={`lostpassports.${index}.passportNumber`}
                  helpText=""
                  register={props.register}
                  type="text"
                  errors={props.errors}
                  label=" Passport/Travel Document Number"
                  isVisible={true}
                  disabled={props.fieldVisibility["passportNumber"]}
                  condition={true}
                  handleCheckboxChange={props.handleCheckboxChange}
                  check={`lostpassports.${index}.passportNumber_check`}
                  formData={formData}
                />

                <InlineDrop
                  title={`lostpassports.${index}.passportIssueCountryInput`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Issuing country/authority of the passport/travel document"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                  formData={formData}
                  
                />

                <InputTextArea
                  title={`lostpassports.${index}.Explain`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Explain"
                  isVisible={true}
                  disabled={false}
                  formData={formData}
                />
                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deletePassportss(data.id)}
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
              onClick={addLostPassport}
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

export default LostPassports;
