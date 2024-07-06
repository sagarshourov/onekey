import { Lucide } from "@/base-components";
import InlineDropChid from "../elements/InlineDropChid";
import { filter } from "lodash";
import dat from "../elements/data.json";
function removeArr(array, index) {
  return filter(array, (_items, key) => {
    return _items.id !== index;
  });
}

const Residents = (props) => {
  const { formData, setFormData } = props;

  // console.log("formdata", formData);

  const addNationalities = (e) => {
    const currentNationalities = formData["residents"];
    const newNationalities = [
      ...currentNationalities,
      {
        id: Date.now(),
        country: "",
        passportNumber: "",
        hasPassportNumber: false,
      },
    ];
    setFormData("residents", newNationalities, { shouldValidate: true });
  };

  const deleteNationalities = (e) => {
    if (formData.residents && formData.residents.length > 1) {
      const newNationalities = formData.residents.filter((resident) => {
        // Condition to filter out values
        return resident.id !== e; // Replace idToDelete with the ID you want to delete
      });

      setFormData("residents", newNationalities, { shouldValidate: true });
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.residents &&
            formData.residents.map((data, index) => (
              <div key={index} className="border   border-blue-200  p-5 my-5">
                <h3 className="text-xl font-blod">
                  {" "}
                  Other Permanent Resident # {index + 1}
                </h3>
                

                <InlineDropChid
                  title={`country`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Other Country/Region of Origin (Nationality)"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                  formData={formData}
                  parent={"residents"}
                  index={index}
                />

                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deleteNationalities(data.id)}
                    className="btn bg-gray-300 btn-rounded p-1"
                  >
                    <Lucide icon="Minus" className="w-7 h-7" />
                  </button>
                </div>
              </div>
            ))}

          <div className="flex justify-end mt-5">
            <button
              type="button"
              onClick={addNationalities}
              className="btn bg-gray-300 btn-rounded p-2"
            >
              <Lucide icon="Plus" className="w-10 h-10" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Residents;
