import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";

import InputTextArea from "../elements/InputTextArea";
import reasonsForTravelData from "./reasonsForTravel.json";
import InputRadio from "../elements/InputRadio";
import InlineSwitch from "../elements/InlineSwitch";
import Purposes from "./Purposes";
import Travelers from "./Travelers";
import PreviousVisit from "./PreviousVisit";
import USDriverLicenses from "./USDriverLicenses";
import data from "../elements/data.json";
import InlineInputDate from "../elements/InlineInputDate";
import CompanyPayerInfo from "./CompanyPayerInfo";
import OtherPersonPayerInfo from "./OtherPersonPayerInfo";
const Trip = (props) => {
  const {
    errors,
    register,
    fieldVisibility,
    setFormData,
    formData,
    handleCheckboxChange,
  } = props;
  const [date, setDate] = useState("");
  const [radio, setRadio] = useState(false);
  const [payingFor, setPayingFor] = useState(false);
  const handleRadio = (e) => {
    console.log(e);
    setRadio(e);
  };

  const handelPayingForTripSelect = (e) => {
    setPayingFor(e.target.value);

    console.log("paying", payingFor);
  };

  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Trip details </h2>

      <hr className="my-5 sa-border-primary" />

      {/*  <InlineInputText
    required={true}
        title={"applicationCountryInput"}
        helpText="Renewal with Interview Waiver: You can use this form to renew your valid U.S. visa without attending an embassy interview. In addition, if your visa has expired within the last 12 to 48 months (depending on your citizenship), you may be eligible for an interview waiver. "
        register={register}
        type="text"
        errors={errors}
        label="Choose an embassy location for your visa application interview"
        isVisible={true}
       
        condition={true}
        handleCheckboxChange={handleCheckboxChange}
      
        checkLabel="Need help choosing a location? Choose a location later"
        formData={formData}
        check="applicationCountryInput_check"
        disabled={formData.applicationCountryInput_check}
      />
      <hr className="my-5 sa-border-primary" /> */}

      <div className="mt-5">
        <InlineDrop
          isVisible={true}
          register={register}
          errors={errors}
          title={"reasonForTripToUSSelect.value"}
          data={reasonsForTravelData.reasons_for_travel}
          label=" Reason for the Trip"
          inline={true}
        />
      </div>
      <div className="mt-5">
        <InputRadio
          titleYes="Someone else"
          titleNo="Self"
          title={"reasonForTripToUSSelect.applyingForSomeoneElse"}
          label="Are you applying for yourself or someone else?"
          isVisible={true}
          register={register}
          inline={true}
          handleRadio={handleRadio}
        />
        <InputTextArea
          title="reasonForTripToUSSelect.explain"
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Please provide a detailed explanation"
          isVisible={!radio}
          disabled={false}
        />
        <InlineDrop
          isVisible={radio}
          register={register}
          errors={errors}
          title={"reasonForTripToUSSelect.someoneElse"}
          data={[
            { label: "CHILD OF AN F1 (F2)", value: "0" },
            { label: "SPOUSE OF AN F1 (F2)", value: "1" },
          ]}
          label="Who are you applying for?"
          inline={true}
        />
      </div>

      <Purposes
        setFormData={setFormData}
        isVisible={true}
        formData={formData}
        errors={errors}
        register={register}
      />

      <InlineDrop
        isVisible={true}
        register={register}
        errors={errors}
        title={"hasTravelPlansInput"}
        data={reasonsForTravelData.hasTravelPlansInput}
        label=" Have you made any specific travel plans yet?"
        inline={true}
      />

      <InlineSwitch
        isVisible={true}
        title="hasOtherTravelers"
        label=" Will anyone be traveling with you?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineSwitch
        isVisible={formData.hasOtherTravelers}
        title="travelingWithOrganization"
        label=" Are you traveling as part of a group or organization?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InputText
      
        refs={"groupName"}
        name={"groupName"}
        required={true}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label="Group name"
        isVisible={formData.travelingWithOrganization}
        disabled={false}
      />
      <Travelers
        isVisible={formData.hasOtherTravelers}
        formData={formData}
        setFormData={setFormData}
        register={register}
        errors={errors}
      />

      <InlineSwitch
        isVisible={true}
        title="haveYouEverBeenToUS"
        label=" Have you ever visited or traveled to the United States before?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <PreviousVisit
        isVisible={formData.haveYouEverBeenToUS}
        formData={formData}
        setFormData={setFormData}
        register={register}
        errors={errors}
        label="Length of Stay"
      />

      <InlineSwitch
        isVisible={formData.haveYouEverBeenToUS}
        title="hasUSDriversLicense"
        label="Do you or did you ever hold a U.S. Driver's Licence?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <USDriverLicenses
        isVisible={formData.hasUSDriversLicense && formData.haveYouEverBeenToUS}
        formData={formData}
        setFormData={setFormData}
        register={register}
        errors={errors}
        label="Length of Stay"
        handleCheckboxChange={handleCheckboxChange}
      />
      <InlineSwitch
        isVisible={true}
        title="hasIssuedVisa"
        label=" Have you ever been issued a U.S. visa before?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineDrop
        isVisible={formData.hasIssuedVisa}
        register={register}
        errors={errors}
        title={"lastVisa.applicationCountry"}
        data={data.countries}
        label="Visa Issuing Post Name"
        inline={true}
      />

      <InlineInputDate
        title={"issueDate"}
        helpText=""
        register={register}
        errors={errors}
        label="Visa issue date"
        isVisible={formData.hasIssuedVisa}
        disabled={false}
        inline={true}
      />
      <InlineInputDate
        title={"expirationDate"}
        helpText=""
        register={register}
        errors={errors}
        label="Visa expiration date"
        isVisible={formData.hasIssuedVisa}
        disabled={false}
        inline={true}
      />

      <InlineInputText
        required={true}
        title={"lastVisa.visaNumber"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasIssuedVisa}
        disabled={formData.visaNumber_checkbox}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        condition={true}
        label="Visa Number"
        checkLabel="Does not apply"
        check="visaNumber_checkbox"
      />

      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="hasSameType"
        label=" 
        Are you applying for the same type of visa?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="lastVisa.sameCountry"
        label=" 
        Are you applying from the same country and is this your country of residence?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="lastVisa.tenPrinted"
        label=" 
        Have you been ten-printed?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="hadVisaLost"
        label=" 
        Has your U.S. Visa ever been lost or stolen?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        required={true}
        title={"lastVisa.year"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hadVisaLost && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Year"
      />
      <InlineInputText
        required={true}
        title={"lastVisa.explain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hadVisaLost && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"
      />

      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="hasVisaCancelled"
        label="
        Has your U.S. Visa ever been cancelled or revoked?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        required={true}
        title={"lastVisa.visaCancelledExplain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasVisaCancelled && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"
      />
      <InlineSwitch
        isVisible={formData.hasIssuedVisa}
        title="clearanceReceived"
        label={`
        The Visa that you're renewing has "Clearance received" or "212(a) waiver of ineligibility" annotated on the visa`}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineSwitch
        isVisible={true}
        title="hasBeenRefusedForVisa"
        label=" 
        Have you ever been denied a U.S. visa, entry to the United States, or withdrawn your application for entry at the port of entry?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />

      <InlineInputText
        required={true}
        title={"lastVisa.year"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasBeenRefusedForVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Year"
      />
      <InlineInputText
        required={true}
        title={"lastVisa.explain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasBeenRefusedForVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"
      />

      <InlineSwitch
        isVisible={true}
        title="hasAnyoneEverFilledOnBehalf"
        label=" 
        Has anyone filed an immigrant petition for you with the United States Citizenship and Immigration Service?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineInputText
        required={true}
        title={"lastVisa.explain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasAnyoneEverFilledOnBehalf}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"
      />

      <InlineDrop
        isVisible={true}
        register={register}
        errors={errors}
        title={"personPayingForTrip"}
        data={reasonsForTravelData.personPayingForTrip}
        label="Who is paying for the trip?"
        inline={true}
        handelSelect={handelPayingForTripSelect}
      />
      <CompanyPayerInfo
        isVisible={payingFor == "company_organization"}
        register={register}
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        setFormData={setFormData}
        errors={errors}
      />

      <OtherPersonPayerInfo
        isVisible={payingFor == "other_person"}
        register={register}
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        setFormData={setFormData}
        errors={errors}
      />
    </>
  );
};

export default Trip;
