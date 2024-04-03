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

  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Trip details </h2>

      <hr className="my-5 sa-border-primary" />

      {/* <InlineInputText
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
          title={"reasonForTripToUSSelect.valueInput"}
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
        />
        <InputTextArea
          title="reasonForTripToUSSelect.explain"
          helpText=""
          register={props.register}
          errors={props.errors}
          label="Please provide a detailed explanation"
          isVisible={true}
          disabled={false}
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
        isVisible={true}
        title="travelingWithOrganization"
        label=" Are you traveling as part of a group or organization?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InputText
        title={"groupName"}
        helpText=""
        register={props.register}
        type="text"
        errors={props.errors}
        label="Group name"
        isVisible={formData.travelingWithOrganization}
        disabled={false}
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
      <InlineSwitch
        isVisible={true}
        title="hasIssuedVisa"
        label=" Have you ever visited or traveled to the United States before?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      {/* <InlineSwitch
        isVisible={true}
        title="haveYouEverBeenToUS"
        label=" Have you ever been issued a U.S. visa before?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      /> */}

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

      <InlineDrop
        isVisible={true}
        register={register}
        errors={errors}
        title={"personPayingForTrip"}
        data={reasonsForTravelData.personPayingForTrip}
        label="Who is paying for the trip?"
        inline={true}
      />
    </>
  );
};

export default Trip;
