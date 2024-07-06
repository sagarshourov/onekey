import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";

import LostPassports from "./lostPassports";

import InlineInputText from "../elements/InlineInputText";

import InlineSwitch from "../elements/InlineSwitch";

import data from "../elements/data.json";
const Passport = (props) => {
  const [date, setDate] = useState("");
  const { handleCheckboxChange, formData, setFormData } = props;

  return (
    <div>
      <h2 className="mb-5 text-xl font-bold"> Passport Information </h2>

      <hr className="my-5 sa-border-primary" />
      <div className="adQd ">
        <InlineDrop
          formData={formData}
          setFormData={setFormData}
          title={"passportType"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Type of passport/travel document"
          isVisible={true}
          disabled={false}
          inline={true}
          data={data.passportType}
        />
        <InlineInputText
          setFormData={setFormData}
          required={true}
          title={"passportNumber"}
          helpText="Enter the passport number exactly as it appears on the passport information page "
          register={props.register}
          type="text"
          errors={props.errors}
          label="Passport/Travel Document Number"
          isVisible={true}
          disabled={false}
          condition={false}
          formData={formData}
        />
        <InlineInputText
          setFormData={setFormData}
          required={false}
          title={"passportBookNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Passport Book Number"
          isVisible={true}
          formData={formData}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="passportBookNumber_checkbox"
          disabled={formData.passportBookNumber_checkbox}
        />
        <InlineDrop
          formData={formData}
          setFormData={setFormData}
          title={"passportIssueCountry"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="Issuing country/authority of the passport/travel document"
          isVisible={true}
          disabled={false}
          data={data.countries}
          inline={true}
        />

        <InlineInputText
          setFormData={setFormData}
          required={true}
          title={"passportCity"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" City"
          isVisible={true}
          disabled={false}
          condition={false}
          formData={formData}
        />
        <InlineInputText
          setFormData={setFormData}
          required={false}
          title={"passportState"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="State/Region/Province"
          isVisible={true}
          disabled={false}
          condition={false}
          formData={formData}
        />
        <InlineDrop
          formData={formData}
          setFormData={setFormData}
          title={"passportCountry"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Country/Region"
          isVisible={true}
          disabled={false}
          data={data.countries}
          inline={true}
        />

        <InlineInputDate
          title={"passportIssueDate"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Passport Issuance Date"
          isVisible={true}
          disabled={false}
          inline={true}
          formData={formData}
          endYear="current"
        />

        <InlineInputDate
          title={"passportExpiryDate"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Passport Expiration Date"
          isVisible={true}
          disabled={formData.hasPassportExpiryDate_checkbox}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="hasPassportExpiryDate_checkbox"
          inline={true}
          formData={formData}
          chkLbl="No Expiration"
          setFormData={setFormData}
          endYear={2044}
        />

        <div className="mt-5 ">
          <InlineSwitch
            setFormData={setFormData}
            isVisible={true}
            title="hasEverLostPassport"
            label=" Have you ever lost a passport or had one stolen?"
            handleCheckboxChange={handleCheckboxChange}
            formData={formData}
            fullWidth={false}
            helpText=" "
          />
        </div>
        <LostPassports
          register={props.register}
          errors={props.errors}
          isVisible={formData.hasEverLostPassport}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          setFormData={setFormData}
        />

        <InlineDrop
          formData={formData}
          setFormData={setFormData}
          title={"nationalityInput"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Country/Region of Origin (Nationality)"
          isVisible={true}
          disabled={false}
          data={data.countries}
          inline={true}
        />
      </div>
    </div>
  );
};

export default Passport;
