import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputChildText from "../elements/InlineInputChildText";
import { Lucide } from "@/base-components";
import InlineDropChid from "../elements/InlineDropChid";
import InputTextArea from "../elements/InputTextArea";
import { filter } from "lodash";
import dat from "../elements/data.json";
import InlineChildSwitch from "../elements/InlineChildSwitch";
function removeArr(array, index) {
  return filter(array, (_items, key) => {
    return _items.id !== index;
  });
}

const Nationalities = (props) => {
  const { formData, setFormData } = props;

  console.log("formdata", formData);

  const addNationalities = (e) => {
    setFormData((formData) => ({
      ...formData,
      nationalities: [
        ...(formData.nationalities || []), // Ensure previous nationalities are included if they exist
        {
          id: Date.now(),
          country: "",
          passportNumber: "",
          hasPassportNumber: false,
        }, // New data entry
        // Add more data entries as needed
      ],
    }));
  };

  const updateNationality = (id, newData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      nationalities: prevFormData.nationalities.map((nationality) =>
        nationality.id === id ? { ...nationality, ...newData } : nationality
      ),
    }));
  };

  const deleteNationalities = (e) => {
    if (formData.nationalities && formData.nationalities.length > 1) {
      setFormData((prevData) => ({
        ...prevData,
        nationalities: prevData.nationalities.filter((nationality) => {
          // Condition to filter out values
          return nationality.id !== e; // Replace idToDelete with the ID you want to delete
        }),
      }));
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.nationalities &&
            formData.nationalities.map((data, index) => (
              <div key={index} className="border   border-blue-200  p-5 my-5">
                <h3 className="text-xl font-blod">
                  {" "}
                  Other Nationality # {index + 1}
                </h3>
                <InlineDropChid
                  title={`nationalities[${index}].country`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Other Country/Region of Origin (Nationality)"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                  updateNationality={updateNationality}
                  formData={formData}
                  parent={"nationalities"}
                  index={index}
                />
                <div className="mt-5 ">
                  <InlineChildSwitch
                    isVisible={true}
                    title={"hasPassportNumber"}
                    label=" Do you hold a passport for the other country/region of
            origin (nationality) above?"
                    formData={formData}
                    fullWidth={false}
                    helpText=" "
                    inline={true}
                    parent="nationalities"
                    index={index}
                    setFormData={setFormData}
                    onChange={updateNationality}
                  />
                </div>

                <InlineInputChildText
                  title={`passportNumber`}
                  helpText=""
                  register={props.register}
                  type="text"
                  errors={props.errors}
                  label=" Passport/Travel Document Number"
                  isVisible={
                    props.formData?.nationalities[index]?.hasPassportNumber
                  }
                  disabled={false}
                  updateNationality ={updateNationality}
                  parent="nationalities"
                  index={index}
                  formData={formData}
                  setFormData={setFormData}
                />

                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deleteNationalities(data.id)}
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
              onClick={addNationalities}
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

export default Nationalities;
