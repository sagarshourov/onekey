
import { Lucide } from "@/base-components";

import dat from "../elements/data.json";
import InputTextArea from "../elements/InputTextArea";
import InlineDropChid from "../elements/InlineDropChid";
import InlineInputChildText from "../elements/InlineInputChildText";
const LostPassports = (props) => {
  const { handleCheckboxChange, register, formData, setFormData } = props;
  // console.log("key", props?.check);
  const addLostPassport = (e) => {
    const currentNationalities = formData["lostpassports"];
    const newNationalities = [
      ...currentNationalities,
      {
        id: Date.now(),
        passportNumber: "",
        passportIssueCountryInput: "",
        Explain: "",
        passportNumber_check: false,
      },
    ];
    setFormData("lostpassports", newNationalities, { shouldValidate: true });
  };

  const deletePassportss = (e) => {
    if (formData.lostpassports && formData.lostpassports.length > 1) {
      const newNationalities = formData.lostpassports.filter(
        (lostpassports) => {
          // Condition to filter out values
          return lostpassports.id !== e; // Replace idToDelete with the ID you want to delete
        }
      );

      setFormData("lostpassports", newNationalities, { shouldValidate: true });
    }
  };

  return (
    <>
      {props.isVisible && (
        <>
          {formData.lostpassports &&
            formData.lostpassports.map((data, index) => (
              <div key={index}>
                <InlineInputChildText
                  setFormData={setFormData}
                  required={true}
                  title={`passportNumber`}
                  helpText=""
                  register={props.register}
                  type="text"
                  errors={props.errors}
                  label=" Passport/Travel Document Number"
                  isVisible={true}
                  disabled={
                    props.formData.lostpassports[index]["passportNumber_check"]
                  }
                  condition={true}
                  handleCheckboxChange={handleCheckboxChange}
                  check={`passportNumber_check`}
                  formData={formData}
                  parent={"lostpassports"}
                  index={index}
                />

                <InlineDropChid
                  title={`country`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Issuing country/authority of the passport/travel document"
                  isVisible={true}
                  disabled={false}
                  data={dat.countries}
                  inline={true}
                  formData={formData}
                  parent={"lostpassports"}
                  index={index}
                />

                <InputTextArea
                  title={`lostpassports.${index}.Explain`}
                  helpText=""
                  register={props.register}
                  errors={props.errors}
                  label="Explain"
                  isVisible={true}
                  disabled={false}
                  formData={formData}
                />
                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    onClick={() => deletePassportss(data.id)}
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
              onClick={addLostPassport}
              className="btn bg-gray-300 btn-rounded p-2 addLostPassport"
            >
              <Lucide icon="Plus" className="w-10 h-10" />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default LostPassports;
