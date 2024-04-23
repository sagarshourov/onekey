
import InlineInputChildText from "../elements/InlineInputChildText";
import { Lucide } from "@/base-components";

const AdditionalSocial = (props) => {
  const {
    formData,
    isVisible,
    handleCheckboxChange,
    setFormData,
  } = props;
  // console.log("key", props?.check);

  const addSocial = () => {
    const currentNationalities = formData["additionalSocials"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        platform: "",
        username: "",
      },
    ];
    setFormData("additionalSocials", addLanguages, { shouldValidate: true });
  };

  const deleteSocial = (e) => {
    if (formData.additionalSocials && formData.additionalSocials.length > 1) {
      const newNationalities = formData.additionalSocials.filter(
        (nationalities) => {
          return nationalities.id !== e;
        }
      );

      setFormData("additionalSocials", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.additionalSocials &&
            formData.additionalSocials.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 ">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`platform`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Additional Social Media Platform"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"additionalSocials"}
                    index={index}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`username`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Additional Social Media Handle"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"additionalSocials"}
                    index={index}
                  />
                </div>
                {formData.additionalSocials.length === index + 1 ? (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addSocial}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteSocial(data.id)}
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

export default AdditionalSocial;
