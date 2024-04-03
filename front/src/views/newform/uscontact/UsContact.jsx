import { useState, useEffect } from "react";
import InputText from "../elements/InputText";
import InlineDrop from "../elements/InlineDrop";
import classnames from "classnames";
import { Litepicker, Tippy, Lucide } from "@/base-components";
import InlineInputText from "../elements/InlineInputText";
const UsContact = (props) => {
  const [date, setDate] = useState("");
  const [fieldVisibility, setFieldVisibility] = useState({
    hasAdditionalNames: false,
    hasBirthStateProvince: false,
    // Add more fields if needed
  });
  
  return (
    <>
      <h2 className="mb-5 text-xl font-bold"> Us Contact </h2>

      <hr className="my-5 sa-border-primary" />

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"firstName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="  Organization name "
          isVisible={true}
          disabled={false}
        />

        <InputText
          title={"lastName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="  Relationship to you "
          isVisible={true}
          disabled={false}
        />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"fullName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="  Address "
          isVisible={true}
          disabled={false}
        />

        <InputText
          title={"fullName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="  City "
          isVisible={true}
          disabled={false}
        />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"additionalFirstName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label="State"
          isVisible={true}
          disabled={false}
        />
        <InputText
          title={"additionalLastName"}
          helpText=""
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Zip code "
          disabled={false}
          isVisible={true}
        />
      </div>

      <div className="grid lg:grid-cols-2 lg:gap-32">
        <InputText
          title={"telecodeFirstName"}
          helpText=" "
          register={props.register}
          type="text"
          errors={props.errors}
          label="  Phone Number , numeric only, "
          isVisible={true}
          disabled={false}
        />
        <InputText
          title={"telecodeFirstName"}
          helpText=" "
          register={props.register}
          type="text"
          errors={props.errors}
          label=" Email"
          isVisible={true}
          disabled={false}
        />
      </div> */}
    </>
  );
};

export default UsContact;
