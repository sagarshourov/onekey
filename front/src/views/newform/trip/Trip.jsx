import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";

import reasonsForTravelData from "./reasonsForTravel.json";
import Purposes from "./Purposes";
import InlineInputDate from "../elements/InlineInputDate";
import CompanyPayerInfo from "./CompanyPayerInfo";
import OtherPersonPayerInfo from "./OtherPersonPayerInfo";
const Trip = (props) => {
  const { errors, register, setFormData, formData, handleCheckboxChange } =
    props;
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
      <h2 className="mb-5 text-xl font-bold"> Trip Details </h2>
      <hr className="my-5 sa-border-primary" />

      <div className="mt-5">
        <InlineDrop
          formData={formData}
          setFormData={setFormData}
          isVisible={true}
          register={register}
          errors={errors}
          title={"reasonForTripToUSSelect"}
          data={reasonsForTravelData.reasons_for_travel}
          label=" Reason for the Trip"
          inline={true}
        />
      </div>
      {/* <div className="mt-5">
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
          required={false}
        />
        <InlineDrop
          formData={formData}
          setFormData={setFormData}
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
      </div> */}
      <Purposes
        setFormData={setFormData}
        isVisible={true}
        formData={formData}
        errors={errors}
        register={register}
      />
      <InlineDrop
        formData={formData}
        setFormData={setFormData}
        isVisible={true}
        register={register}
        errors={errors}
        title={"hasTravelPlansInput"}
        data={reasonsForTravelData.hasTravelPlansInput}
        label=" Have you made any specific travel plans yet?"
        inline={true}
      />
      {/* Date of Arrival */}

      <InlineInputDate
        title="travelPlan.arrivalDate"
        helpText=""
        register={props.register}
        errors={props.errors}
        label="  Date of Arrival"
        isVisible={formData.hasTravelPlansInput == "specific_plans"}
        disabled={false}
        inline={true}
         endYear="current"
      />

      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"travelPlan.arrivalFlight"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasTravelPlansInput == "specific_plans"}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        condition={false}
        label="Arrival Flight"
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"travelPlan.arrivalCity"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasTravelPlansInput == "specific_plans"}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        condition={false}
        label="Arrival City"
      />
      {/* Date Of Departure  */}
      <InlineInputDate
        title="travelPlan.departureDate"
        helpText=""
        register={props.register}
        errors={props.errors}
        label="  Date Of Departure"
        isVisible={formData.hasTravelPlansInput == "specific_plans"}
        disabled={false}
        inline={true}
         endYear="current"
      />
      <InlineInputText
        setFormData={setFormData}
        required={true}
        title={"travelPlan.departureFlight"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasTravelPlansInput == "specific_plans"}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        condition={false}
        label="Departure Flight "
      />

      {/* <InlineSwitch
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
      /> */}
      
      <InlineDrop
        formData={formData}
        setFormData={setFormData}
        isVisible={true}
        register={register}
        errors={errors}
        title={"personPayingForTrip"}
        data={reasonsForTravelData.personPayingForTrip}
        label="Who is paying for the trip?"
        inline={true}
      />
      <CompanyPayerInfo
        isVisible={formData.personPayingForTrip == "company_organization"}
        register={register}
        formData={formData}
        handleCheckboxChange={handleCheckboxChange}
        setFormData={setFormData}
        errors={errors}
      />
      <OtherPersonPayerInfo
        isVisible={formData.personPayingForTrip == "other_person"}
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
