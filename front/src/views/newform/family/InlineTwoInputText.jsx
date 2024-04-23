

import InputText from "../elements/InputText";

const InlineTwoInputText = (props) => {
  // console.log("key", props?.check);
  const {
    label,
    title,
    isVisible,
    handleCheckboxChange,
    errors,
    firstFieldLbl,
    secFieldLbl,
    register,
    formData,
    setFormData
  } = props;
  return (
    <>
      {isVisible && (
        <div className="mt-5 gap-5 flex-none lg:flex lg:flex-row">
          <label
            htmlFor="regular-form-3"
            className="form-label  basis-4/12 sa-label"
          >
            {label}
            <span className="text-danger pl-1">*</span>
          </label>
          <div className="basis-8/12 flex-none lg:gap-5 lg:flex lg:flex-row">
            <div className="basis-6/12 ">
              <InputText
                refs={title + ".firstName"}
                name={title + ".firstName"}
                required={true}
                helpText="  "
                register={register}
                type="text"
                errors={errors}
                label={firstFieldLbl}
                isVisible={true}
                disabled={formData[title + "_firstname_checkbox"]}
                checkLabel="Does not apply"
                condition={true}
                handleCheckboxChange={handleCheckboxChange}
                formData={formData}
                check={title + "_firstname_checkbox"}
                setFormData={setFormData}
              />
            </div>
            <div className="basis-6/12">
              <InputText
                refs={title + ".lastName"}
                name={title + ".firstName"}
                required={true}
                helpText="  "
                register={register}
                type="text"
                errors={errors}
                label={secFieldLbl}
                isVisible={true}
                disabled={formData[title + "_lastname_checkbox"]}
                checkLabel="Does not apply"
                condition={true}
                handleCheckboxChange={handleCheckboxChange}
                formData={formData}
                check={title + "_lastname_checkbox"}
                
                setFormData={setFormData}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InlineTwoInputText;
