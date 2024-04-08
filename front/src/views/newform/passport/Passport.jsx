import { useState, useEffect } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputDate from "../elements/InlineInputDate";

import LostPassports from "./lostPassports";

import InputText from "../elements/InputText";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
import Nationalities from "./Nationalities";

import InlineSwitch from "../elements/InlineSwitch";

import data from "../elements/data.json";
import Residents from "./Residents";
const Passport = (props) => {
  const [date, setDate] = useState("");
  const { fieldVisibility, handleCheckboxChange, formData, setFormData } =
    props;
  return (
    <div>
      <h2 className="mb-5 text-xl font-bold"> Passport Information </h2>

      <hr className="my-5 sa-border-primary" />
      <div className="adQd ">
        <InlineDrop
          title={"passportType"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Type of passport/travel document"
          isVisible={true}
          disabled={false}
          inline={true}
          data={data.countries}
        />
         <InlineInputText
    required={true}
          title={"passportNumber"}
          helpText="Enter the passport number exactly as it appears on the passport information page "
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Passport/Travel Document Number"
          isVisible={true}
          disabled={false}
          condition={false}
          formData={formData}
        />
         <InlineInputText
    required={true}
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
          formData={formData}
        />

         <InlineInputText
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
    required={true}
          title={"lastName"}
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
          title={"passportIssueCountryInput"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Country/Region"
          isVisible={true}
          disabled={false}
          data={data.countries}
          inline={true}
          formData={formData}
        />

        <InlineInputDate
          title={"passportExpiryDate"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Passport Issuance Date"
          isVisible={true}
          disabled={false}
          inline={true}
          formData={formData}
        />
        <InlineInputDate
          title={"passportIssueCountryInput"}
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Passport Expiration Date"
          isVisible={true}
          disabled={fieldVisibility["hasPassportExpiryDate"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="hasPassportExpiryDate"
          inline={true}
          formData={formData}
        />

        <div className="mt-5 ">
          {/* <div className="form-check form-switch mt-5">
            <label className=" sa-label mr-2" htmlFor="checkbox-switch-7">
              Have you ever lost a passport or had one stolen?
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => handleCheckboxChange("hasEverLostPassport")}
              checked={fieldVisibility.hasEverLostPassport ? true : false}
            />
          </div> */}

          <InlineSwitch
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
          fieldVisibility={formData}
          formData={formData}
          setFormData={setFormData}
        />

        <InlineDrop
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
        <h2 className="mb-5 mt-5 text-xl font-bold">
          {" "}
          Additional Nationalities{" "}
        </h2>

        <hr className="my-5 sa-border-primary" />

        <div className="mt-5 ">
          {/* <div className="form-check form-switch mt-5">
            <label className=" sa-label mr-2" htmlFor="checkbox-switch-7">
              Do you currently hold or have you ever held any nationality other
              than the one indicated above?
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              onChange={() => handleCheckboxChange("hasMultipleNationalities")}
              checked={fieldVisibility.hasMultipleNationalities ? true : false}
            />
          </div> */}

          <InlineSwitch
            isVisible={true}
            title="hasMultipleNationalities"
            label="Do you currently hold or have you ever held any nationality other
            than the one indicated above?"
            handleCheckboxChange={handleCheckboxChange}
            formData={formData}
            fullWidth={false}
            helpText=" "
          />
        </div>

        <Nationalities
          register={props.register}
          errors={props.errors}
          isVisible={formData.hasMultipleNationalities}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          setFormData={setFormData}
        />
        <InlineSwitch
          isVisible={true}
          title="hasMultiplePermanentResidents"
          label="Are you a permanent resident of a country/region other than your country/region of origin (nationality) as indicated above?"
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          fullWidth={false}
          helpText=" "

        />
        
        <Residents
          register={props.register}
          errors={props.errors}
          isVisible={formData.hasMultiplePermanentResidents}
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          setFormData={setFormData}
        />


        
         <InlineInputText
    required={true}
          title={"nationalId"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" National Identification Number"
          isVisible={true}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="nationalId_check"
          disabled={formData.nationalId_check}
          formData={formData}
        />
         <InlineInputText
    required={true}
          title={"USSocialSecurityAreaNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" U.S. Social Security area number"
          isVisible={true}
          disabled={formData.USSocialSecurityAreaNumber_check}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USSocialSecurityAreaNumber_check"
          formData={formData}
        />
        {/*  <InlineInputText
    required={true}
          title={"USSocialSecurityGroupNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="U.S. Social Security Group Number"
          isVisible={true}
          disabled={fieldVisibility["USSocialSecurityGroupNumber"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USSocialSecurityGroupNumber"
        /> */}
        {/*  <InlineInputText
    required={true}
          title={"USSocialSecuritySerialNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="U.S. Social Security Serial Number"
          isVisible={true}
          disabled={fieldVisibility["USSocialSecuritySerialNumber"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USSocialSecuritySerialNumber"
        /> */}
         <InlineInputText
    required={true}
          title={"USTaxpayerIdNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="U.S. Taxpayer ID Number"
          isVisible={true}
          disabled={formData.USTaxpayerIdNumber_check}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USTaxpayerIdNumber_check"
          formData={formData}
        />
      </div>
    </div>
  );
};

export default Passport;
