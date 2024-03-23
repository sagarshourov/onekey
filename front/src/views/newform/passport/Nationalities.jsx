import { useState, useEffect } from "react";

import classnames from "classnames";
import InlineInputText from "../elements/InlineInputText";
import { Lucide } from "@/base-components";
import InlineDrop from "../elements/InlineDrop";
import InputTextArea from "../elements/InputTextArea";
import { filter } from "lodash";
import dat from "../elements/data.json";
import InlineSwitch from "../elements/InlineSwitch";
function removeArr(array, index) {
  return filter(array, (_items, key) => {
    return _items.id !== index;
  });
}

const Nationalities = (props) => {
  const { formData, setFormData } = props;

  console.log("formdata", formData);

  // console.log("key", props?.check);
  // const [nationalities, setNationalities] = useState([
  //   {
  //     id: 0,
  //     values: [
  //       {
  //         value: "",
  //       },
  //       {
  //         value: "",
  //       },
  //     ],
  //   },
  // ]);
  const addNationalities = (e) => {
    // let newObj = {
    //   id: nationalities[nationalities.length - 1].id + 1,
    //   values: [
    //     {
    //       value: "",
    //     },
    //     {
    //       value: "",
    //     },
    //   ],
    // };

    setFormData((formData) => ({
      ...formData,
      nationalities: [
        ...(formData.nationalities || []), // Ensure previous nationalities are included if they exist
        { id: Date.now(), value: "" }, // New data entry
        // Add more data entries as needed
      ],
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
                <InlineDrop
                  title={"nationalities[" + index + "].country"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Other Country/Region of Origin (Nationality)"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                />
                <div className="mt-5 ">
                  {/* <div className="form-check form-switch mt-5">
                    <label
                      className=" sa-label mr-2"
                      htmlFor="checkbox-switch-7"
                    >
                      Do you hold a passport for the other country/region of
                      origin (nationality) above?
                    </label>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={() =>
                        props.handleCheckboxChange("hasPassportNumber" + index)
                      }
                      checked={
                        props.fieldVisibility["hasPassportNumber" + index]
                          ? true
                          : false
                      }
                    />
                  </div> */}

                  <InlineSwitch
                    isVisible={true}
                    title={"nationalities[" + index + "].hasPassportNumber"}
                    label=" Do you hold a passport for the other country/region of
            origin (nationality) above?"
                    handleCheckboxChange={props.handleCheckboxChange}
                    formData={formData}
                    fullWidth={false}
                    helpText=" "
                    inline={true}
                  />
                </div>

                <InlineInputText
                  title={"nationalities[" + index + "].passportNumber"}
                  helpText=""
                  register={props.register}
                  type="text"
                  errors={props.errors}
                  label=" Passport/Travel Document Number"
                  isVisible={
                    props.fieldVisibility?.nationalities[index]?.passportNumber
                  }
                  disabled={false}
                  handleCheckboxChange={props.handleCheckboxChange}
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
