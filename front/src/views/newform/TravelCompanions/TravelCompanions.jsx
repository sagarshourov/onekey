import { useState } from "react";
import InlineSwitch from "../elements/InlineSwitch";
import Travelers from "./Travelers";
const TravelCompanions = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, setFormData, formData, handleCheckboxChange } =
    props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Travel Companions </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineSwitch
        setFormData={setFormData}
        isVisible={true}
        title="travelingWithOrganization"
        label="Are you traveling with anyone else?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      {/* <InlineInputText
        setFormData={setFormData}
        isVisible={formData.travelingWithOrganization}
        required={true}
        title={"groupName"}
        refs={"groupName"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        condition={false}
        label="Group name"
      /> */}

      <Travelers
        isVisible={formData.travelingWithOrganization}
        formData={formData}
        setFormData={setFormData}
        register={register}
        errors={errors}
      />
    </>
  );
};

export default TravelCompanions;
