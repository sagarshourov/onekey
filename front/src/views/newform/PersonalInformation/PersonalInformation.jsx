import { useState } from "react";

import InlineInputText from "../elements/InlineInputText";
import Nationalities from "./Nationalities";
import Residents from "./Residents";
import InlineSwitch from "../elements/InlineSwitch";

const PersonalInformation = (props) => {
  const [date, setDate] = useState("");
  const { handleCheckboxChange, formData, setFormData } = props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Personal Information </h2>

      <hr className="my-5 sa-border-primary" />

      <div className="mt-5 ">
        <InlineSwitch
          setFormData={setFormData}
          isVisible={true}
          title="hasMultipleNationalities"
          label="Do you currently hold or have you ever held any nationality other
            than the one indicated above?"
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          fullWidth={false}
          helpText=" "
        />
      </div>

      <Nationalities
        register={props.register}
        errors={props.errors}
        isVisible={formData.hasMultipleNationalities}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        setFormData={setFormData}
      />
      <InlineSwitch
        setFormData={setFormData}
        isVisible={true}
        title="hasMultiplePermanentResidents"
        label="Are you a permanent resident of a country/region other than your country/region of origin (nationality) as indicated above?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
      />

      <Residents
        register={props.register}
        errors={props.errors}
        isVisible={formData.hasMultiplePermanentResidents}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        setFormData={setFormData}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"nationalId"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" National Identification Number"
        isVisible={true}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="nationalId_check"
        disabled={formData.nationalId_check}
        formData={formData}
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"USSocialSecurityAreaNumber"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" U.S. Social Security area number"
        isVisible={true}
        disabled={formData.USSocialSecurityAreaNumber_check}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="USSocialSecurityAreaNumber_check"
        formData={formData}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"USTaxpayerIdNumber"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label="U.S. Taxpayer ID Number"
        isVisible={true}
        disabled={formData.USTaxpayerIdNumber_check}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="USTaxpayerIdNumber_check"
        formData={formData}
      />
    </>
  );
};

export default PersonalInformation;
