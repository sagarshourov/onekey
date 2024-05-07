
import InlineInputChildText from "../elements/InlineInputChildText";
import { Lucide } from "@/base-components";

import InlineDropChid from "../elements/InlineDropChid";
import dat from "../elements/data.json";

const Travelers = (props) => {
  const { formData, setFormData, isVisible, errors, register } = props;
  // console.log("key", props?.check);
  const addTravelers = (e) => {
    const currentNationalities = formData["travelers"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        lastName: "",
        firstName: "",
        relation:""
      },
    ];
    setFormData("travelers", addLanguages, { shouldValidate: true });
  };

  const deleteTravelers = (e) => {
    if (formData.travelers && formData.travelers.length > 1) {
      const newNationalities = formData.travelers.filter((travels) => {
        // Condition to filter out values
        return travels.id !== e; // Replace idToDelete with the ID you want to delete
      });

      setFormData("travelers", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.travelers &&
            formData.travelers.map((data, index) => (
              <div className="flex flex-row gap-6" key={index}>
                <div className="basis-11/12 ">
                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"lastName"}
                    helpText="   "
                    register={register}
                    type="text"
                    errors={errors}
                    label="What are the family name(s) of the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    index={index}
                    parent={"travelers"}
                  />

                  <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={"firstName"}
                    helpText="   "
                    register={register}
                    type="text"
                    errors={errors}
                    label=" What are the first (given) name(s) of the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    formData={formData}
                    index={index}
                    parent={"travelers"}
                  />

                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    title={"relation"}
                    helpText=""
                    register={register}
                    errors={errors}
                    label="What is your relationship with the person traveling with you?"
                    isVisible={true}
                    disabled={false}
                    data={dat.relation}
                    inline={true}
                    index={index}
                    parent={"travelers"}
                  />
                </div>
                {formData.travelers.length === index + 1 ? (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addTravelers}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteTravelers(data.id)}
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

export default Travelers;
