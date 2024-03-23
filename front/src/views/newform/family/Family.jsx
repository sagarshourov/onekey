import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";
import InlineTwoInputText from "./InlineTwoInputText";
import InlineInputDate from "../elements/InlineInputDate";
import ImmediateRelative from "./ImmediateRelative";
import data from "../elements/data.json";
const Family = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, fieldVisibility, handleCheckboxChange } = props;
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
      />
      <InlineSwitch
        isVisible={true}
        title="fatherInfo.hasBirthDate"
        label=" 
        Do you know your Father's date of birth?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineInputDate
        title={"fatherInfo.birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your father's birth date?"
        isVisible={fieldVisibility["fatherInfo.hasBirthDate"]}
        disabled={false}
        inline={true}
      />
      <InlineSwitch
        isVisible={true}
        title="fatherInfo.isInUS"
        label=" 
        Is your father in the U.S.?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineDrop
        isVisible={fieldVisibility["fatherInfo.isInUS"]}
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
        fieldVisibility={fieldVisibility}
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineSwitch
        isVisible={true}
        title="motherInfo.hasBirthDate"
        label=" 
        Do you know your mother's date of birth?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineInputDate
        title={"motherInfo.hasBirthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your mother's birth date?"
        isVisible={fieldVisibility["motherInfo.hasBirthDate"]}
        disabled={false}
        inline={true}
      />
      <InlineSwitch
        isVisible={true}
        title="motherInfo.isInUS"
        label=" 
        Is your mother in the U.S.?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineDrop
        isVisible={fieldVisibility["motherInfo.isInUS"]}
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
        label="Mother's status"
      />
      <InlineSwitch
        isVisible={true}
        title="hasImmediateRelativesInUS"
        label="Do you have any immediate relatives, excluding parents, in the United States?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <ImmediateRelative
        register={props.register}
        errors={props.errors}
        fieldVisibility={fieldVisibility}
        isVisible={fieldVisibility["hasImmediateRelativesInUS"]}
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
      />

      <InlineInputText
        title={"partnerInfo.birthCity"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" City of Spouse's Birth"
        isVisible={true}
        disabled={fieldVisibility["partnerInfo.birthCity_checkbox"]}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="partnerInfo.birthCity_checkbox"
        checkLabel="Does not apply"
      />
      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"partnerInfo.birthCountry"}
        data={data.countries}
        label="Country/Region of Spouse's birth"
      />
      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"partnerInfo.addressType"}
        data={data.belongsToTribe}
        label="Spouse's Address"
      />

      <hr className="my-9 sa-border-primary" />

      <InlineSwitch
        isVisible={true}
        title="belongsToTribe"
        label="Do you belong to a clan or tribe?"
        handleCheckboxChange={handleCheckboxChange}
      />

      <InlineInputText
        title={"tribeName"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Clan or Tribe Name"
        isVisible={fieldVisibility["belongsToTribe"]}
        disabled={false}
      />

      <InlineDrop
        isVisible={true}
        register={props.register}
        errors={props.errors}
        title={"speakingLanguagesInput"}
        data={data.countries}
        label="Languages known"
      />
      <InlineSwitch
        isVisible={true}
        title="hasOtherSpeakingLanguages"
        label="Other languages you speak - Not listed above"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineInputText
        title={"otherSpeakingLanguages"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Enter Additional Languages"
        isVisible={fieldVisibility["hasOtherSpeakingLanguages"]}
        disabled={false}
      />

      <InlineSwitch
        isVisible={true}
        title="hasWorkedToOrganization"
        label="Have you worked for any organizations, such as professional, social, or charitable ones?"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineInputText
        title={"organizations"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Organization Name"
        isVisible={fieldVisibility["hasWorkedToOrganization"]}
        disabled={false}
      />
    </>
  );
};

export default Family;
