import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import data from "./data.json";
import InlineInputDate from "../elements/InlineInputDate";
import InputTextArea from "../elements/InputTextArea";
import PreviousJob from "./previousJob";
import InlineSwitch from "../elements/InlineSwitch";
import Institution from "./Institution";

const Education = (props) => {
  const [date, setDate] = useState("");
  const {
    errors,
    register,
    formData,
    setFormData,
    fieldVisibility,
    handleCheckboxChange,
  } = props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Employment / Education </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"jobTypeInput"}
        data={data.job_types}
        label="Primary Occupation"
        inline={true}
      />
      <InlineInputText
        title={"jobEmployer"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Present Employer or School Name"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        title={"jobAddress.streetAddress"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 1)"
        isVisible={true}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        title={"jobAddress.streetAddress2"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 2)"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        title={"jobAddress.city"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" City"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        title={"jobAddress.state"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" State/Province"
        isVisible={true}
        disabled={formData["jobAddress.state_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress.state_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />
      <InlineInputText
        title={"jobAddress.zipCode"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        disabled={formData["jobAddress.zipCode_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress.zipCode_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />
      <InlineInputText
        title={"jobPhoneNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Telephone number"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"jobAddress.country"}
        data={data.job_types}
        label="Country/Region"
        inline={true}
      />

      <InlineInputDate
        title={"jobStartDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="Start Date"
        isVisible={true}
        disabled={false}
        inline={true}
      />

      <InlineInputText
        title={"jobMonthlyIncome"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        disabled={formData["hasJobMonthlyIncome-checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="hasJobMonthlyIncome-checkbox"
        checkLabel="Monthly Income In Local Currency"
        formData={formData}
      />

      <InputTextArea
        title="jobDescribe"
        helpText=""
        register={props.register}
        errors={props.errors}
        label="Briefly describe your duties"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineSwitch
        isVisible={true}
        title="hasBeenPreviouslyEmployed"
        label=" Were you previously employed?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />

      <PreviousJob
        register={props.register}
        errors={props.errors}
        fieldVisibility={formData}
        isVisible={formData["hasBeenPreviouslyEmployed"]}
        formData={formData}
      />
      <InlineSwitch
        isVisible={true}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        
      />
      <Institution
        register={props.register}
        errors={props.errors}
        fieldVisibility={formData}
        isVisible={formData["hasAttendedEducationalInstitutions"]}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />
    </>
  );
};

export default Education;
