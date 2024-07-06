import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";

import InlineChildSwitch from "../elements/InlineChildSwitch";

import InlineTwoInputText from "./InlineTwoInputText";
import InlineInputDate from "../elements/InlineInputDate";
import ImmediateRelative from "./ImmediateRelative";
import data from "../elements/data.json";
import AddLanguage from "./AddLanguage";
import InlineDropChid from "../elements/InlineDropChid";
import InputTextArea from "../elements/InputTextArea";
import InlineInputChildText from "../elements/InlineInputChildText";
import InlineInputChildDate from "../elements/InlineInputChildDate";
const Family = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, setFormData, formData, handleCheckboxChange } =
    props;

  const updateCheckBox = (id, newData, fields) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [fields]: prevFormData[fields].map((data) =>
        data.id === id ? { ...data, ...newData } : data
      ),
    }));
  };
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Family Background </h2>
      <hr className="my-5 sa-border-primary" />
      <InlineTwoInputText
        setFormData={setFormData}
        formData={formData}
        title="fatherInfo"
        helpText=""
        register={register}
        type="text"
        errors={errors}
        label=" What is your father's name"
        isVisible={true}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        firstFieldLbl="Father's First (Given) Name(s)"
        secFieldLbl="Father's Family Name(s)"
      />

      <InlineChildSwitch
        isVisible={
          formData.firstname_checkbox && formData.lastname_checkbox
            ? false
            : true
        }
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
        title={"fatherInfo_birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your father's birth date?"
        isVisible={props.formData?.fatherInfo[0]?.hasBirthDate}
        disabled={false}
        inline={true}
        endYear="current"
      />

      <InlineChildSwitch
        isVisible={
          formData.firstname_checkbox && formData.lastname_checkbox
            ? false
            : true
        }
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
      <InlineDropChid
        formData={formData}
        setFormData={setFormData}
        isVisible={props.formData?.fatherInfo[0]?.isInUS}
        register={props.register}
        errors={props.errors}
        title={"status"}
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
        parent="fatherInfo"
        index={0}
      />
      <InlineTwoInputText
        setFormData={setFormData}
        formData={formData}
        title={"motherInfo"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label=" What is your mother's name ?"
        isVisible={true}
        disabled={false}
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
        title={"motherInfo_birthDate"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="What is your mother's birth date?"
        isVisible={props.formData?.motherInfo[0]?.hasBirthDate}
        disabled={false}
        inline={true}
        endYear="current"
      />

      <InlineChildSwitch
        isVisible={
          formData.firstname_checkbox && formData.lastname_checkbox
            ? false
            : true
        }
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

      <InlineDropChid
        formData={formData}
        setFormData={setFormData}
        isVisible={props.formData?.motherInfo[0]?.isInUS}
        register={props.register}
        errors={props.errors}
        title={"status"}
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
        parent="motherInfo"
        index={0}
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
        parent="immediateRelatives"
        index={0}
        setFormData={setFormData}
        onChange={updateCheckBox}
      />

      <ImmediateRelative
        register={props.register}
        errors={props.errors}
        formData={formData}
        setFormData={setFormData}
        isVisible={formData?.immediateRelatives[0]?.hasImmediateRelativesInUS}
      />
      {["MARRIED", "DIVORCED", "WIDOWED"].includes(formData.maritalStatus) && (
        <>
          <hr className="my-9 sa-border-primary" />
          <h2 className="mb-5 text-xl font-bold"> Spouse Information </h2>

          <InlineInputChildText
            setFormData={setFormData}
            required={true}
            title={"firstName"}
            helpText=""
            register={props.register}
            type="text"
            errors={props.errors}
            label=" Spouse's Given Names (include Maiden Name)"
            isVisible={true}
            disabled={false}
            formData={formData}
            index={0}
            parent={"partnerInfo"}
          />
          <InlineInputChildText
            setFormData={setFormData}
            required={true}
            title={"lastName"}
            helpText=""
            register={props.register}
            type="text"
            errors={props.errors}
            label=" Spouse’s Last Names"
            isVisible={true}
            disabled={false}
            formData={formData}
            index={0}
            parent={"partnerInfo"}
          />
          <InlineInputChildDate
            title={"birthDate"}
            helpText=""
            register={props.register}
            errors={props.errors}
            label="Spouse's Date of Birth"
            isVisible={true}
            disabled={false}
            inline={true}
            endYear="current"
            parent={"partnerInfo"}
            index={0}
          />
          <InlineDropChid
            formData={formData}
            setFormData={setFormData}
            isVisible={true}
            register={props.register}
            errors={props.errors}
            title={"nationalityCountryInput"}
            data={data.countries}
            label="Spouse's Country/Region of Origin (Nationality)"
            inline={true}
            index={0}
            parent={"partnerInfo"}
          />

          <InlineInputChildText
            setFormData={setFormData}
            required={true}
            title={"birthCity"}
            helpText=""
            register={props.register}
            type="text"
            errors={props.errors}
            label=" City of Spouse's Birth"
            isVisible={true}
            disabled={formData["partnerInfo.birthCity_checkbox"]}
            condition={true}
            handleCheckboxChange={handleCheckboxChange}
            check="birthCity_checkbox"
            checkLabel="Does not apply"
            formData={formData}
            index={0}
            parent={"partnerInfo"}
          />
          <InlineDropChid
            formData={formData}
            setFormData={setFormData}
            isVisible={true}
            register={props.register}
            errors={props.errors}
            title={"birthCountry"}
            data={data.countries}
            label="Country/Region of Spouse's birth"
            inline={true}
            index={0}
            parent={"partnerInfo"}
          />
          <InlineDropChid
            formData={formData}
            setFormData={setFormData}
            isVisible={true}
            register={props.register}
            errors={props.errors}
            title={"addressType"}
            data={data.belongsToTribe}
            label="Spouse's Address"
            inline={true}
            index={0}
            parent={"partnerInfo"}
          />
          <InputTextArea
            formData={formData}
            setFormData={setFormData}
            isVisible={
              formData?.partnerInfo?.addressType == "OTHER_SPECIFY_ADDRESS"
            }
            register={props.register}
            errors={props.errors}
            title={"addressSpecify"}
            label="Address"
            inline={true}
            index={0}
            parent={"partnerInfo"}
          />
        </>
      )}
    </>
  );
};

export default Family;
