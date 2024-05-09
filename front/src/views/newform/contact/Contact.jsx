import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";
import dat from "../elements/data.json";
import AddPhone from "./AddPhone";
import AddEmail from "./AddEmail";
import AdditionalSocial from "./AdditionalSocial";
import SocialMedia from "./SocialMedia";
import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";
const Contact = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, setFormData, formData, handleCheckboxChange } =
    props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Contact Information </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"streetAddress"}
        helpText="  Please ensure the accuracy of your street address, as it will be used in the communication that will follow for security purposes. "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 1)"
        isVisible={true}
        disabled={false}
        formData={formData}
        parent={"homeAddress"}
        index={0}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={false}
        title={"streetAddress2"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Street address (Line 2)"
        isVisible={true}
        disabled={false}
        formData={formData}
        parent={"homeAddress"}
        index={0}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"city"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" City"
        isVisible={true}
        disabled={false}
        formData={formData}
        parent={"homeAddress"}
        index={0}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"state"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" State/Province"
        isVisible={true}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        check="state_checkbox"
        disabled={formData.homeAddressState_checkbox}
        parent={"homeAddress"}
        index={0}
      />

      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"zipCode"}
        helpText="   "
        register={props.register}
        type="text"
        errors={props.errors}
        label=" Postal Zone/Zip Code"
        isVisible={true}
        formData={formData}
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
        disabled={formData.homeAddress_ZipCode_checkbox}
        check="ZipCode_checkbox"
        parent={"homeAddress"}
        index={0}


      />

      <InlineDropChid
        formData={formData}
        setFormData={setFormData}
        title={"country"}
        helpText=""
        register={props.register}
        errors={props.errors}
        label=" Country/Region"
        isVisible={true}
        disabled={false}
        data={dat.countries}
        inline={true}
        parent={"homeAddress"}
        index={0}
      />

      <InlineSwitch
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        formData={formData}
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
        required={false}
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
        setFormData={setFormData}
        required={false}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
