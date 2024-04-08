import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";

import reasonsForTravelData from "./reasonsForTravel.json";
const Travelers = (props) => {
  const { formData, setFormData, isVisible, errors, register } = props;
  // console.log("key", props?.check);
  const addTravelers = (e) => {
    setFormData((formData) => ({
      ...formData,
      travelers: [
        ...(formData.travelers || []), // Ensure previous nationalities are included if they exist
        { id: Date.now(), firstName: "", lastName: "", relation: "" }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deleteTravelers = (e) => {
    if (formData.travelers && formData.travelers.length > 1) {
      setFormData((formData) => ({
        ...formData,
        travelers: formData.travelers.filter((traveler) => {
          // Condition to filter out values
          return traveler.id !== e; // Replace idToDelete with the ID you want to delete
        }),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.travelers &&
            formData.travelers.map((data, index) => (
              <div className="flex flex-row gap-6" key={index}>
                <div className="basis-11/12 ">
                  <InlineInputText
                    required={true}
                    title={"lastName"}
                    helpText="   "
                    register={register}
                    type="text"
                    errors={errors}
                    label="What are the family name(s) of the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />
                  <InlineInputText
                    required={true}
                    title={"relation"}
                    helpText="   "
                    register={register}
                    type="text"
                    errors={errors}
                    label="What is your relationship with the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                  />
                  <InlineDrop
                    title={"firstName"}
                    helpText=""
                    register={register}
                    errors={errors}
                    label="What are the first (given) name(s) of the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    data={dat.relation}
                    inline={true}
                    formData={formData}
                  />
                </div>
                {formData.travelers.length === index + 1 ? (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addTravelers}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteTravelers(data.id)}
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

export default Travelers;
