import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";

import InlineDrop from "../elements/InlineDrop";

const ImmediateRelative = (props) => {
  // console.log("key", props?.check);

  const { formData, setFormData } = props;
  const addRelatives = (e) => {
    setFormData((formData) => ({
      ...formData,
      immediateRelatives: [
        ...(formData.immediateRelatives || []), // Ensure previous nationalities are included if they exist
        { id: Date.now(), value: "" }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deleteRelatives = (e) => {
    if (formData.immediateRelatives && formData.immediateRelatives.length > 1) {
      setFormData((formData) => ({
        ...formData,
        immediateRelatives: formData.immediateRelatives.filter(
          (immediateRelative) => {
            // Condition to filter out values
            return immediateRelative.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };
  return (
    <>
      {props.isVisible && (
        <>
          {formData.immediateRelatives &&
            formData.immediateRelatives.map((data, index) => (
              <div key={index} className="mt-5 border p-5  border-blue-200">
                <h3 className="text-xl font-bold">Immediate relative #{index+1} </h3>

                <div className="mt-5">
                   <InlineInputText
    required={true}
                    title={"immediateRelatives[0].firstName"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" First (Given) Name(s)"
                    isVisible={true}
                    disabled={false}
                    fieldVisibility={props.fieldVisibility}
                    handleCheckboxChange={props.handleCheckboxChange}
                  />

                   <InlineInputText
    required={true}
                    title={"immediateRelatives[0].lastName"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Family Name(s)"
                    isVisible={true}
                    disabled={false}
                    fieldVisibility={props.fieldVisibility}
                    handleCheckboxChange={props.handleCheckboxChange}
                  />

                  <InlineDrop
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"motherInfo.relation"}
                    data={[
                      { label: "SPOUSE", value: "SPOUSE" },
                      { label: "FIANCÉ/FIANCÉE", value: "FIANCE_FIANCEE" },
                      { label: "CHILD", value: "CHILD" },
                      { label: "SIBLING", value: "SIBLING" },
                    ]}
                    label="Relationship to You"
                    inline={true}
                  />
                  <InlineDrop
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"motherInfo.statusInput"}
                    inline={true}
                    data={[
                      { label: "U.S. CITIZEN", value: "US_CITIZEN" },
                      {
                        label: "U.S. LEGAL PERMANENT RESIDENT (LPR)",
                        value: "US_PERMANENT_RESIDENT",
                      },
                      { label: "NONIMMIGRANT", value: "NONIMMIGRANT" },
                      {
                        label: "OTHER/I DON'T KNOW",
                        value: "OTHER_OR_UNKNOWN",
                      },
                    ]}
                    label="Relative's status"
                  />
                </div>
               
                <div className="flex gap-5">
                  {formData.immediateRelatives.length == (index+1) && (
                    <button
                      type="button"
                      onClick={addRelatives}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add immediate relative
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deleteRelatives(data.id)}
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

export default ImmediateRelative;
