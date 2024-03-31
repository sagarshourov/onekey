import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputDate from "../elements/InlineInputDate";
import data from "../elements/data.json";

import InlineDrop from "../elements/InlineDrop";

import InlineSwitch from "../elements/InlineSwitch";
import InputRadio from "../elements/InputRadio";
const FirstStep = (props) => {
  const [state, setState] = useState(false);

  const { fieldVisibility, formData, handleCheckboxChange } = props;

  // const [fieldVisibility, setFieldVisibility] = useState({
  //   hasAdditionalNames: false,
  //   hasBirthStateProvince: false,
  //   // Add more fields if needed
  // });
  // const handleCheckboxChange = (fieldName) => {
  //   setFieldVisibility({
  //     ...fieldVisibility,
  //     [fieldName]: !fieldVisibility[fieldName],
  //   });
  // };

  //console.log('filed',fieldVisibility);

  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> General Information </h2>

      <div>
        {/* <div className="toggle-container">
          <div className={`sa-toggle-${state} sa-toggle`} tabIndex="0">
            <div className="bubble"></div>
            <div
              onClick={() => setState(false)}
              className="no"
              htmlFor="hasAdditionalNames"
            >
              No
            </div>
            <div
              onClick={() => setState(true)}
              className="yes no-toggle"
              htmlFor="hasAdditionalNames"
            >
              Yes
            </div>
          </div>
        </div> */}
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-2  lg:gap-32">
        <InputText
          title={"userEmail"}
          helpText=" Please make sure you enter a valid email address. We will use
                  it to contact you about your application"
          register={props.register}
          type="email"
          errors={props.errors}
          label="Email Address"
          isVisible={true}
          disabled={false}
        />
        <div className="basis-1/16 lg:basis-7/16"></div>
      </div>

      <hr className="my-5 sa-border-primary" />

      <h2 className="my-6  text-xl font-bold"> Applicant Information</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"firstName"}
          helpText="Please ensure that the First name(s) on your passport or
                travel document match exactly with the information you
                provide."
          register={props.register}
          type="text"
          errors={props.errors}
          label=" First name(s) or given name(s)"
          isVisible={true}
          disabled={false}
        />

        <InputText
          title={"lastName"}
          helpText="Please ensure that the Family name(s) on your passport or
                travel document match exactly with the information you
                provide."
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Family name(s) or last name(s)"
          isVisible={true}
          disabled={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <div>
          <InputText
            title={"fullName"}
            helpText=""
            register={props.register}
            type="text"
            errors={props.errors}
            label="Full name in your native alphabet"
            isVisible={true}
            disabled={formData.hasFullName}
            check="hasFullName"
            checkLabel="Does not apply"
            condition={true}
            formData={formData}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="pt-5">
          <InlineSwitch
            register={props.register}
            formData={formData}
            isVisible={true}
            title="hasAdditionalNames"
            label=" Have you used a four-letter code to represent your name in a
              communication system?"
            handleCheckboxChange={handleCheckboxChange}
            fullWidth={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"additionalFirstName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="Additional given name(s)"
          isVisible={formData.hasAdditionalNames}
          disabled={false}
          formData={formData}
        />
        <InputText
          title={"additionalLastName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="Additional family name(s)"
          disabled={false}
          isVisible={formData.hasAdditionalNames}
          formData={formData}
        />
      </div>
      <div className="grid grid-cols-1 mt-5">
        <InlineSwitch
          isVisible={true}
          title="hasTelecode"
          label=" Have you used a four-letter code to represent your name in a communication system?"
          handleCheckboxChange={handleCheckboxChange}
          formData={formData}
          fullWidth={false}
          helpText="A telecode is a four-letter code that represents an individual's name and is used to save time and transmit data electronically. "
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"telecodeFirstName"}
          helpText="Please enter the telecode for first/given name(s). "
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Telecode for first/given name(s)"
          isVisible={formData.hasTelecode}
          disabled={false}
        />
        <InputText
          title={"telecodeLastName"}
          helpText="Please enter the telecode for family name(s).  "
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Telecode for family name(s)"
          isVisible={formData.hasTelecode}
          disabled={false}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <div className="mt-5">
          <InputRadio
            titleYes="Female"
            titleNo="Male"
            title={"gender"}
            label="Gender"
            isVisible={true}
            register={props.register}
            inline={false}
          />
        </div>
        <div className="mt-5">
          <InlineDrop
            isVisible={true}
            register={props.register}
            errors={props.errors}
            title={"birthCountry"}
            data={data.married}
            label="Marital Status"
            helpText=" "
            inline={false}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <div className="mt-3">
          <InlineInputDate
            title="birthDate"
            helpText=""
            register={props.register}
            errors={props.errors}
            label="  Date of Birth"
            isVisible={true}
            disabled={false}
            inline={false}
          />
        </div>

        <InputText
          title={"birthCity"}
          helpText="If your place of birth is not listed on your passport, please enter the name of the city/town/village where you were born.  "
          register={props.register}
          type="text"
          errors={props.errors}
          label="City of Birth"
          isVisible={true}
          disabled={false}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <div>
          <InputText
            title={"birthStateProvince"}
            helpText="If your place of birth is not listed on your passport, please enter the name of the city/town/village where you were born.  "
            register={props.register}
            type="text"
            errors={props.errors}
            label=" State/region/province of birthplace"
            isVisible={true}
            disabled={formData.hasBirthStateProvince}
            check="hasBirthStateProvince"
            checkLabel="Does not apply"
            condition={true}
            fieldVisibility={formData}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <div className="mt-5">
          <InlineDrop
            isVisible={true}
            register={props.register}
            errors={props.errors}
            title={"birthCountry"}
            data={data.countries}
            label="Country of Birth"
            helpText=" Please select the country of your birth as indicated on your travel
            documents."
            inline={false}
          />
        </div>
      </div>

      {/* <div className="flex justify-end mt-8">
        <button
          type="submit"
          className="btn btn-lg btn-success text-white  py-3"
        >
          Next Step
        </button>
      </div> */}
    </>
  );
};

export default FirstStep;