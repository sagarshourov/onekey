import { useState, useEffect } from "react";
import InlineSwitch from "../elements/InlineSwitch";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
const Security = (props) => {
  const [date, setDate] = useState("");
  const { errors, register, fieldVisibility, handleCheckboxChange } = props;
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
      />
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you traveled outside your country (not including the United States) in the last 5 years?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you have any specialized skills or training, such as firearms, explosives, nuclear, biological, or chemical experience?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever served in, been a member of, or been involved with a paramilitary unit, vigilante unit, rebel group, guerrilla group, or insurgent organization?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you have a communicable disease of public health significance? (Communicable diseases of public significance include chancroid, gonorrhea, granuloma inguinale, infectious leprosy, lymphogranuloma venereum, infectious stage syphilis, active tuberculosis, and other diseases as determined by the Department of Health and Human Services.?"
      />
      "{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you have a mental or physical disorder that poses or is likely to pose a threat to the safety or welfare of yourself or others?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you or have you ever been a drug abuser or addict?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been arrested or convicted for any offense or crime, even though subject of a pardon, amnesty, or other similar action?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever violated, or engaged in a conspiracy to violate, any law relating to controlled substances?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you coming to the United States to engage in prostitution or unlawful commercialized vice or have you been engaged in prostitution or procuring prostitutes within the past 10 years?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been involved in, or do you seek to engage in, money laundering?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever committed or conspired to commit a human trafficking offense in the United States or outside the United States?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever knowingly aided, abetted, assisted or colluded with an individual who has committed, or conspired to commit a severe human trafficking offense in the United States or outside the United States?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you the spouse, son, or daughter of an individual who has committed or conspired to commit a human trafficking offense in the United States or outside the United States and have you within the last five years, knowingly benefited from the trafficking activities?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you seek to engage in espionage, sabotage, export control violations, or any other illegal activity while in the United States?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Do you seek to engage in terrorist activities while in the United States or have you ever engaged in terrorist activities?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever or do you intend to provide financial assistance or other support to terrorists or terrorist organizations?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you a member or representative of a terrorist organization?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever ordered, incited, committed, assisted, or otherwise participated in genocide?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever committed, ordered, incited, assisted, or otherwise participated in torture?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you committed, ordered, incited, assisted, or otherwise participated in extrajudicial killings, political killings, or other acts of violence?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever engaged in the recruitment or the use of child soldiers?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you, while serving as a government official, been responsible for or directly carried out, at any time, particularly severe violations of religious freedom?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been directly involved in the establishment or enforcement of population controls forcing a woman to undergo an abortion against her free choice or a man or a woman to undergo sterilization against his or her free will?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been directly involved in the coercive transplantation of human organs or bodily tissue?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever sought to obtain or assist others to obtain a visa, entry into the United States, or any other United States immigration benefit by fraud or willful misrepresentation or other unlawful means?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever withheld custody of a U.S. citizen child outside the United States from a person granted legal custody by a U.S. court?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you voted in the United States in violation of any law or regulation?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever renounced United States citizenship for the purposes of avoiding taxation?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Are you the spouse, son, or daughter of an individual who has engaged in terrorist activity, including providing financial assistance or other support to terrorists or terrorist organizations, in the last five years?"
      />{" "}
      <InlineSwitch
        isVisible={true}
        fullWidth={true}
        title="hasServedMilitary"
        handleCheckboxChange={handleCheckboxChange}
        label="
Have you ever been removed or deported from any country? "
      />
    </>
  );
};

export default Security;
