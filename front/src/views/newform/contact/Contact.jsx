import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";
import dat from "../elements/data.json";
const Contact = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, fieldVisibility, formData, handleCheckboxChange } = props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Contact Information </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="  Please ensure the accuracy of your street address, as it will be used in the communication that will follow for security purposes. "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 1)"
        isVisible={true}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 2)"
        isVisible={true}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" City"
        isVisible={true}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" State/Province"
        isVisible={true}
        disabled={false}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        disabled={false}
      />

      <InlineDrop
        title={"passportType"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label=" Country/Region"
        isVisible={true}
        disabled={false}
        data={dat.countries}
        inline={true}
      />

      <InlineSwitch
        isVisible={true}
        title={"hasSameMailingAddressAsHome"}
        label="  Is your Mailing Address the same as your Home Address?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Street address (Line 1)"
        isVisible={props.formData?.hasSameMailingAddressAsHome}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Street address (Line 2)"
        isVisible={fieldVisibility.hasSameMailingAddressAsHome}
        disabled={false}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="City"
        isVisible={fieldVisibility.hasSameMailingAddressAsHome}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="State/Province"
        isVisible={fieldVisibility.hasSameMailingAddressAsHome}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Postal Zone/Zip Code"
        isVisible={fieldVisibility.hasSameMailingAddressAsHome}
        disabled={false}
      />
      <InlineDrop
        title={"passportType"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label=" Country/Region"
        isVisible={fieldVisibility.hasSameMailingAddressAsHome}
        disabled={false}
        data={dat.countries}
        inline={true}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Primary Phone Number"
        isVisible={true}
        disabled={false}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Secondary Phone Number"
        isVisible={true}
        disabled={false}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Work Phone Number"
        isVisible={true}
        disabled={false}
      />

      <InlineSwitch
        isVisible={true}
        title={"hasAdditionalPhoneNumbers"}
        label="Have you used any other phone number in the last five years?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Work Phone Number"
        isVisible={formData.hasAdditionalPhoneNumbers}
        disabled={false}
      />

      <InlineSwitch
        isVisible={true}
        title={"hasAdditionalEmails"}
        label=" Have you used any other email address in the last five years?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineInputText
        title={"hasAdditionalEmails"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Additional email address"
        isVisible={props.formData?.hasAdditionalEmails}
        disabled={false}
      />

      <InlineDrop
        title={"passportType"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label="Social media provider/Platform"
        isVisible={true}
        disabled={false}
        data={dat.countries}
        inline={true}
      />
      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Social Media Identifier"
        isVisible={true}
        disabled={false}
      />

      <InlineSwitch
        isVisible={true}
        title={"hasAdditionalSocialMedia"}
        label=" Do you wish to provide information about any other websites or
        applications you have used within the last five years to create or
        share content, such as photos, videos, or status updates?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Additional Social Media Platform"
        isVisible={formData.hasAdditionalSocialMedia}
        disabled={false}
      />
      

      <InlineInputText
        title={"USSocialSecurityAreaNumber"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Additional Social Media Handle"
        isVisible={formData.hasAdditionalSocialMedia}
        disabled={false}
      />
    </>
  );
};

export default Contact;
