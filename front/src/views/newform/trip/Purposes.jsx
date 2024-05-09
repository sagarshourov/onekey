import { useState } from "react";


import InlineDropChidCondition from "../elements/InlineDropChidCondition";

import InlineDropChid from "../elements/InlineDropChid";


import reasonsForTravelData from "./reasonsForTravel.json";
const Purposes = (props) => {
  const { formData, setFormData } = props;

  const [option, setOption] = useState(formData["purposes"]);
  // console.log("key", props?.check);



  const addPurposes = (e) => {
    const oldPurposes = formData["purposes"];
    const addPurposes = [
      ...oldPurposes,
      {
        id: Date.now(),
        mainPurpose: "",
        specify: "",
      },
    ];
    setFormData("purposes", addPurposes, { shouldValidate: true });

    const updatedOptions = [...option];
    updatedOptions.push({ id: Date.now(), specify: "", mainPurpose: "" });
    setOption(updatedOptions);
  };

  const deletePurposes = (e) => {
    if (formData.purposes && formData.purposes.length > 1) {
      const newNationalities = formData.purposes.filter((nationalities) => {
        // Condition to filter out values
        return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
      });

      setFormData("purposes", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  const handelSelect = (e, parent, index, name) => {
    console.log("u", formData);
    const updatedOptions = [...option];
    updatedOptions[index][name] = e.target.value;
    setOption(updatedOptions);

    // setFormData("purposes", newNationalities, {
    //     shouldValidate: true,
    //   });
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.purposes &&
            formData.purposes.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Purpose of the trip to the US #{index + 1}
                </h3>
                <InlineDropChidCondition
                  formData={formData}
                  setFormData={setFormData}
                  title={"mainPurpose"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Purpose of the trip to the US"
                  isVisible={true}
                  disabled={false}
                  data={reasonsForTravelData.mainPurpose}
                  inline={true}
                  index={index}
                  parent={"purposes"}
                  handelSelect={handelSelect}
                />

                <InlineDropChid
                  formData={formData}
                  setFormData={setFormData}
                  title={"specify"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Specify"
                  isVisible={true}
                  disabled={false}
                  data={reasonsForTravelData.specify.filter(
                    (specify) =>
                      option[index] &&
                      specify.parent == option[index].mainPurpose
                  )}
                  inline={true}
                  index={index}
                  parent={"purposes"}
                />
                <div className="flex gap-5">
                  {formData.purposes.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPurposes}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      Add trip purpose
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deletePurposes(data.id)}
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

export default Purposes;
