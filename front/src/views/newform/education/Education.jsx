import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";

import data from "./data.json";

import dat from "../elements/data.json"
import InlineInputDate from "../elements/InlineInputDate";
import InputTextArea from "../elements/InputTextArea";
import PreviousJob from "./PreviousJob";
import InlineSwitch from "../elements/InlineSwitch";
import Institution from "./Institution";

const Education = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, formData, setFormData, handleCheckboxChange } =
    props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Employment / Education </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineDrop
        formData={formData}
        setFormData={setFormData}
        isVisible={true}
        register={register}
        errors={errors}
        title={"jobTypeInput"}
        data={data.job_types}
        label="Primary Occupation"
        inline={true}
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobEmployer"}
        helpText="   "
        register={register}
        type="text"
        errors={errors}
        label=" Present Employer or School Name"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobAddress.streetAddress"}
        helpText="   "
        register={register}
        type="text"
        errors={errors}
        label=" Street address (Line 1)"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        setFormData={setFormData}
        required={false}
        title={"jobAddress.streetAddress2"}
        helpText="   "
        register={register}
        type="text"
        errors={errors}
        label=" Street address (Line 2)"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobAddress.city"}
        helpText="   "
        register={register}
        type="text"
        errors={errors}
        label=" City"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobAddress.state"}
        helpText=""
        register={register}
        type="text"
        errors={errors}
        label=" State/Province"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={formData["jobAddress_state_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress_state_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobAddress.zipCode"}
        helpText=""
        register={register}
        type="text"
        errors={errors}
        label=" Postal Zone/Zip Code"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={formData["jobAddress_zipCode_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="jobAddress_zipCode_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobPhoneNumber"}
        helpText="   "
        register={register}
        type="text"
        errors={errors}
        label=" Telephone number"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />

      <InlineDrop
        formData={formData}
        setFormData={setFormData}
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        register={register}
        errors={errors}
        title={"jobAddress.country"}
        data={dat.countries}
        label="Country/Region"
        inline={true}
      />

      <InlineInputDate
        title={"jobStartDate"}
        helpText=""
        register={register}
        errors={errors}
        label="Start Date"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        inline={true}
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"jobMonthlyIncome"}
        helpText=""
        register={register}
        type="text"
        errors={errors}
        label="Monthly Income In Local Currency"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={formData["hasJobMonthlyIncome_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="hasJobMonthlyIncome_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />

      <InputTextArea
        title="jobDescribe"
        helpText=""
        register={register}
        errors={errors}
        label="Briefly describe your duties"
        isVisible={formData.jobTypeInput !== 'NOT_EMPLOYED'}
        disabled={false}
        formData={formData}
      />

      <InlineSwitch
        setFormData={setFormData}
        isVisible={true}
        title="hasBeenPreviouslyEmployed"
        label=" Were you previously employed?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />

      <PreviousJob
        register={register}
        errors={errors}
        isVisible={formData.hasBeenPreviouslyEmployed}
        formData={formData}
        setFormData={setFormData}
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineSwitch
        setFormData={setFormData}
        isVisible={true}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />
      <Institution
        register={register}
        errors={errors}
        isVisible={formData["hasAttendedEducationalInstitutions"]}
        title="hasAttendedEducationalInstitutions"
        label=" Have you attended any educational institutions at a secondary level or above?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        setFormData={setFormData}
      />
    </>
  );
};

export default Education;
