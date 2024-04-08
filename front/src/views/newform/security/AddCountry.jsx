import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
const AddCountry = (props) => {
  const { formData, isVisible, register, errors, setFormData } = props;
  // console.log("key", props?.check);
  const updateNationality = (id, newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      travelCountries: prevFormData.travelCountries.map((travelCountry) =>
      travelCountry.id === id ? { ...travelCountry, ...newData } : travelCountry
      ),
    }));
  };

  const addLang = (e) => {
    setFormData((formData) => ({
      ...formData,
      travelCountries: [
        ...(formData.travelCountries || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          number: "",
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const deleteLang = (e) => {
    if (formData.travelCountries && formData.travelCountries.length > 1) {
      setFormData((formData) => ({
        ...formData,
        travelCountries: formData.travelCountries.filter(
          (travelCountries) => {
            // Condition to filter out values
            return travelCountries.id !== e; // Replace idToDelete with the ID you want to delete
          }
        ),
      }));
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.travelCountries &&
            formData.travelCountries.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                   <InlineInputText
    required={true}
                    title={`travelCountries.${index}.country`}
                    helpText=""
                    register={register}
                    errors={errors}
                    label="Country/Region"
                    isVisible={true}
                    disabled={false}
                    data={dat.countries}
                    inline={true}
                    updateNationality={updateNationality}
                    formData={formData}
                    parent={"travelCountries"}
                    index={index} />
                </div>
                {formData.travelCountries.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addLang}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteLang(data.id)}
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

export default AddCountry;
