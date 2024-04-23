


import InlineInputChildText from "../elements/InlineInputChildText";

const USDriverLicenses = (props) => {
  const {
    isVisible,
    label,
    register,
    formData,
    handleCheckboxChange,
    setFormData,
    errors,
  } = props;
  // console.log("key", props?.check);

  const addLicenses = (e) => {
    const currentNationalities = formData["USDriverLicenses"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        licenseId: "",
        state: "",
        licenseId_checkbox: false,
      },
    ];
    setFormData("USDriverLicenses", addLanguages, { shouldValidate: true });
  };

  const deleteLicenses = (e) => {
    if (formData.USDriverLicenses && formData.USDriverLicenses.length > 1) {
      const newNationalities = formData.USDriverLicenses.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );

      setFormData("USDriverLicenses", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.USDriverLicenses &&
            formData.USDriverLicenses.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Previous US licence #{index + 1}
                </h3>

                <InlineInputChildText
                  setFormData={setFormData}
                  required={true}
                  title={"licenseId"}
                  helpText="  "
                  register={register}
                  type="text"
                  errors={errors}
                  isVisible={true}
                  disabled={formData.USDriverLicenses[index].licenseId_checkbox}
                  handleCheckboxChange={handleCheckboxChange}
                  formData={formData}
                  condition={true}
                  label="Driver's Licence Number"
                  checkLabel="Does not apply"
                  check="licenseId_checkbox"
                  parent="USDriverLicenses"
                  index={index}
                />
                {/* <InlineDropChid
                  title={`country`}
                  helpText=""
                  register={register}
                  errors={errors}
                  label="Other Country/Region of Origin (Nationality)"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                  formData={formData}
                  parent={"USDriverLicenses"}
                  index={index}
                /> */}

                <div className="flex gap-5">
                  {formData.USDriverLicenses.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addLicenses}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add previous US licence
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deleteLicenses(data.id)}
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

export default USDriverLicenses;
