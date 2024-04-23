

import InputTextArea from "../elements/InputTextArea";

import InlineInputChildDate from "../elements/InlineInputChildDate";
import dat from "../elements/data.json";

import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";

const PreviousJob = (props) => {
  // console.log("key", props?.check);
  const { isVisible, setFormData, formData } = props;

  const addPrevJob = (e) => {
    const currentNationalities = formData["previousJobs"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        mainPurpose: "",
        specify: "",
      },
    ];
    setFormData("previousJobs", addLanguages, { shouldValidate: true });
    const updatedOptions = [...option];
    updatedOptions.push({ specify: "", mainPurpose: "" });
    setOption(updatedOptions);
  };

  const deletePrevJob = (e) => {
    if (formData.previousJobs && formData.previousJobs.length > 1) {
      const newNationalities = formData.previousJobs.filter((nationalities) => {
        // Condition to filter out values
        return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
      });
      setFormData("previousJobs", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.previousJobs &&
            formData.previousJobs.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200" key={index}>
                <h3 className="text-xl font-bold">
                  {" "}
                  Previous job #{index + 1}{" "}
                </h3>

                <div className="mt-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"employer"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Employer name"
                    isVisible={true}
                    disabled={false}
                    handleCheckboxChange={props.handleCheckboxChange}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"streetAddress"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 1)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"streetAddress2"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Street address (Line 2)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"city"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" City"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" State/Province"
                    isVisible={true}
                    disabled={formData.previousJobs[index].state_checkbox}
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    check="state_checkbox"
                    checkLabel="Does not apply"
                    formData={formData}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"zipCode"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Postal Zone/Zip Code"
                    isVisible={true}
                    disabled={formData.previousJobs[index].zipCode_checkbox}
                    condition={true}
                    handleCheckboxChange={props.handleCheckboxChange}
                    check="zipCode_checkbox"
                    checkLabel="Does not apply"
                    formData={formData}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"country"}
                    data={dat.countries}
                    label="Country/Region"
                    inline={true}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"jobPhoneNumber"}
                    helpText="   "
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Telephone number"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"title"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label=" Job title"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"jobAddress.state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Supervisor's Family Name(s)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"state"}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label="Supervisor's First (Given) Name(s)"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InlineInputChildDate
                    title={"jobStartDate"}
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Employment Date From"
                    isVisible={true}
                    disabled={false}
                    inline={true}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                  <InlineInputChildDate
                    title={"jobStartDate"}
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Employment Date To"
                    isVisible={true}
                    inline={true}
                    disabled={false}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />

                  <InputTextArea
                    title="jobDescribe"
                    helpText=""
                    register={props.register}
                    errors={props.errors}
                    label="Briefly describe your duties"
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    parent={"previousJobs"}
                    index={index}
                  />
                </div>
                <div className="flex gap-5">
                  {formData.previousJobs.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPrevJob}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add additional job details
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

export default PreviousJob;
