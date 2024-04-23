import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";
import InlineSwitch from "../elements/InlineSwitch";
import USDriverLicenses from "./USDriverLicenses";
import InlineInputDate from "../elements/InlineInputDate";
import PreviousVisit from "./PreviousVisit";
import data from "../elements/data.json";
const PerviousTravels = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, setFormData, formData, handleCheckboxChange } =
    props;

  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Pervious Travels </h2>

      <hr className="my-5 sa-border-primary" />

      <InlineSwitch
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        formData={formData}
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
        isVisible={formData.hasIssuedVisa}
        title="sameCountry"
        label=" 
        Are you applying from the same country and is this your country of residence?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineSwitch
        setFormData={setFormData}
        isVisible={formData.hasIssuedVisa}
        title="tenPrinted"
        label=" 
        Have you been ten-printed?"
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        fullWidth={false}
        helpText=" "
        inline={true}
      />
      <InlineSwitch
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
        setFormData={setFormData}
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
    </>
  );
};

export default PerviousTravels;
