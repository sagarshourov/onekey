import { useState } from "react";
import InlineDrop from "../elements/InlineDrop";
import InlineInputText from "../elements/InlineInputText";
import InlineSwitch from "../elements/InlineSwitch";
import USDriverLicenses from "./USDriverLicenses";
import InlineInputDate from "../elements/InlineInputDate";
import PreviousVisit from "./PreviousVisit";
import data from "../elements/data.json";
import InlineInputChildText from "../elements/InlineInputChildText";
import InlineDropChid from "../elements/InlineDropChid";
import InlineInputChildDate from "../elements/InlineInputChildDate";
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
      <InlineDropChid
        formData={formData}
        setFormData={setFormData}
        isVisible={formData.hasIssuedVisa}
        register={register}
        errors={errors}
        title={"postName"}
        data={data.countries}
        label="Visa Issuing Post Name"
        inline={true}
        index={0}
        parent={'lastVisa'}
      />

      <InlineInputChildDate
        title={"issueDate"}
        helpText=""
        register={register}
        errors={errors}
        label="Visa issue date"
        isVisible={formData.hasIssuedVisa}
        disabled={false}
        inline={true}
        endYear="current"
        index={0}
        parent={'lastVisa'}
      />
      <InlineInputChildDate
        title={"expirationDate"}
        helpText=""
        required={false}
        register={register}
        errors={errors}
        label="Visa expiration date"
        isVisible={formData.hasIssuedVisa}
        disabled={false}
        inline={true}
        endYear="current"
        index={0}
        parent={'lastVisa'}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"visaNumber"}
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
        index={0}
        parent="lastVisa"
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
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"year"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hadVisaLost && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Year"
        index={0}
        parent={'lostVisa'}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"explain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hadVisaLost && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"
        index={0}
        parent={'lostVisa'}
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
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"visaCancelledExplain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasVisaCancelled && formData.hasIssuedVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"

        index={0}
        parent={'canceledVisa'}
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
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"year"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasBeenRefusedForVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Year"
        index={0}
        parent={'refusedVisa'}
      />
      <InlineInputChildText
        setFormData={setFormData}
        required={true}
        title={"explain"}
        helpText="  "
        register={register}
        type="text"
        errors={errors}
        isVisible={formData.hasBeenRefusedForVisa}
        disabled={false}
        handleCheckboxChange={handleCheckboxChange}
        formData={formData}
        label="Explain"

        index={0}
        parent={'refusedVisa'}
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
        title={"hasAnyoneEverFilledOnBehalfExplain"}
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
