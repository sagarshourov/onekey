import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";

import reasonsForTravelData from "./reasonsForTravel.json";
const Purposes = (props) => {
  const { formData, setFormData } = props;
  // console.log("key", props?.check);
  const addPurposes = (e) => {
    setFormData((formData) => ({
      ...formData,
      purposes: [
        ...(formData.purposes || []), // Ensure previous nationalities are included if they exist
        { id: Date.now(), value: "" }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deletePurposes = (e) => {
    if (formData.purposes && formData.purposes.length > 1) {
      setFormData((formData) => ({
        ...formData,
        purposes: formData.purposes.filter((purposes) => {
          // Condition to filter out values
          return purposes.id !== e; // Replace idToDelete with the ID you want to delete
        }),
      }));
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.purposes &&
            formData.purposes.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Purpose of the trip to the US #1
                </h3>
                <InlineDrop
                  title={"purposes[" + index + "].mainPurpose"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Purpose of the trip to the US"
                  isVisible={true}
                  disabled={false}
                  data={reasonsForTravelData.mainPurpose}
                  inline={true}
                />

                <InlineDrop
                  title={"purposes[" + index + "].specify"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Specify"
                  isVisible={true}
                  disabled={false}
                  data={reasonsForTravelData.specify}
                  inline={true}
                />

                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deletePurposes(data.id)}
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
              onClick={addPurposes}
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

export default Purposes;
