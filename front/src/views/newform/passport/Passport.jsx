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
          title={"passportNumber"}
          helpText="Enter the passport number exactly as it appears on the passport information page "
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Passport/Travel Document Number"
          isVisible={true}
          disabled={false}
          condition={false}
        />
        <InlineInputText
          title={"passportBookNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Passport Book Number"
          isVisible={true}
          disabled={fieldVisibility["hasPassportBookNumber"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="hasPassportBookNumber"
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
        />

        <InlineInputText
          title={"passportCity"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" City"
          isVisible={true}
          disabled={false}
          condition={false}
        />
        <InlineInputText
          title={"lastName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="State/Region/Province"
          isVisible={true}
          disabled={false}
          condition={false}
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
          fieldVisibility={formData}
          formData={formData}
          setFormData={setFormData}
        />

        <InlineInputText
          title={"nationalId"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" National Identification Number"
          isVisible={true}
          disabled={fieldVisibility["nationalId"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="nationalId"
        />
        <InlineInputText
          title={"USSocialSecurityAreaNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" U.S. Social Security area number"
          isVisible={true}
          disabled={fieldVisibility["USSocialSecurityAreaNumber"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USSocialSecurityAreaNumber"
        />
        <InlineInputText
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
        />
        <InlineInputText
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
        />
        <InlineInputText
          title={"USTaxpayerIdNumber"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="U.S. Taxpayer ID Number"
          isVisible={true}
          disabled={fieldVisibility["USTaxpayerIdNumber"]}
          condition={true}
          handleCheckboxChange={handleCheckboxChange}
          check="USTaxpayerIdNumber"
        />
      </div>
    </div>
  );
};

export default Passport;
