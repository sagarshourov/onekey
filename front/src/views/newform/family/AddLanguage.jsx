
import InlineInputChildText from "../elements/InlineInputChildText";
import { Lucide } from "@/base-components";

const AddLanguage = (props) => {
  const {
    formData,
    isVisible,
    register,
    errors,
    handleCheckboxChange,
    setFormData,
  } = props;
  // console.log("key", props?.check);

  const addLang = (e) => {
    const currentNationalities = formData["additionalLanguage"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        otherSpeakingLanguages: "",
      },
    ];
    setFormData("additionalLanguage", addLanguages, { shouldValidate: true });
  };

  const deleteLang = (e) => {
    if (formData.additionalLanguage && formData.additionalLanguage.length > 1) {
      const newNationalities = formData.additionalLanguage.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );

      setFormData("additionalLanguage", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalLanguage &&
            formData.additionalLanguage.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`otherSpeakingLanguages`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Additional Language"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"additionalLanguage"}
                    index={index}
                  />
                </div>
                {formData.additionalLanguage.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addLang}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteLang(data.id)}
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

export default AddLanguage;
