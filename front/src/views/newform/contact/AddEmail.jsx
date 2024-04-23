
import InlineInputChildText from "../elements/InlineInputChildText";
import { Lucide } from "@/base-components";

const AddEmail = (props) => {
  const {
    formData,
    isVisible,
    handleCheckboxChange,
    setFormData,
  } = props;
  // console.log("key", props?.check);

  const addEmail = () => {
    const currentNationalities = formData["additionalEmails"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        email: "",
      },
    ];
    setFormData("additionalEmails", addLanguages, { shouldValidate: true });
  };

  const deleteEmail = (e) => {
    if (formData.additionalEmails && formData.additionalEmails.length > 1) {
      const newNationalities = formData.additionalEmails.filter(
        (nationalities) => {
          return nationalities.id !== e;
        }
      );

      setFormData("additionalEmails", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalEmails &&
            formData.additionalEmails.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`email`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Additional Email"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"additionalEmails"}
                    index={index}
                  />
                </div>
                {formData.additionalEmails.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addEmail}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteEmail(data.id)}
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

export default AddEmail;
