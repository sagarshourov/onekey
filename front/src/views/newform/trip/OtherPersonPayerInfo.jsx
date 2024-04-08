import { useState, useEffect } from "react";

import classnames from "classnames";
import InputText from "../elements/InputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InlineInputDate from "../elements/InlineInputDate";

import reasonsForTravelData from "./reasonsForTravel.json";
import InlineInputText from "../elements/InlineInputText";
import InlineChildSwitch from "../elements/InlineChildSwitch";
import InlineSwitch from "../elements/InlineSwitch";
const OtherPersonPayerInfo = (props) => {
  const {
    isVisible,

    register,
    formData,
    handleCheckboxChange,
    setFormData,
    errors,
  } = props;
  // console.log("key", props?.check);

  const handelSelect = (e) => {
    console.log(e);
  };

  return (
    <>
      {isVisible && (
        <>
          <div className="mt-5 border p-5  border-blue-200 ">
            <InlineInputText
              required={true}
              title={"companyPayerInfo.name"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="What is the first name of the person paying for the trip?"
            />
            <InlineInputText
              required={true}
              title={"companyPayerInfo.name"}
              helpText="What is the last name of the person paying for the trip? "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Telephone number"
            />
            <InlineInputText
              required={true}
              title={"companyPayerInfo.name"}
              helpText="Telephone number "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Relationship to you"
            />

            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.streetAddress"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
              disabled={formData.payerInfo_email_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Email Address"
              condition={true}
              check={"payerInfo_email_checkbox"}
              checkLabel="Does not apply"
            />

            <InlineDrop
              title={"companyPayerInfo.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Relationship to you"
              isVisible={true}
              disabled={false}
              data={dat.relation}
              inline={true}
              handelSelect={handelSelect}
            />

            <InlineSwitch
              isVisible={true}
              title="hasSameAddressAsMailingOrHome"
              label="  Person paying for trip has same address"
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              fullWidth={false}
              helpText=" "
              inline={true}
            />
            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 1
              )"
            />

            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 2)"
            />

            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="City"
            />
            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.city"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={formData.companyPayerInfo_city_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="State/Province"
              condition={true}
              check={"companyPayerInfo_city_checkbox"}
              checkLabel={"Does not apply"}
            />

            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.zipcode"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={formData.personPayerInfo_zipcode_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Postal Zone/Zip Code"
              condition={true}
              check={"personPayerInfo_zipcode_checkbox"}
              checkLabel={"Does not apply"}
            />
            <InlineDrop
              title={"companyPayerInfo.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Country/Region"
              isVisible={formData.hasSameAddressAsMailingOrHome}
              disabled={false}
              data={dat.countries}
              inline={true}
              handelSelect={handelSelect}
            />
          </div>
        </>
      )}
    </>
  );
};

export default OtherPersonPayerInfo;
