import { useState, useEffect } from "react";

import classnames from "classnames";
import InputText from "../elements/InputText";
import { Lucide } from "@/base-components";

import InlineDrop from "../elements/InlineDrop";
import dat from "../elements/data.json";
import InlineInputDate from "../elements/InlineInputDate";

import reasonsForTravelData from "./reasonsForTravel.json";
import InlineInputText from "../elements/InlineInputText";
const CompanyPayerInfo = (props) => {
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
              label="Company Payer Name"
            />
            <InlineInputText
              required={true}
              title={"companyPayerInfo.name"}
              helpText="Phone number must contain country code (e.g. +1 231 231 1111).   "
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
              helpText="Phone number must contain country code (e.g. +1 231 231 1111).   "
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
              disabled={false}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Street address (Line 1)"
            />

            <InlineInputText
              required={true}
              title={"companyPayerInfo.address.streetAddress2"}
              helpText="  "
              register={register}
              type="text"
              errors={errors}
              isVisible={true}
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
              isVisible={true}
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
              isVisible={true}
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
              isVisible={true}
              disabled={formData.companyPayerInfo_zipcode_checkbox}
              handleCheckboxChange={handleCheckboxChange}
              formData={formData}
              label="Postal Zone/Zip Code"
              condition={true}
              check={"companyPayerInfo_zipcode_checkbox"}
              checkLabel={"Does not apply"}
            />
            <InlineDrop
              title={"companyPayerInfo.country"}
              helpText=""
              register={props.register}
              errors={props.errors}
              label=" Country/Region"
              isVisible={true}
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

export default CompanyPayerInfo;
