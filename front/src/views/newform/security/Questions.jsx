
import InlineSwitch from "../elements/InlineSwitch";
import InputTextArea from "../elements/InputTextArea";
const Questions = (props) => {
  // console.log("key", props?.check);
  const {
    formData,
    setFormData,
    title,
    label,
    register,
    errors,
    handleCheckboxChange,
  } = props;
  return (
    <>
      <div className="">
        <InlineSwitch
          setFormData={setFormData}
          isVisible={true}
          fullWidth={true}
          formData={formData}
          title={title}
          handleCheckboxChange={handleCheckboxChange}
          label={label}
        />
        <InputTextArea
          isVisible={formData[title]}
          errors={errors}
          register={register}
          helpText=""
          label="Explain"
          title={title + "Explain"}
        />
      </div>
    </>
  );
};

export default Questions;
