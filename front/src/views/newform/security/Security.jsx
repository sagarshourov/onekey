import { useState, useEffect } from "react";
import InlineSwitch from "../elements/InlineSwitch";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
import InlineInputDate from "../elements/InlineInputDate";

import data from "../elements/data.json";
import AddCountry from "./AddCountry";
import Questions from "./Questions";
const Security = (props) => {
  const [date, setDate] = useState("");
  const {
    errors,
    register,
    fieldVisibility,
    setFormData,
    formData,
    handleCheckboxChange,
  } = props;
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Security Question</h2>
      <hr className="my-5 sa-border-primary" />
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="Have you ever served in the military?"
        formData={formData}
      />
      <InlineDrop
        isVisible={formData.hasServedMilitary}
        register={props.register}
        errors={props.errors}
        title={"militaryExperiences[0].country"}
        data={data.countries}
        label="Country/Region"
        inline={true}
      />
       <InlineInputText
    required={true}
        formData={formData}
        title={"militaryExperiences[0].service"}
        check=""
        label="Branch of Service"
        condition={false}
        disabled={false}
        helpText=""
        checkLabel=""
        isVisible={formData.hasServedMilitary}
        register={register}
        errors={errors}
      />
       <InlineInputText
    required={true}
        formData={formData}
        title={"militaryExperiences[0].rank"}
        check=""
        label="Rank/Position"
        condition={false}
        disabled={false}
        helpText=""
        checkLabel=""
        isVisible={formData.hasServedMilitary}
        register={register}
        errors={errors}
      />
       <InlineInputText
    required={true}
        formData={formData}
        title={"militaryExperiences[0].speciality"}
        check=""
        label="Military Specialty"
        condition={false}
        disabled={false}
        helpText=""
        checkLabel=""
        isVisible={formData.hasServedMilitary}
        register={register}
        errors={errors}
      />
      <InlineInputDate
        title={"militaryExperiences[0].dateStart"}
        helpText=""
        register={register}
        errors={errors}
        label="Date of Service From"
        isVisible={formData.hasServedMilitary}
        disabled={false}
        inline={true}
      />
      <InlineInputDate
        title={"militaryExperiences[0].dateEnd"}
        helpText=""
        register={register}
        errors={errors}
        label="Date of Service To"
        isVisible={formData.hasServedMilitary}
        disabled={false}
        inline={true}
      />
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        formData={formData}
        title="hasTraveledWithinFiveYear"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you traveled outside your country (not including the United States) in the last 5 years?"
      />
      <AddCountry
        formData={formData}
        isVisible={formData.hasTraveledWithinFiveYear}
        register={register}
        errors={errors}
        setFormData={setFormData}
      />
      {/* <InlineSwitch
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasExplosiveExperience"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?"
      /> */}
      <Questions
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasExplosiveExperience"
        register={register}
        errors={errors}
        handleCheckboxChange={handleCheckboxChange}
        label="Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?"
      />
      <Questions
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="insurgentOrganizationMember"
        register={register}
        errors={errors}
        handleCheckboxChange={handleCheckboxChange}
        label="Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?"
      />
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        title="communicableDisease"
        handleCheckboxChange={handleCheckboxChange}
        label="Do you have a communicable disease of public health significance? (Communicable diseases of public significance include chancroid, gonorrhea, granuloma inguinale, infectious leprosy, lymphogranuloma venereum, infectious stage syphilis, active tuberculosis, and other diseases as determined by the Department of Health and Human Services.?"
      />
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="disorder"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?"
      />
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="drugAddict"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you or have you ever been a drug abuser or addict?"
      />
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="arrested"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="controlledSubstances"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever violated, or engaged in a conspiracy to violate, any law relating to controlled substances?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="prostitution"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you coming to the United States to engage in prostitution or unlawful commercialized vice or have you been engaged in prostitution or procuring prostitutes within the past 10 years?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="moneyLaundering"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been involved in, or do you seek to engage in, money laundering?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="trafficking"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever committed or conspired to commit a human trafficking offense in the United States or outside the United States?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="assistedTrafficking"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a severe human trafficking offense in the United States or outside the United States?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="relativeTrafficking"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you the spouse, son, or daughter of an individual who has committed or conspired to commit a human trafficking offense in the United States or outside the United States and have you within the last five years, knowingly benefited from the trafficking activities?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="illegalActivity"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the United States?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="terroristActivity"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you seek to engage in terrorist activities while in the United States or have you ever engaged in terrorist activities?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="financingTerrorists"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorist organizations?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="terroristMember"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you a member or representative of a terrorist organization?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="genocide"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        formData={formData}
        isVisible={true}
        fullWidth={true}
        title="torture"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever committed, ordered, incited, assisted, or otherwise participated in torture?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        formData={formData}
        isVisible={true}
        fullWidth={true}
        title="killings"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you committed, ordered, incited, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        formData={formData}
        isVisible={true}
        fullWidth={true}
        title="childSoldier"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever engaged in the recruitment or the use of child soldiers?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        formData={formData}
        isVisible={true}
        fullWidth={true}
        title="religiousFreedom"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly severe violations of religious freedom?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary23"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary24"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary25"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever sought to obtain or assist others to obtain a visa, entry into the United States, or any other United States immigration benefit by fraud or willful misrepresentation or other unlawful means?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary26"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever withheld custody of a U.S. citizen child outside the United States from a person granted legal custody by a U.S. court?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        fullWidth={true}
        formData={formData}
        title="hasServedMilitary27"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you voted in the United States in violation of any law or regulation?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary28"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever renounced United States citizenship for the purposes of avoiding taxation?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary29"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?"
      />{" "}
      <Questions
        register={register}
        errors={errors}
        isVisible={true}
        formData={formData}
        fullWidth={true}
        title="hasServedMilitary30"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been removed or deported from any country? "
      />
    </>
  );
};

export default Security;
