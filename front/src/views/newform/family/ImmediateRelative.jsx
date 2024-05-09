

import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";

const ImmediateRelative = (props) => {
  // console.log("key", props?.check);

  const { formData, setFormData } = props;

  const addRelatives = (e) => {
    const currentNationalities = formData["immediateRelatives"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        mainPurpose: "",
        specify: "",
      },
    ];
    setFormData("immediateRelatives", addLanguages, { shouldValidate: true });

    const updatedOptions = [...option];
    updatedOptions.push({ specify: "", mainPurpose: "" });
    setOption(updatedOptions);
  };

  const deleteRelatives = (e) => {
    if (formData.immediateRelatives && formData.immediateRelatives.length > 1) {
      const newNationalities = formData.immediateRelatives.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );

      setFormData("immediateRelatives", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.immediateRelatives &&
            formData.immediateRelatives.map((data, index) => (
              <div key={index} className="mt-5 border p-5  border-blue-200">
                <h3 className="text-xl font-bold">
                  Immediate relative #{index + 1}{" "}
                </h3>

                <div className="mt-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"firstName"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" First (Given) Name(s)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent="immediateRelatives"
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"lastName"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Family Name(s)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent="immediateRelatives"
                    index={index}
                  />

                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"relation"}
                    data={[
                      { label: "SPOUSE", value: "SPOUSE" },
                      { label: "FIANCÉ/FIANCÉE", value: "FIANCE_FIANCEE" },
                      { label: "CHILD", value: "CHILD" },
                      { label: "SIBLING", value: "SIBLING" },
                    ]}
                    label="Relationship to You"
                    inline={true}
                    condition={false}
                    parent="immediateRelatives"
                    index={index}
                  />
                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"statusInput"}
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
                    condition={false}
                    parent="immediateRelatives"
                    index={index}
                  />
                </div>

                <div className="flex gap-5">
                  {formData.immediateRelatives.length == index + 1 && (
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
