import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";
import dat from "../elements/data.json";
import AddPhone from "./AddPhone";
import AddEmail from "./AddEmail";
import AdditionalSocial from "./AdditionalSocial";
import SocialMedia from "./SocialMedia";
const Contact = (props) => {
  const [date, setDate] = useState("");
  const {
    errors,
    register,
    fieldVisibility,
    setFormData,
    formData,
    handleCheckboxChange,
  } = props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Contact Information </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineInputText
        required={true}
        title={"homeAddress.streetAddress"}
        helpText="  Please ensure the accuracy of your street address, as it will be used in the communication that will follow for security purposes. "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 1)"
        isVisible={true}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        required={true}
        title={"homeAddress.streetAddress2"}
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
        required={true}
        title={"homeAddress.city"}
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
        required={true}
        title={"homeAddress.state"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" State/Province"
        isVisible={true}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="homeAddressState_checkbox"
        disabled={formData.homeAddressState_checkbox}
      />

      <InlineInputText
        required={true}
        title={"homeAddress.zipCode"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="homeAddress_ZipCode_checkbox"
        disabled={formData.homeAddress_ZipCode_checkbox}
      />

      <InlineDrop
        title={"homeAddress.country"}
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
        required={true}
        title={"mailingAddress.streetAddress"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Street address (Line 1)"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        required={true}
        title={"mailingAddress.streetAddress2"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Street address (Line 2)"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        required={true}
        title={"mailingAddress.city"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="City"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        required={true}
        title={"mailingAddress.state"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="State/Province"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="mailingAddressState_checkbox"
        disabled={formData.mailingAddressState_checkbox}
      />
      <InlineInputText
        required={true}
        title={"mailingAddress.zipCode"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Postal Zone/Zip Code"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="mailingAddressZipCode_checkbox"
        disabled={formData.mailingAddressZipCode_checkbox}
      />
      <InlineDrop
        title={"mailingAddress.country"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label=" Country/Region"
        isVisible={!props.formData?.hasSameMailingAddressAsHome}
        disabled={false}
        data={dat.countries}
        inline={true}
      />

      <InlineInputText
        required={true}
        title={"phonePrimary"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Primary Phone Number"
        isVisible={true}
        disabled={false}
        formData={formData}
      />

      <InlineInputText
        required={true}
        title={"phoneSecondary"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Secondary Phone Number"
        isVisible={true}
        disabled={false}
        formData={formData}
      />
      <InlineInputText
        required={true}
        title={"phoneWork"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label="Work Phone Number"
        isVisible={true}
        disabled={false}
        formData={formData}
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

      <AddPhone
        formData={formData}
        isVisible={formData.hasAdditionalPhoneNumbers}
        setFormData={setFormData}
        register={register}
        errors={errors}
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

      <AddEmail
        formData={formData}
        isVisible={formData.hasAdditionalEmails}
        setFormData={setFormData}
        register={register}
        errors={errors}
      />

      <SocialMedia
        formData={formData}
        isVisible={true}
        setFormData={setFormData}
        register={register}
        errors={errors}
        SocialMedia={dat.socialMediaOptions}
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
      <AdditionalSocial
        formData={formData}
        isVisible={formData.hasAdditionalSocialMedia}
        setFormData={setFormData}
        register={register}
        errors={errors}
      />
    </>
  );
};

export default Contact;
