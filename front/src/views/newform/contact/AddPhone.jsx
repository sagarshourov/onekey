
import { Lucide } from "@/base-components";

import InlineInputChildText from "../elements/InlineInputChildText";
const AddPhone = (props) => {
  const {
    formData,
    isVisible,
    register,
    errors,
    handleCheckboxChange,
    setFormData,
  } = props;
  // console.log("key", props?.check);

  const addPhone = (e) => {
    const currentNationalities = formData["additionalPhones"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        number: "",
      },
    ];
    setFormData("additionalPhones", addLanguages, { shouldValidate: true });
  };

  const deletePhone = (e) => {
    if (formData.additionalPhones && formData.additionalPhones.length > 1) {
      const newNationalities = formData.additionalPhones.filter(
        (nationalities) => {
          return nationalities.id !== e;
        }
      );

      setFormData("additionalPhones", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalPhones &&
            formData.additionalPhones.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`phoneNumber`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Additional Phone Number"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"additionalPhones"}
                    index={index}
                  />
                </div>
                {formData.additionalPhones.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addPhone}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deletePhone(data.id)}
                      className="btn bg-gray-300 btn-rounded p-2 hover:bg-danger hover:text-white"
                    >
                      <Lucide icon="X" className="w-7 h-7" />
                    </button>
                  </div>
                )}
              </div>
            ))}
        </>
      )}
    </>
  );
};

export default AddPhone;
