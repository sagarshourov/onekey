
import InlineInputChildText from "../elements/InlineInputChildText";

import InlineInputChildDate from "../elements/InlineInputChildDate";

const PreviousVisit = (props) => {
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

  const addPreviousVisit = (e) => {
    const currentNationalities = formData["previousVisit"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        arrivalDate: "",
        stayLengthValue: "",
        stayLengthType: "",
      },
    ];
    setFormData("previousVisit", addLanguages, { shouldValidate: true });
  };

  const deletePreviousVisit = (e) => {
    if (formData.previousVisit && formData.previousVisit.length > 1) {
      const newNationalities = formData.previousVisit.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );

      setFormData("previousVisit", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.previousVisit &&
            formData.previousVisit.map((data, index) => (
              <div className="mt-5 border p-5  border-blue-200 " key={index}>
                <h3 className="text-xl font-bold">
                  Previous visit #{index + 1}
                </h3>
                <InlineInputChildDate
                  title={"arrivalDate"}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Date Arrived"
                  isVisible={true}
                  disabled={false}
                  inline={true}
                  parent="previousVisit"
                  index={index}
                />
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
                      <InlineInputChildText
                        setFormData={setFormData}
                        refs={"fatherInfo_firstName"}
                        name={"firstName"}
                        required={true}
                        title={"firstName"}
                        helpText="  "
                        register={register}
                        type="text"
                        errors={errors}
                        isVisible={true}
                        disabled={false}
                        condition={false}
                        handleCheckboxChange={handleCheckboxChange}
                        formData={formData}
                        parent={"fatherInfo"}
                        index={index}
                      />
                    </div>
                    <div className="basis-6/12">
                      <select
                        {...register(`fatherInfo.${index}.stayLengthType`)}
                        className="form-control "
                        name={`fatherInfo.${index}.stayLengthType`}
                        defaultValue={
                          formData[index] ? formData[index]?.stayLengthType : ""
                        }
                      >
                        <option value="yearly">Years</option>
                        <option value="month">Months</option>
                        <option value="weeks">Weeks</option>
                        <option value="days">Days</option>
                        <option value="24_hours">Less than 24 hours</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex gap-5">
                  {formData.previousVisit.length == index + 1 && (
                    <button
                      type="button"
                      onClick={addPreviousVisit}
                      className="btn bg-gray-300 btn-rounded p-2 px-5"
                    >
                      + Add previous visit
                    </button>
                  )}
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => deletePreviousVisit(data.id)}
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

export default PreviousVisit;
