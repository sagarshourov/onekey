
import { Lucide } from "@/base-components";

import InlineDropChid from "../elements/InlineDropChid";
import dat from "../elements/data.json";
const AddCountry = (props) => {
  const { setFormData, register, errors, formData, isVisible } = props;

  const addCountry = (e) => {
    const currentNationalities = formData["travelCountries"];
    const addLanguages = [
      ...currentNationalities,
      {
        id: Date.now(),
        country: "",
      },
    ];
    setFormData("travelCountries", addLanguages, { shouldValidate: true });
    // const updatedOptions = [...option];
    // updatedOptions.push({ specify: "", mainPurpose: "" });
    // setOption(updatedOptions);
  };

  const deleteCountry = (e) => {
    if (formData.travelCountries && formData.travelCountries.length > 1) {
      const newNationalities = formData.travelCountries.filter(
        (nationalities) => {
          // Condition to filter out values
          return nationalities.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );
      setFormData("travelCountries", newNationalities, {
        shouldValidate: true,
      });
    }
  };

  return (
    <>
      {isVisible && (
        <>
          {formData.travelCountries &&
            formData.travelCountries.map((data, index) => (
              <div className="flex flex-row gap-5" key={index}>
                <div className="basis-11/12 gap-5">
                  {/* <InlineInputChildText
                    setFormData={setFormData}
                    required={true}
                    title={`country`}
                    helpText=""
                    register={register}
                    errors={errors}
                    label="Country/Region"
                    isVisible={true}
                    disabled={false}
                    data={dat.countries}
                    inline={true}
                    formData={formData}
                    parent={"travelCountries"}
                    index={index}
                  /> */}

                  <InlineDropChid
                    formData={formData}
                    setFormData={setFormData}
                    isVisible={true}
                    register={props.register}
                    errors={props.errors}
                    title={"jobAddress.country"}
                    data={dat.countries}
                    label="Country/Region"
                    inline={true}
                    condition={false}
                    parent={"travelCountries"}
                    index={index}
                  />
                </div>
                {formData.travelCountries.length === index + 1 ? (
                  <div className="basis-1/12  grid  place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={addCountry}
                      className="btn bg-gray-300 btn-rounded p-2  hover:bg-primary hover:text-white "
                    >
                      <Lucide icon="Plus" className="w-7 h-7" />
                    </button>
                  </div>
                ) : (
                  <div className="basis-1/12  grid   place-items-center  mt-5">
                    <button
                      type="button"
                      onClick={() => deleteCountry(data.id)}
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

export default AddCountry;
