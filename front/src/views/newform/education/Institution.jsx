

import dat from "../elements/data.json";
import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";
import InlineInputChildDate from "../elements/InlineInputChildDate";
const Institution = (props) => {
  // console.log("key", props?.check);
  const { isVisible, formData, setFormData } = props;

  const addPrevJob = (e) => {
    const currentNationalities = formData["educationalInstitution"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        name: "",
      },
    ];
    setFormData("educationalInstitution", addLanguages, {
      shouldValidate: true,
    });
    const updatedOptions = [...option];
    updatedOptions.push({ specify: "", mainPurpose: "" });
    setOption(updatedOptions);
  };

  const deletePrevJob = (e) => {
    if (
      formData.educationalInstitution &&
      formData.educationalInstitution.length > 1
    ) {
      const newNationalities = formData.educationalInstitution.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );
      setFormData("educationalInstitution", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.educationalInstitution &&
            formData.educationalInstitution.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200" key={index}>
                <h3 className="text-xl font-bold">
                  {" "}
                  Previous Institution #{index + 1}{" "}
                </h3>
                <div className="mt-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Name of the Institution"
                    isVisible={true}
                    disabled={false}
                    handleCheckboxChange={props.handleCheckboxChange}
                    formData={formData}
                    parent="educationalInstitution"
                    index={index}
                    title={"name"}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 1)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    parent="educationalInstitution"
                    index={index}
                    title={"streetAddress1"}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 2)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    parent="educationalInstitution"
                    index={index}
                    title={"streetAddress2"}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" City"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    parent="educationalInstitution"
                    index={index}
                    title={"city"}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" State/Province"
                    isVisible={true}
                    disabled={
                      formData.educationalInstitution[index].state_checkbox
                    }
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    checkLabel="Does not apply"
                    formData={formData}
                    check="state_checkbox"
                    parent="educationalInstitution"
                    index={index}
                    title={"state"}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Postal Zone/Zip Code"
                    isVisible={true}
                    disabled={
                      formData.educationalInstitution[index].zipCode_checkbox
                    }
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    checkLabel="Does not apply"
                    formData={formData}
                    check="zipCode_checkbox"
                    parent="educationalInstitution"
                    index={index}
                    title={"zipCode"}
                  />

                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    data={dat.countries}
                    label="Country/Region"
                    inline={true}
                    parent="educationalInstitution"
                    index={index}
                    title={"country"}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Course of Study"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    parent="educationalInstitution"
                    index={index}
                    title={"jobPhoneNumber"}
                  />

                  <InlineInputChildDate
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Date of Attendance From"
                    isVisible={true}
                    disabled={false}
                    inline={true}
                    parent="educationalInstitution"
                    index={index}
                    title={"startDate"}
                  />
                  <InlineInputChildDate
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Date of Attendance To"
                    isVisible={true}
                    disabled={false}
                    inline={true}
                    parent="educationalInstitution"
                    index={index}
                    title={"endDate"}
                  />
                </div>
                <div className="flex gap-5">
                  {formData.educationalInstitution.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPrevJob}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add additional Education details
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deletePrevJob(data.id)}
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

export default Institution;
