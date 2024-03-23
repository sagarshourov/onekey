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
  const { errors, register, fieldVisibility, handleCheckboxChange } = props;
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
      />

      <InlineInputText
        title={"jobAddress.state"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" State/Province"
        isVisible={true}
        disabled={fieldVisibility["jobAddress.state_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress.state_checkbox"
        checkLabel="Does not apply"
      />
      <InlineInputText
        title={"jobAddress.zipCode"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        disabled={fieldVisibility["jobAddress.zipCode_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress.zipCode_checkbox"
        checkLabel="Does not apply"
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
      />

      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"jobAddress.country"}
        data={data.job_types}
        label="Country/Region"
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
        disabled={fieldVisibility["hasJobMonthlyIncome-checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="hasJobMonthlyIncome-checkbox"
        checkLabel="Monthly Income In Local Currency"
      />

      <InputTextArea
        title="jobDescribe"
        helpText=""
        register={props.register}
        errors={props.errors}
        label="Briefly describe your duties"
        isVisible={true}
        disabled={false}
      />

      <InlineSwitch
        isVisible={true}
        title="hasBeenPreviouslyEmployed"
        label=" Were you previously employed?"
        handleCheckboxChange={handleCheckboxChange}
      />

      <PreviousJob
        register={props.register}
        errors={props.errors}
        fieldVisibility={fieldVisibility}
        isVisible={fieldVisibility["hasBeenPreviouslyEmployed"]}
      />
      <InlineSwitch
        isVisible={true}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <Institution
        register={props.register}
        errors={props.errors}
        fieldVisibility={fieldVisibility}
        isVisible={fieldVisibility["hasAttendedEducationalInstitutions"]}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};

export default Education;
