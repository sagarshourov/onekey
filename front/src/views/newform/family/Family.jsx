import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";

import InlineChildSwitch from "../elements/InlineChildSwitch";

import InlineTwoInputText from "./InlineTwoInputText";
import InlineInputDate from "../elements/InlineInputDate";
import ImmediateRelative from "./ImmediateRelative";
import data from "../elements/data.json";
const Family = (props) => {
  const [date, setDate] = useState("");
  const {
    errors,
    register,
    setFormData,
    formData,
    fieldVisibility,
    handleCheckboxChange,
  } = props;

  const updateCheckBox = (id, newData, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: prevFormData[field].map((data) =>
        data.id === id ? { ...data, ...newData } : data
      ),
    }));
  };
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Family Background </h2>
      <hr className="my-5 sa-border-primary" />
      <InlineTwoInputText
        title={"USSocialSecurityAreaNumber"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" What is your father's name"
        isVisible={true}
        disabled={false}
        fieldVisibility={fieldVisibility}
        handleCheckboxChange={handleCheckboxChange}
        firstFieldLbl="Father's First (Given) Name(s)"
        secFieldLbl="Father's Family Name(s)"
      />

      <InlineChildSwitch
        isVisible={true}
        title={"hasBirthDate"}
        label=" 
        Do you know your Father's date of birth?"
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
        parent="fatherInfo"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />

      <InlineInputDate
        title={"fatherInfo.birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your father's birth date?"
        isVisible={props.formData?.fatherInfo[0]?.hasBirthDate}
        disabled={false}
        inline={true}
      />

      <InlineChildSwitch
        isVisible={true}
        title={"isInUS"}
        label=" 
        Is your father in the U.S.?"
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
        parent="fatherInfo"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />
      <InlineDrop
        isVisible={props.formData?.fatherInfo[0]?.isInUS}
        register={props.register}
        errors={props.errors}
        title={"personPayingForTrip"}
        data={[
          { label: "U.S. CITIZEN", value: "US_CITIZEN" },
          {
            label: "U.S. LEGAL PERMANENT RESIDENT (LPR)",
            value: "US_PERMANENT_RESIDENT",
          },
          { label: "NONIMMIGRANT", value: "NONIMMIGRANT" },
          { label: "OTHER/I DON'T KNOW", value: "OTHER_OR_UNKNOWN" },
        ]}
        label="Father's status"
        inline={true}
      />
      <InlineTwoInputText
        title={"motherInfo"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" What is your mother's name ?"
        isVisible={true}
        disabled={false}
        fieldVisibility={formData}
        handleCheckboxChange={handleCheckboxChange}
        firstFieldLbl="Mother's First (Given) Name(s)*"
        secFieldLbl="Mother's Family Name(s)*"
      />

      <InlineChildSwitch
        isVisible={true}
        title={"hasBirthDate"}
        label=" 
        Do you know your mother's date of birth?"
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
        parent="motherInfo"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />

      <InlineInputDate
        title={"motherInfo.birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your mother's birth date?"
        isVisible={props.formData?.motherInfo[0]?.hasBirthDate}
        disabled={false}
        inline={true}
      />

      <InlineChildSwitch
        isVisible={true}
        title={"isInUS"}
        label=" 
        Is your mother in the U.S.?"
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
        parent="motherInfo"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />

      <InlineDrop
        isVisible={props.formData?.motherInfo[0]?.isInUS}
        register={props.register}
        errors={props.errors}
        title={"personPayingForTrip"}
        inline={true}
        data={[
          { label: "U.S. CITIZEN", value: "US_CITIZEN" },
          {
            label: "U.S. LEGAL PERMANENT RESIDENT (LPR)",
            value: "US_PERMANENT_RESIDENT",
          },
          { label: "NONIMMIGRANT", value: "NONIMMIGRANT" },
          { label: "OTHER/I DON'T KNOW", value: "OTHER_OR_UNKNOWN" },
        ]}
        label="Mother's status"
      />

      <InlineChildSwitch
        isVisible={true}
        title={"hasImmediateRelativesInUS"}
        label=" 
        Do you have any immediate relatives, excluding parents, in the United States?"
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
        parent="relatives"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />

      <ImmediateRelative
        register={props.register}
        errors={props.errors}
        fieldVisibility={formData}
        isVisible={props.formData?.relatives[0]?.hasImmediateRelativesInUS}
      />
      <hr className="my-9 sa-border-primary" />
      <h2 className="mb-5 text-xl font-bold"> Spouse Information </h2>
      <InlineInputText
        title={"partnerInfo.firstName"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Spouse's Given Names (include Maiden Name)"
        isVisible={true}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        title={"partnerInfo.firstName"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Spouse’s Last Names"
        isVisible={true}
        disabled={false}
        formData={formData}
      />
      <InlineInputDate
        title={"partnerInfo.birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="Spouse's Date of Birth"
        isVisible={true}
        disabled={false}
        inline={true}
      />
      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"partnerInfo.nationalityCountryInput"}
        data={data.countries}
        label="Spouse's Country/Region of Origin (Nationality)"
        inline={true}
      />

      <InlineInputText
        title={"partnerInfo.birthCity"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" City of Spouse's Birth"
        isVisible={true}
        disabled={formData["partnerInfo.birthCity_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="partnerInfo.birthCity_checkbox"
        checkLabel="Does not apply"
        formData={formData}
      />
      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"partnerInfo.birthCountry"}
        data={data.countries}
        label="Country/Region of Spouse's birth"
        inline={true}
      />
      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"partnerInfo.addressType"}
        data={data.belongsToTribe}
        label="Spouse's Address"
        inline={true}
      />

      <hr className="my-9 sa-border-primary" />

      <InlineSwitch
        isVisible={true}
        title="belongsToTribe"
        label="Do you belong to a clan or tribe?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />

      <InlineInputText
        title={"tribeName"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Clan or Tribe Name"
        isVisible={formData.belongsToTribe}
        disabled={false}
        formData={formData}
      />

      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"speakingLanguagesInput"}
        data={data.countries}
        label="Languages known"
        inline={true}
      />
      <InlineSwitch
        isVisible={true}
        title="hasOtherSpeakingLanguages"
        label="Other languages you speak - Not listed above"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />
      <InlineInputText
        title={"otherSpeakingLanguages"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Enter Additional Languages"
        isVisible={formData.hasOtherSpeakingLanguages}
        disabled={false}
        formData={formData}
      />

      <InlineSwitch
        isVisible={true}
        title="hasWorkedToOrganization"
        label="Have you worked for any organizations, such as professional, social, or charitable ones?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
      />
      <InlineInputText
        title={"organizations"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Organization Name"
        isVisible={formData.hasWorkedToOrganization}
        disabled={false}
        formData={formData}
      />
    </>
  );
};

export default Family;
