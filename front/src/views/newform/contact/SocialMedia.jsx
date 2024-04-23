
import { Lucide } from "@/base-components";

import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";
const SocialMedia = (props) => {
  const {
    formData,
    isVisible,
    SocialMedia,
    register,
    errors,
    handleCheckboxChange,
    setFormData,
  } = props;
  // console.log("key", props?.check);

  const addSocial = (e) => {
    const currentNationalities = formData["socialsMedia"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        platform: "",
        username: "",
      },
    ];
    setFormData("socialsMedia", addLanguages, { shouldValidate: true });
  };

  const deleteSocial = (e) => {
    if (formData.socialsMedia && formData.socialsMedia.length > 1) {
      const newNationalities = formData.socialsMedia.filter((nationalities) => {
        return nationalities.id !== e;
      });

      setFormData("socialsMedia", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.socialsMedia &&
            formData.socialsMedia.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 ">
                  <InlineDropChid
                    setFormData={setFormData}
                    required={true}
                    title={`platform`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Social Media Platform"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"socialsMedia"}
                    index={index}
                    data={SocialMedia}
                    inline={true}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`username`}
                    helpText=""
                    register={props.register}
                    type="text"
                    errors={props.errors}
                    label={index + 1 + ". Social Media Handle"}
                    isVisible={true}
                    disabled={false}
                    condition={false}
                    handleCheckboxChange={handleCheckboxChange}
                    formData={formData}
                    parent={"socialsMedia"}
                    index={index}
                  />
                </div>
                {formData.socialsMedia.length === index + 1 ? (
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

export default SocialMedia;
